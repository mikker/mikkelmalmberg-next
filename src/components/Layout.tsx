import { useEffect, FC } from "react";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { Menu, X } from "react-feather";
import cn from "classnames";
import { Container } from "../components";

const MobileNav: FC<React.HTMLAttributes<HTMLDivElement> & { active?: string }> = ({ active, ...props }) => {
  const [open, setOpen] = useState(false);
  const activeCls =
    "btn font-bold text-xl text-white dark:text-black bg-gradient-to-r dark:from-sunset-300 dark:to-gold-500 from-blue-700 to-purple-500";
  const normieCls = "text-xl btn";

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

const DesktopNav: FC<React.HTMLAttributes<HTMLDivElement> & { active?: string }> = ({ active, className }) => {
  const activeCls = "btn px-5 dark:text-white";
  const normieCls =
    "btn font-semibold px-5 inline bg-gradient-to-r text-transparent bg-clip-text  dark:from-sunset-300 dark:to-gold-500 from-blue-400 to-purple-500";

  return (
    <div className={cn("-ml-5 space-x-2", className)}>
      <Link href="/">
        <a className={active === "about" ? activeCls : normieCls}>
          Mikkel Malmberg
        </a>
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
    </div>
  );
};

type LayoutProps = {
  active?: string;
  title?: string;
}

const Layout: FC<React.HTMLAttributes<HTMLDivElement> & LayoutProps> = ({ active, title, children, ...props }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  return (
    <main {...props}>
      <Head>
        <title>{title}</title>
      </Head>

      <nav className="fixed top-0 left-0 right-0 z-50">
        <Container className="py-3">
          <MobileNav active={active} className="md:hidden" />
          <DesktopNav active={active} className="hidden md:flex" />
        </Container>
        <div
          className="absolute top-0 left-0 w-full h-full bg-white/80 dark:bg-black/80 backdrop-blur"
          style={{ zIndex: "-1" }}
        />
      </nav>

      <div className="h-12 md:h-24"></div>

      {children}

      <div className="h-12"></div>
    </main>
  );
}

export default Layout;

