var express = require("express");
var cors = require("cors");
var router = express.Router();
users = require("./routes/users");
goals = require("./routes/goals");

router
  .use(users)
  .use(goals)
  .use(cors());
module.exports = router;
