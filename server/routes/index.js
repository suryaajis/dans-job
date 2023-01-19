const express = require("express");
const router = express.Router();
const errorHandler = require("../middlewares/errorHandler");
const UserController = require("../controllers/authController");

router.post("/login", UserController.login);
router.post("/register", UserController.register);


router.use(errorHandler);

module.exports = router;
