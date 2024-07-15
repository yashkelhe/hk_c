import { Client } from "pg";

export async function getClient(): Promise<Client> {
  const client = new Client({
    connectionString:
      "postgresql://firstOne_owner:OoX8AMBLI7Gt@ep-dry-water-a5th684m.us-east-2.aws.neon.tech/firstOne?sslmode=require",
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
