import React from 'react';
import logo from './logo.svg';
import Header from './components/Header.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
