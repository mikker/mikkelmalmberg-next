import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Twitter, GitHub, Instagram, Menu, X } from "react-feather";
import Layout from "../components/Layout";
import { Container, A } from "../components";
import cn from "classnames";

export default function AboutPage() {
  return (
    <Layout active="about" title="Hello, I'm Mikkel Malmberg">
      <div className="h-5 md:mt-10" />

      <Container>
        <div className="md:w-full max-w-sm w-40 md:absolute -top-10 -right-20 z-0">
          <Image src={require("../../public/avatar.jpg")} />
        </div>

        <article className="dark:text-white space-y-6 md:space-y-14 mt-5 mx-auto font-cahuenga md:text-5xl lg:text-7xl text-xl leading-normal md:leading-tight lg:leading-tight">
          <p className="relative z-30">
            Hi, I'm <em>Mikkel Malmberg</em>. A multidisciplinary artist and
            independent builder.{" "}
          </p>

          <p className="relative z-30">
            I'm building <A href="https://brainbow.studio">platforms</A> for
            creators and <A href="https://brainbow.studio">apps</A> for advanced
            users. I make <A href="https://mikker.art">art</A> for the curious
            (including me.)
          </p>

          <p>
            I write a well-liked, too-far-between Danish newsletter called{" "}
            <A href="/writing">COMPUTERS</A>, shoot the breeze on{" "}
            <A href="https://twitter.com/mikker">Twitter</A>, juggle three kids.
          </p>
          {/* <p> */}
          {/*   I co-host <A href="http://kortsluttet.dk/">Kortsluttet</A>, a weekly */}
          {/*   tech show on Danish P1 radio, write a well-liked, too-far-between */}
          {/*   Danish newsletter called <A href="/writing">COMPUTERS</A>. */}
          {/* </p> */}
        </article>
      </Container>

      {/* <Boxes /> */}

      <div className="h-8 md:h-24"></div>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <h2 className="col-span-2 text-tertiary md:text-right">
            Work
          </h2>

          <div className="col-span-10 flex flex-col space-y-3 overflow-auto">
            {work.map((position) => (
              <a
                href={position.link}
                className="md:flex items-center md:space-x-4 group"
              >
                <div className="flex-none group-hover:link ">
                  {position.title}
                </div>
                <div className="hidden md:block flex-shrink w-full border-t-2 border-gray-200 dark:border-gray-800"></div>
                <div className="flex-none text-secondary">{position.role}</div>
                <div className="flex-none text-tertiary lining-nums tabular-nums">
                  {position.duration}
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <h2 className="col-span-2 text-tertiary md:text-right">
            Find me
          </h2>

          <div className="col-span-10 flex flex-col space-y-3 overflow-auto">
            {elsewhere.map((destination) => (
              <a
                href={destination.link}
                className="md:flex items-center md:space-x-4 group"
              >
                <div className="flex-none group-hover:link ">
                  {destination.title}
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>

      <div className="h-12"></div>
    </Layout>
  );
}

const work = [
  {
    title: "Kortsluttet",
    role: "Radio Host, P1",
    duration: "2020-____",
    link: "https://www.dr.dk/lyd/p1/kortsluttet",
  },
  {
    title: "Brainbow",
    role: "Self-emplyed",
    duration: "2007–____",
    link: "https://brainbow.studio",
  },
  {
    title: "Elastic",
    role: "Senior Software Engineer",
    duration: "2017-2021",
    link: "https://elastic.co",
  },
  {
    title: "DR",
    role: "Creative Lead, DR News X",
    duration: "2016-2017",
    link: "https://dr.dk",
  },
  {
    title: "DR",
    role: "Lead Developer, DR News X",
    duration: "2015-2016",
    link: "https://dr.dk",
  },
  {
    title: "Founders",
    role: "Prototype Engineer",
    duration: "2013-2014",
    link: "https://founders.as",
  },
  {
    title: "Firmafon",
    role: "Lead mobile/front-end developer",
    duration: "2013-2014",
    link: "https://firmafon.dk",
  },
  {
    title: "Fup i Farvandet",
    role: "Podcast host",
    duration: "2011-2018",
    link: "https://fupifarvandet.dk",
  },
  {
    title: "Stand-up comedian",
    role: "Jokes, primarily",
    duration: "2009–2018",
    link: "https://www.youtube.com/watch?v=TgzjUb-2blI",
  },
  {
    title: "Wemind",
    role: "Student Developer",
    duration: "2008–2010",
    link: "https://wemind.dk",
  },
];

const elsewhere = [
  { title: "twitter.com/mikker", link: "https://twitter.com/mikker" },
  { title: "github.com/mikker", link: "https://github.com/mikker" },
  { title: "mikker.eth", link: "https://mikker.eth.link" },
  { title: "mikkel@brnbw.com", link: "mailto:mikkel@brnbw.com?subject=I'm%20your%20biggest%20fan" },
]

const Boxes = () => {
  const [boxOnTop, setBoxOnTop] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = boxOnTop + 1;
      setBoxOnTop(next === 3 ? 0 : next);
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  });

  const cls = "absolute w-full max-w-screen-sm max-w-xl";

  return (
    <div className="relative">
      <div
        className={cn(
          cls,
          "right-0 -top-2 md:-top-20 bg-red-500",
          boxOnTop === 0 ? "z-20" : "z-10"
        )}
      >
        <div className="aspect-w-1 aspect-h-1">
          <img src={"/avatar.jpg"} className="w-full block" />
        </div>
      </div>
      <div
        className={cn(
          cls,
          "right-2 md:right-20 bg-yellow-300",
          boxOnTop === 1 ? "z-20" : "z-10"
        )}
      >
        <div className="aspect-w-1 aspect-h-1">
          <img src={"/crane.svg"} className="w-full block" />
        </div>
      </div>
      <div
        className={cn(
          cls,
          "right-4 md:right-40 top-2 md:top-20 bg-blue-600",
          boxOnTop === 2 ? "z-20" : "z-10"
        )}
      >
        <div className="aspect-w-1 aspect-h-1">
          <div>{boxOnTop}</div>
        </div>
      </div>
    </div>
  );
};

