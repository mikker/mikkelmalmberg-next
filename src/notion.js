import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_SECRET });

export default notion;

export const databaseId = "9586fb63-a1ef-4e0a-a4ea-a0a2ca18cb00";
