const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models");

const authN = async (req, res, next) => {
  try {
    const { access_token } = req.headers;

    const payload = verifyToken(access_token);
    
    const foundUser = await User.findOne({
      where: {
        username: payload.username,
      },
    });

    if (!foundUser) {
      throw { name: "InvalidToken" };
    }

    req.user = {
      id: foundUser.id,
      usernmame: foundUser.usernmame,
    };

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = { authN };
