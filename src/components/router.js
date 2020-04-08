import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from 'routes/Home';
import TV from 'routes/TV';
import Search from 'routes/Search';

export default function AppRouter() {
  return (
    <Router>
      <Route path='/' exact component={Home} />
      <Route path='/tv' exact component={TV} />
      <Route path='/search' exact component={Search} />
    </Router>
  );
}
