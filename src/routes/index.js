import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Router';
import Signin from '../pages/Signin/index';
import Student from '../pages/Student/index';
import StudentForm from '../pages/StudentForm/index';
import Plan from '../pages/Plan';
import PlanForm from '../pages/PlanForm';
import Registration from '../pages/Registration';
import RegistrationForm from '../pages/RegistrationForm';

import Order from '../pages/Orders';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/student" exact component={Student} isPrivate />
      <Route path="/plans" exact component={Plan} isPrivate />
      <Route path="/registrations" exact component={Registration} isPrivate />
      <Route path="/orders" component={Order} isPrivate />
      <Route path="/student/studentform" component={StudentForm} isPrivate />
      <Route
        path="/registrations/registrationform"
        component={RegistrationForm}
        isPrivate
      />
      <Route path="/plans/planform" component={PlanForm} isPrivate />

      <Route path="/" component={() => <h1>404 Page not found</h1>} />
    </Switch>
  );
}
