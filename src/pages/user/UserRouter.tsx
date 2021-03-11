import React from 'react';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';

import UserList from './List';

function UserRouter() {
  return (
    <BrowserRouter basename='/user'>
      <Switch>
        <Route exact path='/' component={UserList} />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
}

export default UserRouter;
