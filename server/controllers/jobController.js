class JobController {
  static async readJobs(req, res, next) {
    try {
      const response = req.dansJobs;
  
      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }

  static async readDetailJob(req, res, next) {
    try {
      const response = req.dansJobDetail;
  
      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = JobController