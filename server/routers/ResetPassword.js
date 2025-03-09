const express = require("express");
const router = express.Router();

//Controller
const ResetController = require("../controller/ResetController");

//router
router.post("/:token" , ResetController);

// router.get("/",async(req,res)=>{
//     res.json({message:"Reset..."})
// })

module.exports = router;
