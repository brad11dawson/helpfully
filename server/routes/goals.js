const express = require("express");
const router = express.Router();
const firebase = require("../database");
const uuid = require("uuid/v4");

/*
{
  "goal_title": string,
	"goal_description": string,
	"created_by": string (email)
}
*/
router.get("/api/creategoal", (req, res) => {
  // required
  if (typeof req.body.goal_title === "undefined") {
    res.status(400).json({ error: "goal_title cannot be empty" });
  }

  if (typeof req.body.goal_description === "undefined") {
    res.status(400).json({ error: "goal_description cannot be empty" });
  }

  if (typeof req.body.created_by === "undefined") {
    res.status(400).json({ error: "created_by cannot be empty" });
  }

  // Get current user data
  firebase
    .getDb()
    .collection("users")
    .doc(req.body.created_by)
    .get()
    .then(data => {
      console.log("got user: " + data.data());
      let user = data.data();
      // get rid of the pledges
      delete user.pledges;

      firebase
        .getDb()
        .collection("goals")
        .add({
          goal_title: req.body.goal_title,
          goal_description: req.body.goal_description,
          created_by: user,
          completed: false,
          created_on: Date.now(),
          pledges: []
        })
        .then(data => {
          return res.status(200).json(data);
        })
        .catch(err => {
          return res
            .status(400)
            .json({ error: "There was an error creating a goal: " + err });
        });
    });
});

module.exports = router;
