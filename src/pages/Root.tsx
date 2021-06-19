import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from 'components/Layout';

import Problems from 'pages/problems/ProblemsRoute';
import Home from 'pages/Home';
import LogIn from 'pages/Login';

function Root() {
  return (
    <Switch>
      <Route exact path='/login' component={LogIn} />
      <Route exact path='/signup' component={() => <>signup</>} />
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/problems' component={Problems} />
          <Redirect to='/' />
        </Switch>
      </Layout>
    </Switch>
  );
}

export default Root;
