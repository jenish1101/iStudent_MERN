//for find student
const StudentModel = require("../models/Signup");

const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

//JWT Secret Key
const JWT_SECRET = process.env.JWT_SECRET_KEY;

//Email Username and Password
const EMAIL = process.env.FORGOTPASSWORD_EMAIL_USERNAME
const PASSWORD = process.env.FORGOTPASSWORD_EMAIL_PASSWORD

//for email
var nodemailer = require("nodemailer");

const ForgotPasswordController = async (req, res) => {

  const { email } = req.body;

  try {
    const user = await StudentModel.findOne({ email: email });
    // console.log(user);

    if (!user) {
      return res.json({ message: "User not Registered..." });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });
    // console.log("Forgot: " , token);

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
  
        user: EMAIL,
        pass: PASSWORD,
      },
    });

    var mailOptions = {
      from: EMAIL,
      to: email,
      subject: "Reset Password",
      text: `http://localhost:5173/resetPassword/${token}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        // console.log("email not send:" + error);
        return res.json({ message: "Email Not sent" });
      } else {
        // console.log('Email sent: ' + info.response);
        return res.json({ status: true, message: "Email sent" });
      }
    });
  } 
  catch (error) {
    console.log("Password reset error..." + error);
    return res.json({ error });
  }
  
};

module.exports = ForgotPasswordController;
