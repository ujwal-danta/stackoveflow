import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router, Switch, Route, Redirect
} from 'react-router-dom'
import StackOverflow from './components/StackOverflow'
import Question from './components/Add-Question/Question';


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Switch>
       <Route exact path = '/add-question' component ={Question} />
       <Route exact path = '/' component ={StackOverflow} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
