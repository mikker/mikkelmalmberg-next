import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { Twitter, GitHub, Instagram, Menu, X } from "react-feather";
import cn from "classnames";

const MobileNav = ({ active, ...props }) => {
  const [open, setOpen] = useState(false);
  const activeCls =
    "text-gray-800 bg-black btn dark:bg-gray-100 dark:text-gray-300 bg-opacity-5";
  const normieCls = "font-normal btn";

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

          <Link href="/projects">
            <a className={active === "projects" ? activeCls : normieCls}>
              Projects
            </a>
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
  const activeCls =
    "text-gray-800 bg-black xl:px-10 btn dark:bg-gray-800 dark:text-gray-300 bg-opacity-5 dark:bg-opacity-90";
  const normieCls = "btn xl:px-10 font-normal dark:bg-gray-700";

  return (
    <div className={cn("justify-center space-x-2", className)}>
      <Link href="/">
        <a className={active === "about" ? activeCls : normieCls}>About</a>
      </Link>

      <Link href="/projects">
        <a className={active === "projects" ? activeCls : normieCls}>
          Projects
        </a>
      </Link>

      <Link href="/writing">
        <a className={active === "writing" ? activeCls : normieCls}>Writing</a>
      </Link>

      <Link href="/ama">
        <a className={active === "ama" ? activeCls : normieCls}>AMA</a>
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

      <nav className="fixed top-0 left-0 right-0 z-10 shadow-sm">
        <div className="z-0 p-2 text-xl">
          <MobileNav active={active} className="lg:hidden" />
          <DesktopNav active={active} className="hidden lg:flex" />
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-50 dark:bg-opacity-10"
          style={{ WebkitBackdropFilter: "blur(20px)", zIndex: "-1" }}
        />
      </nav>

      <div className="h-14 lg:h-32"></div>

      {children}

      <div className="h-12"></div>
    </main>
  );
}
