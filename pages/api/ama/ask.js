import prisma from "../../../src/prisma";

export default async function handle(req, res) {
  const { body } = req.body;

  const result = await prisma.question.create({
    data: { body },
  });

  res.json(result);
}
