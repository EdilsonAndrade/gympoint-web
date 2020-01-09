import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Router';
import Signin from '../pages/Signin/index';
import Student from '../pages/Student/index';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/student" component={Student} isPrivate />
      <Route path="/" component={() => <h1>404 Page not found</h1>} />
    </Switch>
  );
}
