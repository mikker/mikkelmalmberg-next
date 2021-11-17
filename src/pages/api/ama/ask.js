import notion, { databaseId } from "../../../notion";

export default async function handle(req, res) {
  const { body } = req.body;

  const result = await notion.pages.create({
    parent: { database_id: databaseId },
    properties: {
      question: {
        title: [{ text: { content: body } }],
      },
    },
  });

  res.json(result);
}
