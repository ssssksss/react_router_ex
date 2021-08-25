import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Home from './inc/home.js'
import Home1 from './inc/Home1.js'
import LinkList from './inc/LinkList.js'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LinkList> </LinkList>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/home1" component={Home1}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
