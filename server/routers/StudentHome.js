const express = require("express");
const router = express.Router();

const { verifyAccessToken } = require("../middleware/auth.js");

const HomeModal = require("../models/Home");



// =======================================
// ✅ 1. Fetch Student Data by Email from JWT Token
// =======================================
router.get("/", verifyAccessToken, async (req, res) => {
  try {
    // Get user's email from JWT token (Here For get user Email from JWT token We Have Require To User verifiAccessToken Miidleware Becaue, this Middleware Store That Data)
    const UserEmail = req.user.email;
    // console.log("userId:", UserEmail);

    const UserData = await HomeModal.find({ email: UserEmail });
    // console.log("Student Data:", UserData);
    return res.json({ message: "StudentData Fetch Successfully...", UserData });
  } catch (error) {
    return res.json({ message: "Student Data Fetch Error", error });
  }
});



// =======================================
// ✅ 2. Fetch Payment Details Based on Email (Protected Route)
// =======================================
// for Payment 
router.get("/payment", verifyAccessToken, async (req, res) => {
  const email = req.user.email;
  // console.log(email);

  const UserData= await HomeModal.find({email});
  
  return res.json({ message: "StudentData Fetch Successfully...", UserData });
});





// =======================================
// ✅ 3. Fetch Student Data by ID (Dynamic Route)
// =======================================
router.get("/profile/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // console.log("Profile ID: " + id);
    
    // ✅ Find student data by ID
    const student = await HomeModal.findById(id);
    // console.log("Student: " + student)
    

    if (!student) {
      return res.status(404).json({ message: "Student Not Found" });
    }

    return res.json({message: "Student Data Fetch Successfully..." , student});

  } catch (error) {
    console.error("Student Data Fetch Error:", error);
    return res.status(500).json({ message: "Internal Server Error", error });
  }
});



module.exports = router;
