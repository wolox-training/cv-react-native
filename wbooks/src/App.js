import React from 'react';
import './App.css';
import BooksDashboard from './app/screens/BooksDashboard.js';
import BookDetail from './app/screens/BookDetail/BookDetail.js'
import Login from './app/screens/Login/'
import {BrowserRouter} from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import AuthRoute from './app/components/authRoute/AuthRoute.js'

class App extends React.Component {

  render() {
    return (
      <Switch>
        <AuthRoute exact path="/" component={BooksDashboard} isPrivate />
        <AuthRoute path="/login" component={Login} isPublic />
        <AuthRoute path="/book/:id" component={BookDetail} isPrivate />
      </Switch>

    );
  }
}

export default App;
