const express = require("express");
const bodyParser = require("body-parser");
const AdminRouter = require("./router/admin");
const UserRouter = require("./router/user");

const app = express();

app.use(bodyParser.json());
app.use("/admin", AdminRouter);
app.use("/User", UserRouter);

app.listen(3000, () => {
  console.log("the server is running on port 3000");
});
