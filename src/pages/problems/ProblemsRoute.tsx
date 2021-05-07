import React from 'react';
import { Route, Switch, Redirect, RouteComponentProps } from 'react-router-dom';

import BasicList from './basic/List';
import BasicRegist from './basic/Regist';
import BasicDetail from './basic/Detail';

import BlankList from './blank/List';

import OXList from './OX/List';
import OXRegist from './OX/Regist';

function Problems({ match: { url } }: RouteComponentProps) {
  console.log(url);
  return (
    <Switch>
      <Route exact path={`${url}/basic`} component={BasicList} />
      <Route exact path={`${url}/basic/regist`} component={BasicRegist} />
      <Route exact path={`${url}/basic/:basicId`} component={BasicDetail} />
      <Route exact path={`${url}/blank`} component={BlankList} />
      <Route exact path={`${url}/ox`} component={OXList} />
      <Route exact path={`${url}/ox/regist`} component={OXRegist} />
      <Redirect to={`${url}/basic`} />
    </Switch>
  );
}

export default Problems;
