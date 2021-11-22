import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export interface PropTypes extends RouteProps {
  signin?: boolean;
  allow?: () => boolean;
  redirect?: string;
}

function RestrictRoute({ signin = undefined, redirect = '/', allow, ...rest }: PropTypes) {
  const accessToken = localStorage.getItem('token');
  const { pathname = '/' } = rest.location ?? {};
  const redirecting = <Redirect to={{ pathname: redirect, state: { prev: pathname } }} />;

  if (signin === true && accessToken === null) return redirecting;
  if (signin === false && accessToken !== null) return redirecting;

  if (allow && allow() === false) return redirecting;

  return <Route {...rest} />;
}

export default RestrictRoute;

export function isSignin() {
  return localStorage.getItem('token') !== null;
}

export function isNotSignin() {
  return localStorage.getItem('token') === null;
}
