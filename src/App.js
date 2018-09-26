import React, { Component } from 'react';
import Startscreen from './views/Startscreen.js';
import QuizView from './views/QuizView.js';
import './App.css';
import { BrowserRouter as Router, Route , Switch} from "react-router-dom";


function NoMatch(){
  return (<p>404 no match</p>);
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Startscreen} />
            <Route exact path="/quiz/:id" component={QuizView} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
