import { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { Twitter, GitHub, Instagram, Menu, X } from "react-feather";
import cn from "classnames";

const MobileNav = ({ active, ...props }) => {
  const [open, setOpen] = useState(false);
  const activeCls =
    "btn text-black bg-gradient-to-r dark:from-sunset-300 dark:to-gold-500 from-bg-blue-700 to-purple-500";
  const normieCls = "font-normal btn";

  useEffect(() => {
    const s = document.createElement("script");
    s.setAttribute("src", "https://platform.twitter.com/widgets.js");
    s.setAttribute("async", "true");
    document.head.appendChild(s);
  }, []);

  return (
    <div className="flex flex-col justify-center flex-1" {...props}>
      <div className="flex-0">
        <button
          className="block px-2 btn"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="flex flex-col items-stretch flex-1 mt-2 space-y-2">
          <Link href="/">
            <a className={active === "about" ? activeCls : normieCls}>About</a>
          </Link>

          <Link href="/writing">
            <a className={active === "writing" ? activeCls : normieCls}>
              Writing
            </a>
          </Link>

          <Link href="/ama">
            <a className={active === "ama" ? activeCls : normieCls}>AMA</a>
          </Link>
        </div>
      )}
    </div>
  );
};

const DesktopNav = ({ active, className }) => {
  const activeCls = "btn px-5 font-normal dark:text-white";
  const normieCls =
    "btn px-5 font-normal inline bg-gradient-to-r text-transparent bg-clip-text  dark:from-sunset-300 dark:to-gold-500 from-blue-400 to-purple-500";

  return (
    <div className={cn("space-x-2", className)}>
      <Link href="/">
        <a className={active === "about" ? activeCls : normieCls}>
          Mikkel Malmberg
        </a>
      </Link>

      <Link href="/">
        <a className={active === "about" ? activeCls : normieCls}>About</a>
      </Link>

      {false && (
        <Link href="/projects">
          <a className={active === "projects" ? activeCls : normieCls}>
            Projects
          </a>
        </Link>
      )}

      <Link href="/writing">
        <a className={active === "writing" ? activeCls : normieCls}>Writing</a>
      </Link>

      <Link href="/ama">
        <a className={active === "ama" ? activeCls : normieCls}>AMA</a>
      </Link>

      <Link href="/treehouse">
        <a className={active === "treehouse" ? activeCls : normieCls}>🌳</a>
      </Link>
    </div>
  );
};

export default function Layout({ active, title, children }) {
  return (
    <main>
      <Head>
        <title>{title}</title>
      </Head>

      <nav className="fixed top-0 left-0 right-0 z-20">
        <div className="z-0 p-2 text-xl">
          <MobileNav active={active} className="lg:hidden" />
          <DesktopNav active={active} className="hidden lg:flex" />
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full bg-white dark:bg-black backdrop-blur-20 bg-opacity-10 dark:bg-opacity-10"
          style={{ zIndex: "-1" }}
        />
      </nav>

      <div className="h-12 lg:h-24"></div>

      {children}

      <div className="h-12"></div>
    </main>
  );
}
