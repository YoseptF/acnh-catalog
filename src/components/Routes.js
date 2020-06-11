import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Categories from './Categories';
import Item from './Item';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route extact path="/:category/:item" component={Item} />
      <Route extact path="/:category" component={Categories} />
    </Switch>
  </Router>
);

export default Routes;
