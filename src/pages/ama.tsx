import Layout from "../components/Layout";
import { useState } from "react";
import { prisma } from "../prisma";
import { post } from "../api";
import { formatDistance, parseISO } from "date-fns";
import { Container, H1 } from "../components";
import { Answer, Question } from "@prisma/client";
import { sync as markdown } from "../markdown";

export default function AmaPage({ questions }: { questions: Question[] }) {
  const [body, setBody] = useState("");
  const [didSubmit, setDidSubmit] = useState(false);

  const onSubmit = async (event: any) => {
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
      <Container>
        <header className="text-lg">
          <H1>Ask Me Anything</H1>
          <h2 className="text-gray-500">
            Anything goes! Questions will show up when I add an answer.
          </h2>
        </header>

        <div className="h-3 lg:h-8"></div>

        <form onSubmit={onSubmit} className="max-w-xl">
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

        <div className="text-lg leading-relaxed nested-links max-w-prose">
          {questions.map((question: any) => (
            <div key={question.id}>
              <Question question={question} />
              <div className="mb-8 lg:mb-12" />
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const questions = await prisma.question.findMany({
    where: { published: true },
    orderBy: { answeredAt: "desc" },
    include: { answers: {} },
  });

  return {
    props: { questions: JSON.parse(JSON.stringify(questions)) },
    revalidate: 10, // secs
  };
};

const Question = ({
  question: { id, body, answers, upvotes: initialUpvotes, answeredAt },
}: {
  question: Question & { answers: Answer[] };
}) => {
  const [upvotes, setUpvotes] = useState(initialUpvotes);
  const hash = `question-${id}`;

  return (
    <>
      <dt className="mb-2">
        <a className="font-bold" href={`#${hash}`} id={hash}>
          Q: {body}
        </a>
      </dt>
      <dd className="prose-lg">
        {answers.map((answer) => (
          <Answer key={answer.id.toString()} answer={answer} />
        ))}

        <p className="mt-2 text-gray-500">
          <button
            className={`relative px-1 py-0 -ml-1 btn ${
              upvotes > 0 && "text-red-500"
            }`}
            onClick={() => {
              setUpvotes(upvotes + 1);
              upvote(id).then(setUpvotes);
            }}
          >
            &hearts;&nbsp;{upvotes}
          </button>
          &nbsp;&middot;&nbsp;{" "}
          {formatDistance(
            parseISO(answeredAt as unknown as string),
            new Date()
          )}{" "}
          ago
        </p>
      </dd>
    </>
  );
};

const Answer = ({ answer }: { answer?: Answer }) => {
  if (!answer) return null;

  return (
    <div
      className="text-gray-700 dark:text-gray-200"
      dangerouslySetInnerHTML={{ __html: markdown(answer.body) }}
    />
  );
};

const upvote = async (id: number) => {
  let result;

  try {
    result = await post("/api/ama/upvote", { id });
  } catch (err) {
    console.error(err);
  }

  return (result && result.upvotes) || "err";
};
