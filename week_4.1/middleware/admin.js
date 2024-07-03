const { passwordFinal } = require("../config");
const jwt = require("jsonwebtoken");

const AdminMiddleware = (req, res, next) => {
  // this header is for the authentication if u dont give this then it will give an error
  const auth = req.headers.authorization;
  const authSplit = auth.split(" ");
  const token = authSplit[1];
  // second filed is password
  try {
    const verifiedUser = jwt.verify(token, passwordFinal);
    if (verifiedUser.username) {
      next();
    } else {
      res.json({ msg: "there is up with the authentication" }).status(404);
    }
  } catch (e) {
    console.log("there is  error");
  }
};

module.exports = AdminMiddleware;
