import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function ServiceRouter() {
  return (
    <BrowserRouter basename='/service'>
      <Switch>
        <Route exact path='/' component={() => <div>service</div>} />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
}

export default ServiceRouter;
