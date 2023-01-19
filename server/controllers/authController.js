const { User } = require("../models");
const { comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");

class UserController {
  static async register(req, res, next) {
    try {
      const payload = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      }

      const response = await User.create(payload)

      res.status(201).json(response)
    } catch (err) {
      next(err)
    }
  }

  static async login(req, res, next) {
    try {
      const foundUser = User.findOne({
        where: { username: req.body.username },
      });

      if (!comparePassword(foundUser.password, req.body.password)) {
        throw { name: "InvalidInput" };
      }

      const payload = { username: req.body.username, email: req.body.email };

      const access_token = signToken(payload);

      res.status(200).json({ access_token });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
