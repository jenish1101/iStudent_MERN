const express = require("express");
const router = express.Router();

// const LoginController = require("../controller/LoginController")
const StudentModel = require("../models/Signup");

const bcryt = require("bcrypt"); //For hash Password

const jwt = require("jsonwebtoken"); //For Authentication
const dotenv = require("dotenv");
dotenv.config();

//JWT SECRET KEY
const JWT_SECRET = process.env.JWT_SECRET_KEY;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET_KEY;

//JWT EXPIRED
const JWT_ACCESSTOKEN_EXPIRED = process.env.JWT_ACCESSTOKEN_EXPIEDTIME;
const JWT_REFRESHTOKEN_EXPIRED = process.env.JWT_REFRESHTOKEN_EXPIEDTIME;

const LoginController = async (req, res) => {
  // console.log("JWT SECRET: ", JWT_SECRET);
  // console.log("JWT_REFRESH: ", JWT_REFRESH_SECRET);
  const { password,email } = req.body;
  // console.log(password, email);
  

  const user = await StudentModel.findOne({ email });
  // console.log("USER:", user);

  if (!user) {
    return res.json({ message: "User is not registered..." });
  }

  //compare password
  const validpassword = await bcryt.compare(password, user.password);

  if (!validpassword) {
    return res.json({ message: "Password is incorrect" });
  }

  const accessToken = jwt.sign({ id: user._id , email: user.email}, JWT_SECRET, {
    expiresIn: "1d",
  });

  const refreshToken = jwt.sign({ id: user._id , email: user.email }, JWT_REFRESH_SECRET, {
    expiresIn: JWT_REFRESHTOKEN_EXPIRED,
  });

  res.json({ message: "Success", accessToken, refreshToken });
};

module.exports = LoginController;
