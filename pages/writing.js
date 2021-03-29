import Layout from "../components/Layout";
import Link from "next/link";
import { getAllIssuesByYear } from "../src/issues";
import { getAllPosts } from "../src/posts";

export default function WritingPage({ issuesByYear, postsByDate }) {
  return (
    <Layout active="writing" title="Writing">
      <div className="max-w-4xl p-5 mx-auto lg:flex lg:space-x-8">
        <div className="lg:w-1/2 flex-0 space-y-3">
          <h2 className="font-bold lg:text-3xl">POSTS</h2>
          <p className="text-base">
            <span className="inline-block px-1 text-white bg-blue-500 rounded">
              English
            </span>{" "}
            musings on building software
          </p>
          <ul className="lg:text-lg">
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
          <h2 className="font-bold lg:text-3xl">COMPUTERS</h2>
          <p className="text-base">
            {" "}
            <span className="inline-block px-1 text-white bg-red-500 rounded">
              Danish
            </span>{" "}
            newsletter on life with computers
          </p>

          {Object.keys(issuesByYear)
            .sort()
            .reverse()
            .map((year) => {
              const sorted = issuesByYear[year]
                .sort((a, b) => a.issue - b.issue)
                .reverse();

              return (
                <div key={year}>
                  <h2 className="font-bold lg:text-lg">{year}</h2>
                  <ul className="lg:text-lg">
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
