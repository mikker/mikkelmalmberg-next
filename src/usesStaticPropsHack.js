import { getOpenGraphImage } from "./meta";

// Hack to work around exporting functions from MDX
export function getStaticProps() {
  const ogImage = getOpenGraphImage({ headline: "/uses" });
  return { props: { ogImage } };
}
