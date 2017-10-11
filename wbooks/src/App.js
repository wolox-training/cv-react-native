import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import BooksDashboard from './app/screens/BooksDashboard';
import BookDetail from './app/screens/BookDetail/BookDetail.js';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={BooksDashboard}/>
        <Route exact path='/book/:id' component={BookDetail}/>
      </Switch>
    );
  }
}

export default App;
