const express = require("express");
const router = express.Router();

//LoginController
const LoginController = require("../controller/LoginController")

router.post("/", LoginController)

module.exports = router;






//------------------------------------//

//Using Normal Way Without Controller 

// const LoginController = require("../controller/LoginController")
// const StudentModel = require("../models/Signup");

// const bcryt = require("bcrypt"); //For hash Password

// const jwt = require("jsonwebtoken"); //For Authentication
// const dotenv = require("dotenv");
// dotenv.config();

// //JWT SECRET KEY
// const JWT_SECRET = process.env.JWT_SECRET_KEY;
// const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET_KEY;

// //JWT EXPIRED 
// const JWT_ACCESSTOKEN_EXPIRED = process.env.JWT_ACCESSTOKEN_EXPIEDTIME
// const JWT_REFRESHTOKEN_EXPIRED = process.env.JWT_REFRESHTOKEN_EXPIEDTIME


// router.post("/" , async (req, res) => 
//   {
//       // console.log("JWT SECRET: " , JWT_SECRET);
//       // console.log("JWT_REFRESH: " , JWT_REFRESH_SECRET );
//     const { name, password } = req.body;
  
//     const user = await StudentModel.findOne({ name });
//     //   console.log("User: " , user);
  
//     if (!user) {
//       return res.json({ message: "User is not registered..." });
//     }
  
//     //compare password
//     const validpassword = await bcryt.compare(password, user.password);

//      if (!validpassword) {
//       return res.json({ message: "Password is incorrect" });
//     }
  

//     // return res.send({message:"Success"})
//     const accessToken = jwt.sign({ id: user._id}, JWT_SECRET, { expiresIn: JWT_ACCESSTOKEN_EXPIRED });
//     const refreshToken = jwt.sign({ id: user._id}, JWT_REFRESH_SECRET, { expiresIn: JWT_REFRESHTOKEN_EXPIRED });

//     res.json({ message: "Success", accessToken, refreshToken });
//   }
//   );
