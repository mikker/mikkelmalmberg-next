import notion from "../../../notion";

export default async function handle(req, res) {
  const { id } = req.body;

  const current = await notion.pages.retrieve({
    page_id: id,
  });
  const result = await notion.pages.update({
    page_id: id,
    properties: {
      upvotes: {
        number: current.properties.upvotes.number + 1,
      },
    },
  });

  res.json({ upvotes: result.properties.upvotes.number });
}
