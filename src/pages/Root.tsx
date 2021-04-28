import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import Layout from 'components/Layout';
import AuthRoute from 'components/common/AuthRoute';

import Problems from 'pages/problems/ProblemsRoute';
import Home from 'pages/Home';
import LogIn from 'pages/login/Login';

function Root() {
  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute isAllow={() => {}} exact path='/login' component={LogIn} />
        <AuthRoute isAllow={() => {}} path='/'>
          <Layout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/problems' component={Problems} />
              <Redirect path='*' to='/' />
            </Switch>
          </Layout>
        </AuthRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default Root;
