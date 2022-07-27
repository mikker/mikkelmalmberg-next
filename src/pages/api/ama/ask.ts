import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { body } = req.body;

  const result = await prisma.question.create({
    data: { body },
  });

  res.json(result);
}
