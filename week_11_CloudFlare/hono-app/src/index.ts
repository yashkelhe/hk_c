import { Hono } from "hono";

const app = new Hono();

app.post("/", async (c) => {
  const body = await c.req.json();
  console.log(body); //the body is like u send something from the like input
  console.log(c.req.header("Authorization")); //basicaly it will take the value in the key and pair
  console.log(c.req.query("id")); ///http://localhost:4000/? id= 234
  return c.text("Hello Hono!");
});

export default app;
