const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

mongoose.connect(
  "mongodb+srv://yashkelhe30:d5ruqBR52dTivdAJ@cluster0.imgivmj.mongodb.net/gateWay"
);

const user = mongoose.Schema({
  username: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
});

const accountSchema = mongoose.Schema({
  //  only if the certain id exists that user can changes the balance
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});
user.methods.createHash = async function (plainTextPassword) {
  // Hashing user's salt and password with 10 iterations,
  const saltRounds = 10;

  // First method to generate a salt and then create hash
  const salt = await bcrypt.genSalt(saltRounds);
  return await bcrypt.hash(plainTextPassword, salt);

  // Second mehtod - Or we can create salt and hash in a single method also
  // return await bcrypt.hash(plainTextPassword, saltRounds);
};
// Validating the candidate password with stored hash and hash function
user.methods.validatePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model("user", user);
const Account = mongoose.model("Account", accountSchema);
module.exports = { User, Account };
