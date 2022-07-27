import { fromUnixTime } from 'date-fns';
import { readFileSync } from 'fs';
import { prisma } from '../src/prisma'

async function main() {
  const questions = JSON.parse(readFileSync(__dirname + '/../data/Question.json', 'utf-8'))
  const answers = JSON.parse(readFileSync(__dirname + '/../data/Answer.json', 'utf-8'))

  for (const question of questions) {
    const id = question.id;
    const questionAnswers = answers.filter((a: any) => a.questionId === id);

    console.log(question, questionAnswers);

    const result = await prisma.question.create({
      data: {
        body: question.body,
        upvotes: question.upvotes,
        published: question.published === 1,
        answeredAt: fromUnixTime(Math.round(question.answeredAt / 1000))
      }
    });

    for (const answer of questionAnswers) {
      await prisma.answer.create({
        data: {
          body: answer.body,
          questionId: result.id,
        }
      })
    }

    console.log('.');
  }
}

main().then()
