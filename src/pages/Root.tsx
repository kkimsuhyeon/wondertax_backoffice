import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import Layout from 'components/Layout';
import AuthRoute, { isSignin, isNotSignin } from 'components/common/AuthRoute';

import Problems from 'pages/problems/ProblemsRoute';
import Home from 'pages/Home';
import Signin from 'pages/Signin';
import Signup from 'pages/Signup';

function Root() {
  return (
    <Switch>
      <AuthRoute allow={isNotSignin} exact path='/signin' component={Signin} />
      <AuthRoute allow={isNotSignin} exact path='/signup' component={Signup} />
      <Layout>
        <Switch>
          <AuthRoute allow={isSignin} redirect='/signin' exact path='/' component={Home} />
          <AuthRoute allow={isSignin} redirect='/signin' path='/problems' component={Problems} />
          <Redirect to='/signin' />
        </Switch>
      </Layout>
    </Switch>
  );
}

export default Root;
