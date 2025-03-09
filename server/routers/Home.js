const express = require("express");
const router = express.Router();

//for Image Upload (Use Middleware)
const upload = require("../middleware/multer/multer");

//authentication middleware
const {verifyAccessToken} = require("../middleware/auth");
const checkOrigin = require("../middleware/checkOrigin");   //optional if we use it in globally in index.js

//for validation
const HomeValidator = require("../middleware/validation/Home");

//Home Controller
const HomeController = require("../controller/HomeController");


router.get("/", verifyAccessToken ,(req, res) => {
  return res.json("Success...");
});

router.post("/" ,
  verifyAccessToken   ,
  upload.single("image"),
  HomeValidator,
  HomeController
);

router.post("/demo",verifyAccessToken,checkOrigin,async(req,res)=>{
  res.json({message:"Home Demo Page"})
})

module.exports = router;

