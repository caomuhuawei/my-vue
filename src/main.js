import Vue from "vue";

import Paginate from "vuejs-paginate";
import VueClipboard from "vue-clipboard2";
import VueLazyload from "vue-lazyload";

import App from "./App.vue";
import router from "./router";
import store from "./stores/createStore";

Vue.config.productionTip = false;
Vue.component("paginate", Paginate);
Vue.use(VueClipboard);
// Vue.use(VueLazyload, {
//   error:`./assets/img/error.png` ,
//   loading: `./assets/img/loading.gif`,
//   attempt: 1,
//   lazyComponent: true,
//   observer: true,
//   listenEvents: ["scroll"],
//   observerOptions: {
//     rootMargin: "0px",
//     threshold: 0.1,
//   },
// });
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
