import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Header from "./Header";
import Movie from "routes/Movie";
import TV from "routes/TV";
import Search from "routes/Search";
import Detail from "routes/Detail";

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Movie} />
      <Route path="/tv" component={TV} />
      <Route path="/search" component={Search} />
      <Route path="/movie/:id" component={Detail} />
      <Route path="/tv/:id" component={Detail} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
