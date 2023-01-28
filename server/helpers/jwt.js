const jwt = require("jsonwebtoken");

const secretJwt = "secretjwt";

const signToken = (payload) => {
  return jwt.sign(payload, secretJwt);
};

const verifyToken = (token) => {
  return jwt.verify(token, secretJwt);
};

module.exports = { signToken, verifyToken };
