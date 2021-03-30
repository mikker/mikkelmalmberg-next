import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Twitter, GitHub, Instagram, Menu, X } from "react-feather";
import Layout from "../components/Layout";

export default function AboutPage() {
  return (
    <Layout active="about" title="Hello, I'm Mikkel Malmberg">
      <div className="max-w-3xl px-3 mx-auto">
        <article className="max-w-xs mx-auto leading-relaxed text-center lg:max-w-md xl:max-w-xl p-9 space-y-4">
          <div className="flex items-end justify-center">
            <div>
              <Image
                src="/mikker-2019-white.png"
                width={180}
                height={180}
                className="rounded-full"
              />
            </div>
            <div className="relative mb-2 -ml-16">
              <Image
                src="/brainbow-logo.svg"
                width={90}
                height={90}
                className=""
              />
            </div>
          </div>

          <h1>
            <strong>Hello,</strong> I'm Mikkel Malmberg.
          </h1>
          <p>
            I build{" "}
            <a className="link" href="https://brainbow.studio">
              products for people
            </a>
            , co-host a{" "}
            <a className="link" href="http://kortsluttet.dk">
              {" "}
              weekly tech show on Danish P1{" "}
            </a>
            , write a{" "}
            <a className="link" href="https://computers.mikkelmalmberg.com">
              well-liked Danish newsletter
            </a>
            , am a Software Engineer at{" "}
            <a className="link" href="https://elastic.co/solutions/apm">
              Elastic
            </a>
            .
          </p>
          <p>
            I'd much rather spend my time trying than dreaming and I don't mind
            a little bit of chaos.
          </p>
        </article>
      </div>
    </Layout>
  );
}
