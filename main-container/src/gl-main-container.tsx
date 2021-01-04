import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err: any, info: any, props: any) {
    // Customize the root error boundary for your microfrontend here.
    console.error(err, info, props);
    
    return null;
  },
});

export default lifecycles;
