import Layout from "../components/Layout";
import { H2 } from "../components";
import Link from "next/link";
import { getAllIssuesByYear } from "../issues";
import { getAllPosts } from "../posts";
import Buttondown from "../components/Buttondown";
import { Container } from "../components";

export default function WritingPage({ issuesByYear, postsByDate }) {
  return (
    <Layout active="writing" title="Writing">
      <Container>
        <div className="md:h-10"></div>

        <div className="lg:flex lg:space-x-8">
          <div className="lg:w-1/2 flex-0 space-y-3">
            <H2>Pages</H2>
            <ul>
              <li>
                <Link href="/uses">
                  <a className="link">/uses</a>
                </Link>{" "}
                &mdash; My current setup
              </li>
            </ul>

            <div className="h-8"></div>

            <H2>Posts</H2>
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
            <H2>Computers</H2>
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
                    <H2>{year}</H2>
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
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const feeds = await import("../generateFeeds");
  await feeds.default();

  const issuesByYear = getAllIssuesByYear(["issue", "title", "date"]);
  const postsByDate = getAllPosts(["title", "slug"]);

  return {
    props: {
      issuesByYear,
      postsByDate,
    },
  };
}
