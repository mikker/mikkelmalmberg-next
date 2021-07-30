import { Feed } from "feed";
import { getAllIssues } from "../src/issues";
import { getAllPosts } from "../src/posts";
import { sync as markdown } from "../src/markdown";
import fs from "fs";

const baseUrl = "https://mikkelmalmberg.com";
const author = {
  name: "Mikkel Malmberg",
  email: "mikkel@brnbw.com",
  link: baseUrl,
};
const date = new Date();

const base = {
  title: "Posts by Mikkel Malmberg",
  id: baseUrl,
  link: baseUrl,
  image: `${baseUrl}/mikker-2019-white.png`,
  favicon: `${baseUrl}/favicon.ico`,
  copyright: `${date.getFullYear()} Mikkel Malmberg`,
  updated: date,
  generator: "Next.js",
  author,
};

async function generateFeeds() {
  const posts = new Feed({
    ...base,
    description: "Musings on building software",
    language: "en",
    feedLinks: {
      rss2: `${baseUrl}/feeds/posts.rss.xml`,
      json: `${baseUrl}/feeds/posts.json`,
      atom: `${baseUrl}/feeds/posts.atom.xml`,
    },
  });

  getAllPosts(["title", "slug", "content", "date"]).forEach((post) => {
    const permalink = `${baseUrl}/${post.slug}`;

    posts.addItem({
      title: post.title,
      id: permalink,
      link: permalink,
      description: "A post",
      content: markdown(post.content),
      author: [author],
      date: new Date(post.date),
    });
  });

  const issues = new Feed({
    ...base,
    description: "COMPUTERS er et nyhedsbrev om livet med computere",
    language: "da",
    feedLinks: {
      rss2: `${baseUrl}/feeds/computers.rss.xml`,
      json: `${baseUrl}/feeds/computers.json`,
      atom: `${baseUrl}/feeds/computers.atom.xml`,
    },
  });

  getAllIssues(["title", "issue", "content", "date"])
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .forEach((issue) => {
      const permalink = `${baseUrl}/issues/${issue.issue}`;

      issues.addItem({
        title: issue.title,
        id: permalink,
        link: permalink,
        description: "En udgave af COMPUTERS",
        content: markdown(issue.content),
        author: [author],
        date: new Date(issue.date),
      });
    });

  fs.mkdirSync("./public/feeds", { recursive: true });

  fs.writeFileSync("./public/feeds/posts.rss.xml", posts.rss2());
  fs.writeFileSync("./public/feeds/posts.atom.xml", posts.atom1());
  fs.writeFileSync("./public/feeds/posts.json", posts.json1());

  fs.writeFileSync("./public/feeds/computers.rss.xml", issues.rss2());
  fs.writeFileSync("./public/feeds/computers.atom.xml", issues.atom1());
  fs.writeFileSync("./public/feeds/computers.json", issues.json1());
}

export default generateFeeds;
