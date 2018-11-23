import { PLATFORM } from "aurelia-pal";

export const APP_ROUTES = [
  {
    route: "",
    name: "home",
    moduleId: PLATFORM.moduleName("home/home"),
    // nav: true,
    title: "home"
  },
  {
    route: "async",
    name: "async",
    moduleId: PLATFORM.moduleName("async/async"),
    nav: true,
    title: "async"
  }
];
