import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import Layout from 'components/Layout';

import Problems from 'pages/problems/ProblemsRoute';
import Home from 'pages/Home';
import RegisterPreview from 'pages/registerpreview/RegisterPreview';

function Root() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/problems' component={Problems} />
          <Route path='/registerpreview' component={RegisterPreview} />
          <Redirect path='*' to='/' />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default Root;
