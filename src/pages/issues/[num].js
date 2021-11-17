import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../components/Layout";
import Buttondown from "../../components/Buttondown";
import { getIssue, getAllIssues } from "../../issues";
import markdown from "../../markdown";
import Meta, { bannerbearImage } from "../../meta";

export default function IssuePage({ issue, ogImage }) {
  return (
    <Layout active="writing" title={issue.title}>
      <Meta title={issue.title} description='COMPUTERS er et nyhedsbrev af Mikkel Malmberg' image={ogImage} />

      <div className="m-3 lg:mx-auto lg:max-w-2xl xl:max-w-3xl ">
        <p className="mb-3 lg:mb-10">
          <Link href="/writing">
            <a className="text-sm bg-gray-500 bg-opacity-10 dark:bg-opacity-30 btn">
              &larr; Flere udgaver
            </a>
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
  const issue = getIssue(params.num, ["issue", "title", "content"]);
  const ogImage = bannerbearImage(`#${issue.issue}: ${issue.title}`);
  const content = await markdown(issue.content);

  return {
    props: {
      issue: {
        ...issue,
        content,
      },
      ogImage,
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
