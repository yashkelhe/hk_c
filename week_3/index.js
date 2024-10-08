const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const path = require("path");
const { verify } = require("crypto");
const app = express();

// use for the parse
app.use(express.json());
// for Ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// there are three steps to initialize the Mongo
// import
// connect the databas
// create model

mongoose
  .connect("take from newOne")
  .then(() => {
    console.log("the connection has been done for the mongodb");
  })
  .catch(() => {
    console.log("there is something up with the mongo connection");
  });

const modul = mongoose.model("second_DB", { name: String, userName: String });

app.post("/signUp", async (req, res) => {
  const { name, userName } = req.body;
  try {
    // if exits then send back the req
    const existOne = await modul.findOne({ name: name, userName: userName });
    if (existOne) {
      return res.status(400).send("the user is already exist");
    }

    const user = new modul({
      name: name,
      userName: userName,
    });
    user.save();

    res.json({ msg: "done" });
  } catch (err) {
    console.log(err);
  }
});

app.get("/:id", (req, res) => {
  let n = req.params["id"];
  console.log(n);
  res.render("index", { id: req.params["id"] });
});

app.get("/", (req, res) => {
  res.json({ id: "id" });
});

// jwt
// sign , verify, decode
const value = {
  name: "yash",
  accuntDetails: 234123,
};

// frist json and secret  key password
const token = jwt.sign(value, "324");
console.log(token);

try {
  const ver = jwt.verify(token, "324");
  if (ver) console.log("ur login into ur account ", ver);
  else console.log("the account details are not matched");
} catch (r) {
  console.log(e);
}
app.listen(3000, () => {
  console.log("Connection is established on port 3000");
});

// how the jwt works

// first i sign means generate the token and verify will verify by the token which is generated and
// is basically is used for authentication it gives u a long string
// and then  u can  store the token in the DB it will stored in the localmemory
// and then when  user request form the website then it will also send the token
// and check weather the user is some in the backend they have an key which used to varify and  generate the token
