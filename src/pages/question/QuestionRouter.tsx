import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import BasicList from './basic/List';
import BasicDetail from './basic/Detail';
import BlankList from './blank/List';
import OXList from './OX/List';
import BasicRegist from './basic/Regist';

// const BasicRegist = React.lazy(() => import('./basic/Regist'));

function QuestionRouter() {
  return (
    <BrowserRouter basename='/question'>
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route exact path='/basic' component={BasicList} />
          <Route exact path='/basic/regist' component={BasicRegist} />
          <Route exact path='/basic/:basicId' component={BasicDetail} />
          <Route exact path='/blank' component={BlankList} />
          <Route exact path='/ox' component={OXList} />
          <Redirect to='/basic' />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default QuestionRouter;
