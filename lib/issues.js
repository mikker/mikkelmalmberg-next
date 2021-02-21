import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import parse from "date-fns/parseISO";

const issuesDirectory = join(process.cwd(), "_issues");

export function getIssue(num, fields = []) {
  const onlyNum = `${num}`.replace(/\.md/, "");
  const filename = `${onlyNum}.md`;
  const fullPath = join(issuesDirectory, filename);
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

export function getAllIssues(fields = []) {
  const issueNumbers = fs.readdirSync(issuesDirectory);
  const issues = issueNumbers
    .map((num) => getIssue(num, fields))
    .sort((a, b) => (a.published_on > b.published_on ? "-1" : "1"));
  return issues;
}

export function getAllIssuesByYear(fields = []) {
  return getAllIssues(fields)
    .reverse()
    .reduce((sorted, issue) => {
      const date = parse(issue.date);
      const year = date.getFullYear();
      if (!sorted[year]) sorted[year] = [];
      sorted[year].push(issue);
      return sorted;
    }, {});
}
