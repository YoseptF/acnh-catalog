import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from './HomePage';
import Categories from './Categories';
import Item from './Item';
import Loader from './Loader';
import { selectLoading } from '../slices/current/currentSlice';


const Routes = () => {
  const loading = useSelector(selectLoading);


  return (
    <Router>
      <Loader hidden={loading} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route extact path="/:category/:item" component={Item} />
        <Route extact path="/:category" component={Categories} />
      </Switch>
    </Router>
  );
};

export default Routes;
