import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import People from './components/People';

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Switch>     
      <Route path='/people'>
          <People />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
