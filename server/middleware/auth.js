const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config();


//JWT SECRET KEY
const JWT_SECRET = process.env.JWT_SECRET_KEY;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET_KEY;


//For Verify AccessToken (If User Have A Access Token Than It's Comform he is Valid User)
const verifyAccessToken = async (req, res, next) => {
  try {

    const token = req.headers["authorization"]?.split(" ")[1]; // Bearer token
    console.log("AUTH MIDDLEWARE: ", token);

    if (!token) {
      console.log("AUTH: Token Not Avaliable");
      // return res.json("The token was not avaliable");
      return res.status(401).json({ error: "Unauthorized" });
    } 
    else 
    {
      jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err){
          return res.status(401).json({ error: "Token is invalid or expired" });
        }

        req.user = decoded;
        next();

      });
    }

  } 
  catch (error) {
    // console.log("Auth Error...");
    res.status(401).json({ error: "unauthorized cath" });
  }
};



//For Verify RefreshToken
const verifyRefreshToken = (token) => {
  try {
      return jwt.verify(token, JWT_REFRESH_SECRET);
  } catch (err) {
      return null;
  }
};



module.exports = { verifyAccessToken, verifyRefreshToken};
