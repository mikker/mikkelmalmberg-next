import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { getIssue, getAllIssues } from "../../lib/issues";
import markdown from "../../lib/markdown";

export default function IssuePage({ issue }) {
  return (
    <Layout active='writing' title={issue.title}>
      <div>
        <article
          className="mx-auto prose lg:prose-lg lg:max-w-2xl"
          dangerouslySetInnerHTML={{ __html: issue.content }}
        />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const issue = getIssue(params.num, ["title", "content"]);

  const content = await markdown(issue.content);

  return {
    props: {
      issue: {
        ...issue,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const issues = getAllIssues(["issue"]);

  return {
    paths: issues.map((issue) => {
      return {
        params: { num: `${issue.issue}` },
      };
    }),
    fallback: false,
  };
}
