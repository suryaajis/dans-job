require("dotenv").config()
const express = require("express");
const cors = require("cors");
const router = require("./routes");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

app.listen(port, (_) => {
  console.log("App server listening on port: " + port);
});
