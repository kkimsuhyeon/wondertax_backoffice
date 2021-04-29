import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import Layout from 'components/Layout';
import AuthRoute from 'components/common/AuthRoute';

import Problems from 'pages/problems/ProblemsRoute';
import Home from 'pages/Home';
import LogIn from 'pages/Login';

function Root() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/login' component={LogIn} />
        <Route exact path='/signup' component={() => <>signup</>} />
        <Layout>
          <Route exact path='/' component={Home} />
          <Route path='/problems' component={Problems} />
          <Redirect path='*' to='/' />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default Root;
