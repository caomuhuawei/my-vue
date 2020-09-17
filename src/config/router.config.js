// const Index = () => import(/* webpackChunkName: "index" */ "views/index");
import Home from "views/home";
import Login from "views/login";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
];
