import { LifeCycles, registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: (): Promise<LifeCycles> =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@gl/side-menu",
  app: (): Promise<LifeCycles> => System.import("@gl/side-menu"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});