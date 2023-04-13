const jwt = require("jsonwebtoken");
require("dotenv").config();

const SECRET = process.env.SECRET;

function generateAccessToken(email, id) {
  return jwt.sign({ email, id }, SECRET, { expiresIn: "36000s" });
}

module.exports = {
  generateAccessToken,
};