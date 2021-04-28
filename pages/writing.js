import Layout from "../components/Layout";
import Link from "next/link";
import { getAllIssuesByYear } from "../src/issues";
import { getAllPosts } from "../src/posts";
import Buttondown from "../components/Buttondown";

export default function WritingPage({ issuesByYear, postsByDate }) {
  return (
    <Layout active="writing" title="Writing">
      <div className="p-5 mx-auto max-w-screen-xl lg:flex lg:space-x-8">
        <div className="lg:w-1/2 flex-0 space-y-3">
          <h2 className="font-semibold">POSTS</h2>
          <p className="">
            <span className="inline-block px-1 text-white bg-blue-500 rounded">
              English
            </span>{" "}
            musings on building software
          </p>

          <div className="p-2 text-base bg-gray-100 dark:bg-gray-800 rounded-xl">
            <Buttondown list="brainbow" buttonTitle="Subscribe" />
          </div>

          <ul className="">
            {postsByDate.map((post) => (
              <li key={post.slug}>
                <Link href={`/${post.slug}`}>
                  <a className="link">{post.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="h-6 lg:hidden"></div>

        <div className="lg:w-1/2 flex-0 space-y-3">
          <h2 className="font-semibold">COMPUTERS</h2>
          <p className="">
            {" "}
            <span className="inline-block px-1 text-white bg-red-500 rounded">
              Danish
            </span>{" "}
            newsletter on life with computers
          </p>

          <div className="p-2 text-base bg-gray-100 dark:bg-gray-800 rounded-xl">
            <Buttondown list="computers" buttonTitle="Tilmeld" />
          </div>

          {Object.keys(issuesByYear)
            .sort()
            .reverse()
            .map((year) => {
              const sorted = issuesByYear[year]
                .sort((a, b) => a.issue - b.issue)
                .reverse();

              return (
                <div key={year}>
                  <h2 className="font-semibold">{year}</h2>
                  <ul className="">
                    {sorted.map((issue) => (
                      <li key={issue.issue}>
                        <Link href={`/issues/${issue.issue}`}>
                          <a className="link">
                            #{issue.issue} {issue.title}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const issuesByYear = getAllIssuesByYear(["issue", "title", "date"]);
  const postsByDate = getAllPosts(["title", "slug"]);

  return {
    props: {
      issuesByYear,
      postsByDate,
    },
  };
}
