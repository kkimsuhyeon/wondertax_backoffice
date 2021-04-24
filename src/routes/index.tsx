import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import routePaths from "./RoutePaths";
import Layout from "../components/Layout";

export default function Routes() {
  return (
    <BrowserRouter basename='/admin'>
      <Switch>
        {routePaths.map((routeProperty) => {
          return (
            <Route
              exact={routeProperty.exact}
              path={routeProperty.path}
              key={routeProperty.path}
              render={(route) => (
                <Layout Component={routeProperty.component} route={route} />
              )}
            />
          );
        })}
        <Route component={() => <>404</>} />
      </Switch>
    </BrowserRouter>
  );
}
