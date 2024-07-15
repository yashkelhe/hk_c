import { getClient } from "./a";

async function createTable() {
  try {
    const client = await getClient();

    // First table creation query
    const queryTable = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
      )`;

    await client.query(queryTable);

    // Second table creation query
    const queryTable2 = `
      CREATE TABLE IF NOT EXISTS tasks (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        user_id INTEGER REFERENCES users(id),
        done BOOLEAN DEFAULT FALSE
      )`;

    await client.query(queryTable2);

    console.log("Tables created successfully!");
  } catch (e) {
    console.error("Error creating tables:", e);
  }
}

createTable();
