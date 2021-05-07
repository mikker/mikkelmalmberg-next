import Layout from "./Layout";

function ArticleLayout({ children, ...props }) {
  return (
    <Layout {...props}>
      <div className="m-3 lg:mx-auto lg:max-w-2xl xl:max-w-3xl ">
        <article className="prose xl:prose-xl lg:prose-lg dark:prose-light">
          {children}
        </article>
      </div>
    </Layout>
  );
}

export default ArticleLayout;
