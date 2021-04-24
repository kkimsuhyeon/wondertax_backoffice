import React from "react";
import { RouteComponentProps } from "react-router-dom";

import PageProperties from "./PageProps";

export default interface LayoutProperties {
  Component: React.FC<PageProperties>;
  route: RouteComponentProps<React.ReactNode>;
}
