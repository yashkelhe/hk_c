import { getClient } from "./a";

async function getData() {
  try {
    const client = await getClient();

    const getValue = `SELECT * FROM users`;

    const result = await client.query(getValue);

    console.log("Users1: ");
    for (let user of result.rows) {
      console.log("id:", user.id, "email ", user.email);
    }
  } catch (e) {
    console.error("Something went wrong with the insertion:", e);
  }
}
async function getEmail(email_is: string) {
  try {
    const client = await getClient();

    const getValue = `SELECT * FROM users WHERE email = $1`;

    const result = await client.query(getValue, [email_is]);

    console.log("Users2: ");
    for (let user of result.rows) {
      console.log(
        "id:",
        user.id,
        "email ",
        user.email,
        " password",
        user.password
      );
    }
  } catch (e) {
    console.error("Something went wrong with the insertion:", e);
  }
}
async function getAllTask(userID: number) {
  try {
    const client = await getClient();

    const getValue = `SELECT * FROM tasks WHERE user_id = $1`;

    const result = await client.query(getValue, [userID]);

    console.log("task:3 ");
    for (let user of result.rows) {
      console.log(
        "id:",
        user.id,
        "title ",
        user.title,
        "done",
        user.done,
        "user_id",
        user.user_id
      );
    }
  } catch (e) {
    console.error("Something went wrong with the insertion:", e);
  }
}
getEmail("yashkelhe10@gmail.com");

getAllTask(8);
getData();
