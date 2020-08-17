import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Month from '../pages/Month';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact component={Home} path="/" />
      <Route component={Month} path="/month/:month+" />
    </Switch>
  );
};

export default Routes;
