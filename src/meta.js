import { NextSeo } from "next-seo";

const baseUrl =
  "https://on-demand.bannerbear.com/taggedurl/K52R3X18y7Pd4GDwrV/image.jpg";

export const bannerbearImage = (text) =>
  `${baseUrl}?modifications=[text---text~~${encodeURIComponent(text)}]`;

export default function Meta({ title, description, image }) {
  const openGraph = image
    ? {
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
        site_name: "Mikkel Malmberg",
      }
    : {};

  return (
    <NextSeo
      title={title}
      description={description || "Website of Mikkel Malmberg"}
      openGraph={openGraph}
      twitter={{
        handle: "@mikker",
        cardType: "summary_large_image",
      }}
    />
  );
}
