import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Header from 'components/Header';
import Home from 'routes/Home';
import TV from 'routes/TV';
import Search from 'routes/Search';

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/tv' component={TV} />
        <Route path='/search' component={Search} />
        <Redirect from='*' to='/' />
      </Switch>
    </Router>
  );
}
