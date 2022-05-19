const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

//@Desc:  Register User
//@route: POST /api/users
//@access: Public
const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    res.status(400);
    throw new Error("Fill in all the fields!");
  }

  //Check if user exists
  const oldUser = await User.findOne({ email });

  if (oldUser) {
    res.status(400);
    throw new Error("User already exists");
  }

  //Secure password
  const hashPassword = await bcrypt.hash(password, 10);

  //Create user in database

  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      email: user.email,
      name: `${user.firstName} ${user.lastName}`,
    });
  } else {
    res.status(400);
    throw new Error("Unable to create new User");
  }
});

//@Desc:  Authenticate  user
//@route: POST /api/users/login
//@access: Public
const loginUser = asyncHandler(async (req, res) => {});

//@Desc:  Get User Data
//@route: GET /api/users/me
//@access: Private
const getMe = asyncHandler(async (req, res) => {
  res.json("run");
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
