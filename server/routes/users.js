const express = require("express");
const router = express.Router();
const firebase = require("../database");
const uuid = require("uuid/v4");

const createUser = (req, res) => {
  // Make sure the name property is valid
  console.log(req.body.name);
  if (typeof req.body.name === "undefined") {
    return res.status(400).send({ error: "name is required" });
  }

  // If the description doesn't exist, make it empty
  if (typeof req.body.description === "undefined") {
    req.body.description = "";
  }
  console.log(req.body.email);
  firebase
    .getDb()
    .collection("users")
    .doc(req.body.email)
    .set({
      name: req.body.name,
      id: req.body.email,
      description: req.body.bio,
      pledges: []
    })
    .then(data => {
      Console.log("yo good");
      // res.status(200).send({ user_id: data._path.segments[1] });
      return;
    })
    .catch(err => {
      console.log("ERROR");
      // res.status(400).send({ error: "something happened: " + err });
    });
};

/*
Test api endpoint
GET helpfully.herokuapp.com/users/hello
*/
router
  .get("/users/hello", (req, res) => {
    console.log("it worked");

    res.status(200).json({ hello: "it worked" });
  })
  .post("/api/createuser", createUser)

  /*
  POST https://helpfully.herokuapp.com/api/getpledges
  Gets all the pledges that a user has pledged money for
  {
    user_id: string (email)
  }

  Responses:
  [
    {    
      "name": "Joseph Ridgley",
      "goal_title": "Run a Marathon",
      "goal_description": "I want to run a butt load of miles",
      "pledged_amount": 12345,
      "completed": false
    }, {...}
  ] 
  */
  .post("/api/getpledges", async (req, res) => {
    // required
    if (typeof req.body.user_id === "undefined") {
      return res.status(400).json({ error: "user_id is required" });
    }
    // console.log("userid: " + req.body.user_id);
    await firebase
      .getDb()
      .collection("users")
      .doc(req.body.user_id)
      .get()
      .then(async doc => {
        let json = [];
        // console.log("starting");

        // Hold all the promises
        dbPromises = [];
        doc.data().pledges.map(goalRef => {
          dbPromises.push(
            firebase
              .getDb()
              .collection("goals")
              .doc(goalRef)
              .get()
              .then(dataa => {
                json.push(dataa.data());
              })
              .catch(() => {
                res.status(400).json({
                  error:
                    "Something when wrong with grabbing the goals for the current user"
                });
              })
          );
        });

        Promise.all(dbPromises).then(() => {
          var newJson = [];
          //   console.log("Starting map");

          json.map(elem => {
            let pledgedAmount = elem.pledges.find(
              x => x.user == req.body.user_id
            );

            // console.log("push");
            newJson.push({
              name: elem.created_by.name,
              goal_title: elem.goal_title,
              goal_description: elem.goal_description,
              pledged_amount: pledgedAmount.amount,
              completed: elem.completed,
              id: elem.id
            });
          });
          //   console.log("ending map");
          res.status(200).json(newJson);
        });
      })
      .catch(err => {
        res.status(400).json({
          error:
            "Something went wrong with accessing the user information for the current user"
        });
      });
  })

  /*
  POST https://helpfully.herokuapp.com/api/createaccount
  {
    email: string,
    password: string,
    name: string,
    bio: string
  }
  */
  .post("/api/createaccount", (req, res) => {
    // required
    if (typeof req.body.email === "undefined" || req.body.email == "") {
      return res.status(400).json({ error: "email cannot be blank" });
    }

    console.log(req.body.password);
    if (typeof req.body.password === "undefined" || req.body.password == "") {
      return res.status(400).json({ error: "password cannot be blank" });
    }

    // Create a flipping user
    firebase
      .getAuth()
      .createUser({
        email: req.body.email,
        emailVerified: false,
        password: req.body.password,
        disabled: false
      })
      .then(data => {
        createUser(req, res);
        return res.status(200).json(data);
      })
      .catch(err => {
        return res.status(400).json(err);
      });
  })
  /*
  GET 
  {
    "email": string
    "password": string
  }
  */
  .get("/api/login", (req, res) => {
    // required
    if (typeof req.body.email === "undefined") {
      return res.status(400).json({ error: "email is required" });
    }

    if (typeof req.body.password === "undefined") {
      return res.status(400).json({ error: "password is requeered" });
    }

    firebase
      .getSignIn()
      .signInWithEmailAndPassword(req.body.email, req.body.password)
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

module.exports = router;
