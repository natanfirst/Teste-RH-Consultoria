import React from 'react';

import { Switch, Route} from 'react-router-dom';
import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import Register from '../pages/Login/Register';
import Task from '../pages/Task';
import NewTask from '../pages/Task/NewTask';
import Taskopen from '../pages/TaskOpen';
import Schedule from '../pages/Schedule';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Welcome} />
    <Route path="/login" exact component={Login} />
    <Route path="/login/register" exact component={Register} />
    <Route path="/home" exact component={Task} />
    <Route path="/newtask" exact component={NewTask} />
    <Route path="/taskopen" exact component={Taskopen} />
    <Route patth="/planner" exact component={Schedule} />
  </Switch>
);

export default Routes;
