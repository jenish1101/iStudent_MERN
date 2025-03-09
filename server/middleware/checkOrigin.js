// middleware/checkOrigin.js
const allowedOrigins = ["http://localhost:5173"]; // Add your domain here

const checkOrigin = (req, res, next) => {
  const origin = req.headers.origin;
  console.log(origin);
  if (allowedOrigins.includes(origin)) {
    next();
  } else {
    res.status(403).json({ message: "Forbidden: Invalid origin" });
  }
};

module.exports = checkOrigin;
