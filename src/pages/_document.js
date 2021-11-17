import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="alternate"
            type="application/rss+xml"
            title="Posts (RSS)"
            href="/feeds/posts.rss.xml"
          />
          <link
            rel="alternate"
            type="application/rss+atom"
            title="Posts (ATOM)"
            href="/feeds/posts.atom.xml"
          />
          <link
            rel="alternate"
            type="application/json"
            title="Posts (JSON)"
            href="/feeds/posts.json"
          />
          <link
            rel="alternate"
            type="application/rss+xml"
            title="COMPUTERS issues (RSS)"
            href="/feeds/computers.rss.xml"
          />
          <link
            rel="alternate"
            type="application/rss+atom"
            title="COMPUTERS issues (ATOM)"
            href="/feeds/computers.atom.xml"
          />
          <link
            rel="alternate"
            type="application/json"
            title="COMPUTERS issues (JSON)"
            href="/feeds/computers.json"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            async
            defer
            src="https://sa.mikkelmalmberg.com/latest.js"
          ></script>
          <noscript>
            <img src="https://sa.mikkelmalmberg.com/noscript.gif" alt="" />
          </noscript>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
