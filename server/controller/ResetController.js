//for find student
const StudentModel = require("../models/Signup");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config();

//JWT Secret Key
const JWT_SECRET = process.env.JWT_SECRET_KEY;


const ResetController = async(req,res)=>{
    const token = req.params.token;
    const { password } = req.body;
  
  
    //for password validation
    if (password.length < 5) {
      return res.json({ message: "Password Length Should Be More Than 5..." });
    }
  
    try {
      const decoded = await jwt.verify(token, JWT_SECRET);
      const id = decoded.id;
  
      const hashPassword = await bcrypt.hash(password, 10);
  
      await StudentModel.findByIdAndUpdate(
        { _id: id },
        { password: hashPassword }
      );
  
      return res.json({ status: true, message: "updated password" });
    } catch (error) {
      // console.log("Reset catch error" + error);
      return res.json("Invalid Token");
    }
}

module.exports = ResetController;