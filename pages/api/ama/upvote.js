import prisma from "../../../src/prisma";

export default async function handle(req, res) {
  const { id } = req.body;

  const result = await prisma.question.update({
    where: { id },
    data: { upvotes: { increment: 1 } },
  });

  res.json(result);
}
