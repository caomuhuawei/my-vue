import Vue from "vue";

import VueClipboard from "vue-clipboard2";
import VueLazyload from "vue-lazyload";
import VueI18n from "vue-i18n";
import messages from "./i18n/index";

import App from "./App.vue";
import router from "./router";
import store from "./stores/createStore";

Vue.config.productionTip = false;
Vue.use(VueClipboard);
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: "cn", // 设置语言
  messages, // 语言包
});
// 组件外调用i18n, 使用 window.i18n.t();
// window.i18n = i18n;

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
  i18n,
  render: (h) => h(App),
}).$mount("#app");
