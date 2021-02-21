import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import parse from "date-fns/parseISO";

const postsDirectory = join(process.cwd(), "_posts");

export function getPost(slug, fields = []) {
  const onlySlug = `${slug}`.replace(/\.md/, "");
  const filename = `${onlySlug}.md`;
  const fullPath = join(postsDirectory, filename);
  const contents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(contents);

  const items = {};

  fields.forEach((field) => {
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields = []) {
  const postSlugs = fs.readdirSync(postsDirectory);

  const issues = postSlugs
    .map((slug) => getPost(slug, fields))
    .sort((a, b) => (a.date > b.date ? "-1" : "1"));

  return issues;
}
