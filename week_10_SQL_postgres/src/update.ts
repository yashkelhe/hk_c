import { getClient } from "./a";

async function getJoinData(ID: number) {
  try {
    const client = await getClient();
    console.log("Connected successfully");

    const getValue = `
     UPDATE users SET password = $1 WHERE id=$2
    `;

    const result = await client.query(getValue, ["something", ID]);
    console.log(result.rows);
  } catch (e) {
    console.error("Something went wrong with the query:", e);
  }
}

getJoinData(1);
