import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import BasicList from './basic/List';
import BlankList from './blank/List';
import OXList from './OX/List';

function QuestionRouter() {
  return (
    <BrowserRouter basename='/question'>
      <Switch>
        <Route exact path='/basic' component={BasicList} />
        <Route exact path='/blank' component={BlankList} />
        <Route exact path='/ox' component={OXList} />
        <Redirect to='/basic' />
      </Switch>
    </BrowserRouter>
  );
}

export default QuestionRouter;
