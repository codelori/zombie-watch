import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

//import components
import Header from './components/Header'
import NewsFeed from './components/NewsFeed'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' render={()=> <NewsFeed/>} />
        <Route exact path='/user/dashboard' render={()=> <Dashboard />} />
      </Switch>
    </div>
  );
}

export default App;
