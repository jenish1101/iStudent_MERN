const express = require("express");
const router = express.Router();


router.post("/",(req,res)=>{
    
    return res.json({status : true , message : "Logout Successfully..."})

})

module.exports = router;