const bcrypt = require("bcrypt")

const hashPassword = (pass) => {
  return bcrypt.hashSync(pass, 10)
}

const comparePassword = (hash, pass) => {
  return bcrypt.compareSync(pass, hash)
}

module.exports = { hashPassword, comparePassword }