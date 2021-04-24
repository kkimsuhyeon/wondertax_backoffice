import React from "react";

import PageProperties from "./PageProps";

export default interface RouteProperties {
  component: React.FC<PageProperties>;
  exact: boolean;
  path: string;
}
