const express = require("express");
const router = express.Router();

//Validation 
const userValidation = require("../middleware/validation/Signup");

//controller
const SignupController = require("../controller/SignupController");

router.post("/", userValidation , SignupController );

module.exports = router;





//--------------------------------------------------------------------------------------------//

//Using Normal Way Without Controller 



// const StudentModel = require("../models/Signup");
// const bcrypt = require("bcrypt");
// const { body, validationResult } = require("express-validator");  //for validation

// router.post("/", userValidation , async (req, res) => {
//   const { name, email, password } = req.body;

//   //Express Validation
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.json(errors);
//   }

//   //check user already exits or not
//   const user = await StudentModel.findOne({ email });
//   if (user) {
//     return res.json({ message: "User Already exists" });
//   }

//   //create NewUser
//   const salt = await bcrypt.genSalt(10);
//   const hasspassword = await bcrypt.hash(password, salt);

//   const newUser = await StudentModel.create({
//     name: name,
//     email: email,
//     password: hasspassword,
//   });

//   return res.json({ message: "Account Created...", newUser });
// });