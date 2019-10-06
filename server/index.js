const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const Database = require("./database");
const uuid = require("uuid/v4");

express()
  .use(express.static(path.join(__dirname, "public")))
  .use(express.json())
  .use(require("./routes"))
  .get("/", (req, res) => {
    let docRef = Database.getDb()
      .collection("users")
      .get()
      .then(snapshot => {
        console.log(snapshot.forEach());
        res.send("hello");
      })
      .catch(err => {
        res.send("An error occured: " + JSON.stringify(err));
      });
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
