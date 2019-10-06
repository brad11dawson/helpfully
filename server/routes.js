var express = require("express");
var router = express.Router();
users = require("./routes/users");
goals = require("./routes/goals");

router.use(users).use(goals);
module.exports = router;
