const express = require("express");
const router = express.Router();

//controller
const ForgotPasswordController =  require("../controller/ForgotPasswordController")

//Router
router.post("/" , ForgotPasswordController);

module.exports = router;
