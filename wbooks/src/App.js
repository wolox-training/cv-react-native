import React from 'react';
import './App.css';
import BooksDashboard from './app/screens/BooksDashboard.js';
import Login from './app/components/Login/Login.js'
import {BrowserRouter} from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Switch>
      <Route exact path='/' component={Login}/>
    </Switch>
    );
  }
}

export default App;
