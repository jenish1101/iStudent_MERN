const StudentModel = require("../models/Signup");
const bcrypt = require("bcrypt");

//for validation
const { validationResult } = require("express-validator");

const SignupController = async (req, res) => {
  const { name, email, password } = req.body;

  //Express Validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // console.log(errors);
    return res.json(errors);
  }



  //check user already exits or not
  const user = await StudentModel.findOne({ email });
  if (user) {
    return res.json({ message: "User Already exists" });
  }

  //create NewUser
  const salt = await bcrypt.genSalt(10);
  const hasspassword = await bcrypt.hash(password, salt);

  const newUser = await StudentModel.create({
    name: name,
    email: email,
    password: hasspassword,
  });

  return res.json({ message: "Account Created...", newUser });
};

module.exports = SignupController;
