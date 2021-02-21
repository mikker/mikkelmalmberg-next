import mdit from "markdown-it";
import footnotes from "markdown-it-footnote";
import anchor from "markdown-it-anchor";
import implicitFigures from "markdown-it-implicit-figures";
import externalLinks from "markdown-it-external-links";
import video from "markdown-it-video";
import RegExp from "markdown-it-regexp";

const tweets = new RegExp(
  /https?:\/\/(www\.)?twitter\.com\/[a-z0-9]+\/status\/([a-z0-9]+)/gi,
  function (match, utils) {
    console.log(match);
    return `abe${match[2]}`;
  }
);

const md = mdit({
  html: true,
  linkify: true,
  typographer: true,
})
  .use(footnotes)
  .use(anchor)
  .use(implicitFigures)
  .use(externalLinks)
  .use(video)
  .use(tweets);

export default async function markdown(markdown) {
  return md.render(markdown);
}

// import marked from 'marked'

// export default async function markdown(markdown) {
//   return marked(markdown, {
//     sanitize: false,
//     smartypants: true,

//   })
// }

// import remark from "remark";
// import html from "remark-html";
// import images from "remark-images";
// import smarty from "@silvenon/remark-smartypants";
// import externalLinks from "remark-external-links";
// import numberedFootnotes from "remark-numbered-footnotes";

// export default async function markdown(markdown) {
//   const result = await remark()
//     .use(images)
//     .use(html)
//     .use(externalLinks)
//     .use(smarty)
//     .use(numberedFootnotes)
//     .process(markdown);
//   return result.toString();
// }
