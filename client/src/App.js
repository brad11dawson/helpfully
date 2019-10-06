import React from "react";
import Header from "./components/Header.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SponsoredList from "./components/SponsoredList.js";
import NewPeopleList from "./components/NewPeopleList.js";
import LoginPage from "./components/LoginPage.js";
import YourGoalList from "./components/YourGoalList"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true
    };
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <div className="App">
          <Header />
          <SponsoredList />
          <NewPeopleList />
          <YourGoalList />
        </div>
      );
    } else {
      return (
        <div className="App">
          <LoginPage />
        </div>
      );
    }
  }
}

export default App;
