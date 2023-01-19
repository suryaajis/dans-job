const express = require("express");
const router = express.Router();
const errorHandler = require("../middlewares/errorHandler");
const { authN } = require("../middlewares/auth");
const { fecthListJob, fetchDetailJob } = require("../middlewares/dansjob");
const UserController = require("../controllers/authController");
const JobController = require("../controllers/jobController");

router.post("/login", UserController.login);
router.post("/register", UserController.register);

router.use(authN);

router.get("/jobs", fecthListJob, JobController.readJobs);
router.get("/jobs/:id", fetchDetailJob, JobController.readDetailJob)

router.use(errorHandler);

module.exports = router;
