import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import BasicList from './basic/List';
import BasicDetail from './basic/Detail';
import BasicRegist from './basic/Regist';

import BlankList from './blank/List';

import OXList from './OX/List';
import OXRegist from './OX/Regist';

// const BasicRegist = React.lazy(() => import('./basic/Regist'));

function Problems() {
  return (
    <BrowserRouter basename='/admin/problems'>
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route exact path='/basic' component={BasicList} />
          <Route exact path='/basic/regist' component={BasicRegist} />
          <Route exact path='/basic/:basicId' component={BasicDetail} />
          <Route exact path='/blank' component={BlankList} />
          <Route exact path='/ox' component={OXList} />
          <Route exact path='/ox/regist' component={OXRegist} />
          <Redirect to='/basic' />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default Problems;
