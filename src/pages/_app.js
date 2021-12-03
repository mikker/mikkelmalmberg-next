import NextNprogress from "nextjs-progressbar";
import { useEffect } from "react";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const s = document.createElement("script");
    s.setAttribute("src", "https://platform.twitter.com/widgets.js");
    s.setAttribute("async", "true");
    document.head.appendChild(s);
  }, []);

  return (
    <>
      <NextNprogress color="#ffb3a1" height={3} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
