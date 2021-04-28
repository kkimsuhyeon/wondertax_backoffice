import React from 'react';
import { Route, RouteProps } from 'react-router';

export interface PropTypes {
  isAllow: () => void;
}

function AuthRoute({ isAllow, ...others }: RouteProps & PropTypes) {
  return <Route {...others} />;
}

export default AuthRoute;
