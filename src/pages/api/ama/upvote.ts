import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { id } = req.body;

  const result = await prisma.question.update({
    where: { id },
    data: { upvotes: { increment: 1 } },
  });

  res.json(result);
}
