import { bannerbearImage } from "./meta";

// Hack to work around exporting functions from MDX
export function getStaticProps() {
  const ogImage = bannerbearImage("/uses");
  return { props: { ogImage } };
}
