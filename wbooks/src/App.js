import React from 'react';
import './App.css';
import BooksDashboard from './app/screens/BooksDashboard.js';
import BookDetail from './app/screens/BookDetail/BookDetail.js'
import Login from './app/screens/Login/Login.js'
import {BrowserRouter} from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import AuthRoute from './app/components/authRoute/AuthRoute.js'

class App extends React.Component {

  render() {

  const accessToken = localStorage.getItem('access_token')
  console.log(accessToken);
    return (
      <Switch>
        <AuthRoute exact path="/" component={BooksDashboard} isPrivate accessToken={accessToken} />
        <AuthRoute path="/login" component={Login} isPublic accessToken={accessToken} />
        <AuthRoute path="/book/:id" component={BookDetail} isPrivate accessToken={accessToken} />
      </Switch>

    );
  }
}

export default App;
