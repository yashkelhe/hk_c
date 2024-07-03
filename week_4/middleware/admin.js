const { Admin } = require("../db");

const AdminMiddleware = (req, res, next) => {
  // this header is for the authentication if u dont give this then it will give an error
  const username = req.headers["username"];
  const password = req.headers["password"];
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }
  Admin.findOne({
    username: username,
    password: password,
  })
    .then((result) => {
      if (result) {
        next();
      } else {
        // If admin is not found, send a 401 Unauthorized response
        res.status(401).json({ message: "Invalid credentials" });
      }
    })
    .catch((err) => {
      console.error("Error in middleware: " + err);
      res.status(500).json({ message: "Internal server error" });
    });
};

module.exports = AdminMiddleware;
