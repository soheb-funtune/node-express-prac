const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModels");

// REGISTER USER
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All Fields are Mandatory for Registration !");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User is Already Register with this Email !");
  }
  const hashedPass = await bcrypt.hash(password, 10);
  const registeredUser = await User.create({
    username,
    email,
    password: hashedPass,
  });
  if (registeredUser) {
    res
      .status(201)
      .json({ _id: registeredUser?.id, email: registeredUser?.email });
  } else {
    res.status(400);
    throw new Error("User data is not Valid");
  }

  res.status(200).json(registeredUser);
});

// LOGIN USER
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All Fiels are Mendatory");
  }
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: { username: user.username, email: user.email, id: user.id },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "20h" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("Email or Password is not Found");
  }
});

//@CURRENT USER info
//@ROUTE api/users/current
//@ACCESSS private
const currentUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "current the user" });
});

module.exports = { registerUser, loginUser, currentUser };
