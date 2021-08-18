import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Twitter, GitHub, Instagram, Menu, X } from "react-feather";
import Layout from "../components/Layout";

export default function AboutPage() {
  return (
    <Layout active="about" title="Hello, I'm Mikkel Malmberg">
      <div className="p-5 mx-auto max-w-screen-xl">
        <article className="mx-auto text-xl leading-relaxed md:text-4xl md:leading-relaxed lg:leading-tight lg:font-light max-w-screen-2xl">
          <div className="relative flex justify-center lg:float-right right-5">
            <div className="relative flex-none -mr-20">
              <Image
                src="/mikker-2019-white.png"
                width={256}
                height={256}
                className="rounded-full"
              />
            </div>
            <a
              href="mailto:mikkel@brnbw.com"
              className="z-10 self-end block -mt-5 transform-gpu transition-transform duration-75 hover:scale-105"
            >
              <AvailStamp className="w-32 h-32 select-none spin w-100 h-100" />
            </a>
          </div>

          <div className="h-8 lg:h-0"></div>

          <h1>
            <strong>Hello,</strong> I'm Mikkel.{" "}
          </h1>
          <div className="h-8"></div>
          <p>
            I'm building{" "}
            <a className="link" href="https://brainbow.studio">
              platforms for creators
            </a>
            , co-host a{" "}
            <a className="link" href="http://kortsluttet.dk">
              weekly tech show on Danish P1
            </a>
            , write a{" "}
            <Link href="/writing">
              <a className="link">well-liked Danish newsletter</a>
            </Link>
            , am a Software Engineer at{" "}
            <a className="link" href="https://elastic.co/solutions/apm">
              Elastic
            </a>
            .
          </p>
          <div className="h-8"></div>
          <p>
            I'd much rather spend my time trying than dreaming and I don't mind
            a little bit of chaos.
          </p>
          <div className="h-8"></div>
          <p>
            I'm{" "}
            <a className="link" href="https://twitter.com/mikker">
              @mikker
            </a>{" "}
            on Twitter.
          </p>
        </article>

        <div className="h-12"></div>

        {/* <div className="flex justify-center"> */}
        {/*   <Image src="/brainbow-logo.svg" width={48} height={48} /> */}
        {/* </div> */}

        {/* <div className="h-12"></div> */}

        {/* <div className="grid grid-cols-2 gap-3"> */}
        {/*   <div className='flex items-center justify-center aspect-w-1 aspect-h-1'> */}
        {/*     ok */}
        {/*   </div> */}
        {/*   <div className='flex items-center justify-center aspect-w-1 aspect-h-1'> */}
        {/*     ok */}
        {/*   </div> */}
        {/* </div> */}
      </div>
    </Layout>
  );
}

const AvailStamp = ({ ...props }) => (
  <svg
    key={Math.random()}
    viewBox="0 0 500 500"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <style>{`.text { font-size: 50px; font-weight: 500; }`}</style>
    <defs>
      <circle cx="250" cy="250" r="185" id="circes" />
      <linearGradient id="hotgrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop
          offset="0%"
          style={{ stopColor: "#fdd65a", stopOpacity: "100%" }}
        />
        <stop
          offset="100%"
          style={{ stopColor: "#FFADAD", stopOpacity: "100%" }}
        />
      </linearGradient>
    </defs>
    <circle cx="250" cy="250" r="250" id="circes" fill="url(#hotgrad)" />
    <text className="text">
      <textPath textAnchor="middle" startOffset="75%" xlinkHref="#circes">
        Need help?
      </textPath>
      <textPath textAnchor="middle" startOffset="25%" xlinkHref="#circes">
        Send me an e-mail
      </textPath>
    </text>
  </svg>
);
