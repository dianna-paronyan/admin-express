const jwt = require("jsonwebtoken");
require("dotenv").config();

const SECRET = process.env.SECRET;

function authenticateToken(req, res, next) {
  const token = req.headers.authorization;

  if (token === null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }else if (user.role === 1) {
      next();
    }else{
      return res.sendStatus(401);
    }
  });
}

module.exports = {authenticateToken}