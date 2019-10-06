import React from "react";
import Header from "./components/Header.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SponsoredList from "./components/SponsoredList.js";
import NewPeopleList from "./components/NewPeopleList.js";
import LoginPage from "./components/LoginPage.js";
import YourGoalList from "./components/YourGoalList";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./google-config";
import undefined from "firebase/auth";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();

const providers = {
  passwordProvider: new firebase.auth.EmailAuthProvider()
};
class App extends React.Component {
  constructor(props) {
    super(props);
    if (typeof props.user === "undefined") {
      console.log("There is no user");
    } else {
      console.log("theres a user");
    }
    this.state = {
      isLoggedIn: false,
      user: props.user
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.user !== "undefined") {
      this.setState({ isLoggedIn: true });
    } else {
      this.setState({ isLoggedIn: false });
    }
  }

  render() {
    if (this.state.isLoggedIn) {
      const listContainer = {
        paddingTop: 20
      };
      return (
        <div className="App">
          <Header />
          <div style={listContainer}>
            <SponsoredList />
          </div>
          <div style={listContainer}>
            <NewPeopleList />
          </div>
          <div style={listContainer}>
            <YourGoalList />
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <LoginPage signIn={this.props.signInWithEmailAndPassword} />
        </div>
      );
    }
  }
}

export default withFirebaseAuth({ providers, firebaseAppAuth })(App);
