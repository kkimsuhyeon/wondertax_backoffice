import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

// import routePaths from './RoutePaths';
import Layout from 'components/Layout';
// import BasicList from 'pages/problems/basic/List';
import Problem from 'pages/problems';
import Home from 'pages/Home';

export default function Routes() {
  return (
    <BrowserRouter basename='/admin'>
      <Switch>
        <Layout>
          <Route path='/problems' component={Problem} />
          <Route exact path='/' component={Home} />
          {/* <Route component={() => <>404</>} /> */}
          {/* <Redirect /> */}
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}
