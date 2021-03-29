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
