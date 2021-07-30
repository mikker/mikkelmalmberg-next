import NextNprogress from "nextjs-progressbar";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress color="#ffb3a1" height={3} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
