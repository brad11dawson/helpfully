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
router
  .get("/api/creategoal", (req, res) => {
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

        const goal_id = uuid();
        console.log("uuid: " + goal_id);
        firebase
          .getDb()
          .collection("goals")
          .doc(goal_id)
          .set({
            id: goal_id,
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
  })
  /*
POST https://helpify.herokuapp.com/api/pledgegoal
An endpoint to hit when you want to pledge money to a goal
Post body
{
  "id": string (uuid of goal)
  "pledger": string (email of the person pledging money)
  "amount": integer (in cents)
}
*/
  .post("/api/pledgegoal", (req, res) => {
    // Required
    if (typeof req.body.id === "undefined") {
      return res.status(400).json({ error: "id is required" });
    }

    if (typeof req.body.pledger === "undefined") {
      return res.status(400).json({ error: "pledger is required" });
    }

    if (typeof req.body.amount === "undefined") {
      return res.status(400).json({ error: "amount is required" });
    }

    // Update the goal pledge
    firebase
      .getDb()
      .collection("goals")
      .doc(req.body.id)
      .update({
        pledges: firebase.getAdmin().FieldValue.arrayUnion({
          amount: req.body.amount,
          user: req.body.pledger
        })
      })
      .then(data => {
        // Update the pledgers account
        firebase
          .getDb()
          .collection("users")
          .doc(req.body.pledger)
          .update({
            pledges: firebase.getAdmin().FieldValue.arrayUnion(req.body.id)
          })
          .then(data => {
            return res.status(200).json(data);
          })
          .catch(err => {
            return res.status(400).json({
              error:
                "Something went wrong with updating the users " +
                req.body.pledger +
                " pledges with goal: " +
                req.body.id
            });
          });
      })
      .catch(err => {
        return res.status(400).json({ error: "something went wrong: " + err });
      });
  });

module.exports = router;
