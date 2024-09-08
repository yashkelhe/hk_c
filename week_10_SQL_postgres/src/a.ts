import { Client } from "pg";

export async function getClient(): Promise<Client> {
  const client = new Client({
    connectionString: "take from newOne",
    ssl: {
      rejectUnauthorized: false,
    },
  });

  await client.connect();
  return client;
}

getClient()
  .then((client) => {
    console.log("Connected successfully");
    // You can perform database operations here
    client.end();
  })
  .catch((err) => console.error("Connection error", err.stack));
