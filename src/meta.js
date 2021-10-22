import { NextSeo } from "next-seo";

const Sampler = (templateId) => {
  const SAMPLER_BASE_URL = "https://sampler.app/api";

  const getImage = (data) => {
    const queryParams = data
      ? Object.entries(data).reduce((sum, [key, value]) => {
          const separator = sum.length === 0 ? "?" : "&";
          return `${sum}${separator}${key}=${encodeURIComponent(value)}`;
        }, "")
      : "";
    return `${SAMPLER_BASE_URL}/${templateId}/image.jpeg${queryParams}`;
  };

  return {
    getImage,
  };
};

export const issuesTemplate = Sampler("ae56cd06-c1e7-44df-b03d-471267075f22");
export const getOpenGraphImage = (data) => issuesTemplate.getImage(data);

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
