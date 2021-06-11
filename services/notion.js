const dotenv = require('dotenv').config();
const { Client } = require('@notionhq/client');

let notion_token;
let notion_database_id;

if (process.env.NODE_ENV !== 'production') {
  notion_token = process.env.NOTION_TOKEN;
  notion_database_id = process.env.NOTION_DATABASE_ID;
} else {
  notion_token = process.env.TOKEN;
  notion_database_id = process.env.DATABASE_ID;
}

// Init Client
const notion = new Client({
  auth: notion_token,
});

// List Database data
const listDatabases = async () => {
  const res = await notion.databases.list();
};

const databaseId = notion_database_id;

module.exports = async function getTasks() {
  const payload = {
    path: `databases/${databaseId}/query`,
    method: 'POST',
  };
  const { results } = await notion.request(payload);

  const tasks = results.map((i) => {
    return {
      id: i.id,
      title: i.properties.Name.title[0].text.content,
      date: i.properties.Date.date.start,
      tags: i.properties.Tags.rich_text[0].text.content,
      description: i.properties.Description.rich_text[0].text.content,
    };
  });
  return tasks;
};
