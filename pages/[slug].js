import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { getPost, getAllPosts } from "../lib/posts";
import markdown from "../lib/markdown";

export default function PostPage({ post }) {
  return (
    <Layout active="writing" title={post.title}>
      <div>
        <article className="mx-auto prose lg:prose-lg lg:max-w-2xl">
          <header>
            <h1>{post.title}</h1>
          </header>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPost(params.slug, ["title", "content"]);

  const content = await markdown(post.content);

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: { slug: `${post.slug}` },
      };
    }),
    fallback: false,
  };
}
