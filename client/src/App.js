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
          <LoginPage />
        </div>
      );
    }
  }
}

export default App;
