import mdit from "markdown-it";
import footnotes from "markdown-it-footnote";
import anchor from "markdown-it-anchor";
import implicitFigures from "markdown-it-implicit-figures";
import externalLinks from "markdown-it-external-links";
import video from "markdown-it-video";

// const tweetRE = /^https?:\/\/(www\.)?twitter\.com\/[a-z0-9]+\/status\/([0-9]+)$/gi;

const md = mdit({
  html: true,
  linkify: true,
  typographer: true,
})
  .use(footnotes)
  .use(anchor)
  .use(implicitFigures)
  .use(externalLinks)
  .use(video);

export default async function markdown(markdown) {
  return md.render(markdown);
}

export function sync(markdown) {
  return md.render(markdown);
}
