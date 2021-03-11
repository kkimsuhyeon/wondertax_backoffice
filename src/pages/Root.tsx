import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import UserRouter from './user/UserRouter';
import ServiceRouter from './service/ServiceRouter';
import QuestionRouter from './question/QuestionRouter';

import Home from './Home';

function Root() {
  return (
    <BrowserRouter basename='/'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/user' component={UserRouter} />
        <Route exact path='/service' component={ServiceRouter} />
        <Route exact path='/question' component={QuestionRouter} />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
}

export default Root;
