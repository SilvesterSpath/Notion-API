const dotenv = require('dotenv').config();
const { Client } = require('@notionhq/client');

// Init Client

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

// List Database data

const listDatabases = async () => {
  const res = await notion.databases.list();
};

const databaseId = process.env.NOTION_DATABASE_ID;

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
