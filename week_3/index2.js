const express = require("express");
const jwt = require("jsonwebtoken");
const zod = require("zod");
const app = express();
const jwtPassword = "123";
app.use(express.json());

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

// there are three first sign  , verify and decode in the JWT
const signJWT = (username, password) => {
  const responseUser = emailSchema.safeParse(username);
  const responsePass = passwordSchema.safeParse(password);

  if (!responseUser.success || !responsePass.success) return null;

  const token = jwt.sign(
    {
      username,
    },
    jwtPassword
  );
  return token;
};

const result2 = signJWT("yashkelhe30@gmail.com", "dhdh66");
console.log(result2);

const verify = (token) => {
  try {
    const verrifyToken = jwt.verify(token, jwtPassword);
    if (verrifyToken) {
      return verrifyToken;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};

const veri = verify(result2, "dhdh66");
console.log("yes its correct user ", veri);

const decodedToken = (token) => {
  // it will pass me what usename
  const decode = jwt.decode(token);
  if (decode) {
    return decode;
  } else {
    return false;
  }
};

console.log(decodedToken(result2));

app.listen(3002, () => {
  console.log("Connection is established on port 3002");
});
