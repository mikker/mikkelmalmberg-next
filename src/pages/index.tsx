import type { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/Layout";
import { Container, A } from "../components";

const AboutPage: NextPage = () => {
  return (
    <Layout active="about" title="Hello, I'm Mikkel Malmberg">
      <div className="h-5 md:mt-10" />

      <Container>
        <div className="z-0 w-40 max-w-sm md:w-full md:absolute -top-10 -right-20">
          <Image src={require("../../public/avatar.jpg")} />
        </div>

        <article className="mx-auto mt-5 text-xl leading-normal dark:text-white space-y-6 md:space-y-14 font-cahuenga md:text-5xl lg:text-7xl md:leading-tight lg:leading-tight">
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
        </article>
      </Container>

      <div className="h-8 md:h-24"></div>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <h2 className="col-span-2 text-tertiary md:text-right">Work</h2>

          <div className="flex flex-col overflow-auto col-span-10 space-y-3">
            {work.map((position, i) => (
              <a
                href={position.link}
                className="items-center md:flex md:space-x-4 group"
                key={i}
              >
                <div className="flex-none group-hover:link ">
                  {position.title}
                </div>
                <div className="flex-shrink hidden w-full border-t-2 border-gray-200 md:block dark:border-gray-800"></div>
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
          <h2 className="col-span-2 text-tertiary md:text-right">Media</h2>

          <div className="flex flex-col overflow-auto col-span-10 space-y-3">
            {media.map((position, i) => (
              <a
                href={position.link}
                className="items-center md:flex md:space-x-4 group"
                key={i}
              >
                <div className="flex-none group-hover:link ">
                  {position.title}
                </div>
                <div className="flex-shrink hidden w-full border-t-2 border-gray-200 md:block dark:border-gray-800"></div>
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
          <h2 className="col-span-2 text-tertiary md:text-right">Find me</h2>

          <div className="flex flex-col overflow-auto col-span-10 space-y-3">
            {elsewhere.map((destination, i) => (
              <a
                href={destination.link}
                key={i}
                className="items-center md:flex md:space-x-4 group"
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
    title: "Random Character Collective",
    role: "dev",
    duration: "2021-____",
    link: "https://twitter.com/rndmcharacters",
  },
  {
    title: "Brainbow",
    role: "Solo founder",
    duration: "2007-____",
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
    title: "Wemind",
    role: "Student Developer",
    duration: "2008-2010",
    link: "https://wemind.dk",
  },
];

const media = [
  {
    title: "Kortsluttet",
    role: "Radio Host, P1",
    duration: "2020-2021",
    link: "https://www.dr.dk/lyd/p1/kortsluttet",
  },
  {
    title: "Mikkel og et Menneske",
    role: "Podcast host",
    duration: "2012-2012",
    link: "http://moem.dk",
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
    duration: "2009-2018",
    link: "https://www.youtube.com/watch?v=TgzjUb-2blI",
  },
]

const elsewhere = [
  { title: "twitter.com/mikker", link: "https://twitter.com/mikker" },
  { title: "github.com/mikker", link: "https://github.com/mikker" },
  { title: "mikker.eth", link: "https://mikker.eth.link" },
  { title: "mikker.tez", link: "https://mikker.tez.page" },
  {
    title: "mikkel@brnbw.com",
    link: "mailto:mikkel@brnbw.com?subject=I'm%20your%20biggest%20fan",
  },
];

export default AboutPage;
