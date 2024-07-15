import { getClient } from "./a";

async function insertValue() {
  try {
    const client = await getClient();

    const insertData = `INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id`;
    const values = ["yashkelhe10@gmail.com", "thepasswsword"];
    const result = await client.query(insertData, values);

    const insertData2 = `INSERT INTO tasks (title, user_id) VALUES ($1, $2) RETURNING id`;
    const values2 = ["something", result.rows[0].id];
    await client.query(insertData2, values2);

    console.log("The insertion is done successfully");
  } catch (e) {
    console.error("Something went wrong with the insertion:", e);
  }
}

insertValue();
