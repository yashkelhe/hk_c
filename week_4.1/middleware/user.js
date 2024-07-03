const { passwordFinal } = require("../config");
const jwt = require("jsonwebtoken");

async function UserMiddleware(req, res, next) {
  // this header is for the authentication if u dont give this then it will give an error
  const auth = req.headers.authorization;
  const authSplit = auth.split(" ");
  const token = authSplit[1];
  // second filed is password
  // this is for the user here we can  also add the type= user | admin ; this will clear that who is login
  const verifiedUser = jwt.verify(token, passwordFinal);
  if (verifiedUser.username) {
    // it will store in req object and we can use in next rout
    req.username = verifiedUser.username;
    next();
  } else {
    res.json({ msg: "there is up with the authentication" }).status(404);
  }
}

module.exports = UserMiddleware;
