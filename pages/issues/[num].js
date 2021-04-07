import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../components/Layout";
import Buttondown from "../../components/Buttondown";
import { getIssue, getAllIssues } from "../../src/issues";
import markdown from "../../src/markdown";

export default function IssuePage({ issue }) {
  return (
    <Layout active="writing" title={issue.title}>
      <div className="m-3 lg:mx-auto lg:max-w-2xl xl:max-w-3xl ">
        <p className="mb-3 lg:mb-10">
          <Link href="/writing">
            <a className="link">&larr; Udgaver</a>
          </Link>
        </p>

        <article
          className="prose xl:prose-xl lg:prose-lg dark:prose-light"
          dangerouslySetInnerHTML={{ __html: issue.content }}
        />

        <div className="h-12"></div>

        <div className="p-3 text-center rounded-xl bg-gradient-to-tr from-gold-500 to-sunset-300 dark:text-black lg:p-16">
          <h3 className="font-bold">Kunne du lide, hvad du læste?</h3>
          <div className="h-4"></div>
          <p className="">
            Modtag et mindst lige så lækkert brev
            <br />
            <del>hver fredag</del> (langt fra) <strong>hver uge</strong>:
          </p>
          <div className="h-6"></div>
          <Buttondown list="computers" />
        </div>
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
