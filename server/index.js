const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const Database = require("./database");
const uuid = require("uuid/v4");

express()
  .use(cors())
  .all("/", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  })

  .use(express.static(path.join(__dirname, "public")))
  .use(express.json())
  .use(require("./routes"))
  .get("/", (req, res) => {
    res.status(200).json({ hello: "my name is Joe" });
  })
  .post("/api/creategoal", (req, res) => {
    // make sure there is valid data
    if (typeof req.body.goal_title === "undefined") {
      res.status(400).json({ error: "goal_title is required" });
    }

    if (typeof req.body.goal_description === "undefined") {
      res.status(400).json({ error: "goal_description is required" });
    }
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
