const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { verifyRefreshToken } = require("../middleware/auth");

dotenv.config();

//secret key
const JWT_SECRET = process.env.JWT_SECRET_KEY;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET_KEY;

//JWT EXPIRED 
const JWT_ACCESSTOKEN_EXPIRED = process.env.JWT_ACCESSTOKEN_EXPIEDTIME
const JWT_REFRESHTOKEN_EXPIRED = process.env.JWT_REFRESHTOKEN_EXPIEDTIME


router.post("/", (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const decoded = verifyRefreshToken(refreshToken);

  if (!decoded) {
    return res.status(401).json({ error: "Invalid refresh token" });
  }



  //new jwt access token
  const newAccessToken = jwt.sign({ id: decoded.id }, JWT_SECRET, {
    expiresIn: JWT_ACCESSTOKEN_EXPIRED,
  });

  //new jwt refresh token
  const newRefreshToken = jwt.sign({ id: decoded.id }, JWT_REFRESH_SECRET, {
    expiresIn: JWT_REFRESHTOKEN_EXPIRED,
  });

  res.json({ accessToken: newAccessToken, refreshToken: newRefreshToken });
});

module.exports = router;






// const newAccessToken = jwt.sign({ id: decoded.id}, JWT_SECRET, { expiresIn: '10s' });
// res.json({ accessToken: newAccessToken });
