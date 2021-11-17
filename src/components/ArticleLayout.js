import Layout from "./Layout";
import { Container } from "../components";

function ArticleLayout({ children, ...props }) {
  return (
    <Layout {...props}>
      <Container>
        <article className="prose xl:prose-xl lg:prose-lg dark:prose-light">
          {children}
        </article>
      </Container>
    </Layout>
  );
}

export default ArticleLayout;
