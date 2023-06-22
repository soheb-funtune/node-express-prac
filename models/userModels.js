const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter a valide Username"],
    },
    email: {
      type: String,
      required: [true, "Please enter a valide Email"],
      unique: [true, "Email aleady taken"],
    },
    password: {
      type: String,
      required: [true, "Please enter a valide Password"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
