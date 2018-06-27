import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './containers/App';
import List from './containers/List';
import Create from './containers/Create';
import Edit from './containers/Edit';
import Login from './containers/Login';
import Logout from './containers/Logout';

export const InternalsRoutes = () => (
  <Switch>
    <Route path="/" exact component={List} />
    <Route path="/create" exact component={Create} />
    <Route path="/edit/:id" exact component={Edit} />
  </Switch>
);

export default () => (
  <Switch>
    <Route path="/" exact component={App} />
    <Route path="/sign-in" component={Login} type="sign-in" />
    <Route path="/sign-up" component={Login} type="sign-up" />
    <Route path="/sign-out" component={Logout} type="sign-out" />
    {/* when none of the above match, <App> will be rendered */}
    <Route component={App} />
  </Switch>
);
