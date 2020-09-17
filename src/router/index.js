import Vue from "vue";
import Router from "vue-router";
import { routes } from "config/router.config";
import { get } from "untils/storage";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});
router.beforeEach((to, from, next) => {
  const token = get("token");
  if (token) {
    next();
  } else {
    const { path } = to;
    path === "/login" || path === "/" ? next() : router.go("/login");
  }
});

export default router;
