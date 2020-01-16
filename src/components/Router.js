import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Header from './Header';
import Movie from 'routes/Movie';
import TV from 'routes/TV';
import Search from 'routes/Search';

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route path='/' exact component={Movie} />
      <Route path='/tv' component={TV} />
      <Route path='/search' component={Search} />
      <Redirect from='*' to='/' />
    </Switch>
  </Router>
);
