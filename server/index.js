const express = require("express");
const app = express();

const cors = require("cors")
// const cookieParser = require("cookie-parser");

//
const dotenv = require('dotenv');
// Load environment variables from .env file
dotenv.config();
const port = process.env.PORT || 3000;
//

// Middleware
// const checkOrigin = require("./middleware/checkOrigin");


//routers
const Signup = require("./routers/Signup");
const Login = require("./routers/Login");
const Home = require("./routers/Home");
const Logout = require("./routers/Logout")
const Token = require("./routers/refreshtoken");

const ForgotPassword = require("./routers/ForgotPassword");
const ResetPassword = require("./routers/ResetPassword");

const StudentHome = require("./routers/StudentHome");

//InBuild middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin : ["http://localhost:5173"],
    methods : ["GET","POST"],
    credentials : true
}))
app.use("/Images", express.static("public/Images"));


// app.use(cookieParser())

// app.use(checkOrigin); // Apply checkOrigin middleware globally


//
app.use("/register",Signup)
app.use("/login",Login)
app.use("/home",Home)
app.use("/logout",Logout)
app.use("/token", Token);


app.use("/forgot-password",ForgotPassword);
app.use("/reset-password",ResetPassword);

app.use("/student-home",StudentHome);


app.listen(port)

