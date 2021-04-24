import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import BasicList from './basic/List';
import BasicDetail from './basic/Detail';
import BasicRegist from './basic/Regist';

import BlankList from './blank/List';

import OXList from './OX/List';
import OXRegist from './OX/Regist';

function Problems() {
  return (
    <Switch>
      <Route exact path='/problems/basic' component={BasicList} />
      <Route exact path='/problems/basic/regist' component={BasicRegist} />
      <Route exact path='/problems/basic/:basicId' component={BasicDetail} />
      <Route exact path='/problems/blank' component={BlankList} />
      <Route exact path='/problems/ox' component={OXList} />
      <Route exact path='/problems/ox/regist' component={OXRegist} />
      <Redirect to='/problems/basic' />
    </Switch>
  );
}

export default Problems;
