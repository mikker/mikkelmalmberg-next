import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
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
