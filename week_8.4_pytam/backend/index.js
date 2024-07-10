const express = require("express");
const mainRouter = require("./routes/index");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/app/v1", mainRouter);
app.listen(3000, () =>
  console.log("The server has been established on port 3000")
);

// app/v1/user/signup
// app/v1/user/signin
// app/v1/user/changePassword
