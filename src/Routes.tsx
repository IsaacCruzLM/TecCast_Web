import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from './pages/Login';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={LoginPage} />
  </Switch>
);

export default Routes;
