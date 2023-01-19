const axios = require("axios");

const dansjob = axios.create({
  baseURL: "http://dev3.dansmultipro.co.id/api/recruitment",
});

const fecthListJob = async (req, res, next) => {
  try {
    const { description, location, full_time, page } = req.query;

    let options = {
      url: "/positions.json",
      method: "GET",
      params: {},
    };

    if (description) {
      options.params.description = description.toLowerCase();
    }

    if (location) {
      options.params.location = location.toLowerCase();
    }

    if (page) {
      options.params.page = page;
    }

    const response = await dansjob(options);

    if (!response.data) {
      throw { name: "NotFound" };
    }

    if (full_time === "true") {
      response.data = response.data.filter((el) => el.type === "Full Time");
    }

    if (page) {
      response.data = response.data.filter((el) => el !== null);
    }

    req.dansJobs = response.data;

    next();
  } catch (err) {
    next(err);
  }
};

const fetchDetailJob = async (req, res, next) => {
  try {
    const id = req.params.id;

    const response = await dansjob({
      url: `positions/${id}`,
      method: "GET",
    });

    if (!response.data) {
      throw { name: "NotFound" };
    }

    req.dansJobDetail = response.data;

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = { fecthListJob, fetchDetailJob };
