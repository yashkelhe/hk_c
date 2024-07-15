import { getClient } from "./a";

async function getJoinData(ID: number) {
  try {
    const client = await getClient();

    // Use LEFT JOIN instead of FULL JOIN
    const getValue = `SELECT users.*, tasks.* FROM users LEFT JOIN tasks ON users.id = tasks.user_id WHERE users.id = $1`;

    const result = await client.query(getValue, [ID]);
    console.log(result.rows);

    for (let user of result.rows) {
      console.log(
        "id:",
        user.id,
        "email:",
        user.email,
        "password:",
        user.password,
        "task_id:",
        user.task_id,
        "task_title:",
        user.title
      );
    }
  } catch (e) {
    console.error("Something went wrong with the query:", e);
  }
}

getJoinData(8);
