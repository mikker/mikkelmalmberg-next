import Layout from "../components/Layout";
import { useState } from "react";
import Link from "next/link";
import prisma from "../src/prisma";
import { post } from "../src/api";
import { formatDistance } from "date-fns";
import { sync as markdown } from "../src/markdown";

export default function AmaPage({ questions }) {
  const [body, setBody] = useState("");
  const [didSubmit, setDidSubmit] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    let result;
    try {
      result = await post("/api/ama/ask", { body });
    } catch (error) {}

    setBody("");
    setDidSubmit(true);

    return result;
  };

  return (
    <Layout active="ama" title="AMA">
      <div className="p-5 mx-auto max-w-screen-sm lg:px-0">
        <header className="">
          <h1 className="mb-2 font-black">Ask Me Anything</h1>
          <h2 className="text-gray-500">
            Anything goes! Questions will show up when I add an answer.
          </h2>
        </header>

        <div className="h-3 lg:h-8"></div>

        <form onSubmit={onSubmit} className="">
          <textarea
            rows={3}
            className="mb-2 input w-100"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="How do you even…"
          />

          {body !== "" && (
            <button
              type="submit"
              className="text-black bg-gradient-to-br from-gold-500 to-sunset-300 shadow-sm btn"
            >
              Ask question
            </button>
          )}
          {didSubmit && (
            <div className="p-3 text-gray-900 bg-gold-300">
              <p>
                Question received! Don't forget to check back later for an
                answer ✌
              </p>
            </div>
          )}
        </form>

        <div className="h-6 lg:h-8"></div>

        {questions.map((question) => (
          <>
            <Question question={question} key={question.id} />
            <div className="h-6 lg:h-12" />
          </>
        ))}
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const questions = await prisma.question.findMany({
    where: { published: true },
    include: { answers: {} },
  });
  return {
    props: { questions },
    revalidate: 1, // secs
  };
};

const Question = ({
  question: { id, body, answers, upvotes: initialUpvotes, updatedAt },
}) => {
  const [upvotes, setUpvotes] = useState(initialUpvotes);

  return (
    <div className="">
      <h3 className="mb-0 font-semibold">{body}</h3>
      <ul className="mb-2">
        {answers.map((answer) => (
          <Answer answer={answer} key={answer.id} />
        ))}
      </ul>
      <p className="text-gray-500">
        <button
          className={`relative px-1 py-0 -ml-1 btn ${
            upvotes > 0 && "text-red-500"
          }`}
          onClick={() => {
            setUpvotes(upvotes + 1);
            upvote(id).then(setUpvotes);
          }}
        >
          &hearts;{upvotes}
        </button>
        &nbsp;&middot; {formatDistance(updatedAt, new Date())}
      </p>
    </div>
  );
};

const Answer = ({ answer: { body } }) => (
  <li dangerouslySetInnerHTML={{ __html: markdown(body) }} />
);

const upvote = async (id) => {
  let result;

  try {
    result = await post("/api/ama/upvote", { id });
  } catch (err) {
    console.error(err);
  }

  return (result && result.upvotes) || "err";
};
