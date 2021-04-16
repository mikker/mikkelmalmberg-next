import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../components/Layout";
import Buttondown from "../components/Buttondown";
import { getPost, getAllPosts } from "../src/posts";
import markdown from "../src/markdown";

export default function PostPage({ post }) {
  return (
    <Layout active="writing" title={post.title}>
      <div className="m-3 lg:mx-auto lg:max-w-2xl xl:max-w-4xl ">
        <p className="mb-3 lg:mb-10">
          <div className="h-8" />

          <Link href="/writing">
            <a className="text-sm bg-gray-100 btn">&larr; Writing</a>
          </Link>
        </p>

        <article className="prose xl:prose-2xl lg:prose-lg dark:prose-light">
          <header>
            <h1>{post.title}</h1>
          </header>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        <div className="h-12"></div>

        <div className="p-3 leading-relaxed text-center rounded-xl bg-gradient-to-tr from-gold-500 to-sunset-300 dark:text-black lg:p-16">
          <h3 className="font-bold">Join my mailing list</h3>
          <div className="h-4"></div>
          <p className="">
            Receive a note when I publish new writings on{" "}
            <strong>
              building, shaping and running small-to-medium software.
            </strong>
          </p>
          <div className="h-6"></div>
          <Buttondown list="brainbow" buttonTitle="Subscribe" />
        </div>
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
