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
import Detail from 'routes/Detail';

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/tv' exact component={TV} />
        <Route path='/search' component={Search} />
        <Route path='/movie/:id(\d+)' component={Detail} />
        <Route path='/tv/:id(\d+)' component={Detail} />
        <Redirect from='*' to='/' />
      </Switch>
    </Router>
  );
}
