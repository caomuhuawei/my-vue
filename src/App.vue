<template>
  <transition name="fade">
    <router-view></router-view>
  </transition>
</template>

<script>
import { Validator, localize, extend } from "vee-validate";
import cn from "vee-validate/dist/locale/zh_CN";
export default {
  name: "App",
  // computed: {
  //   loading() {
  //     return this.$store.state.home.loading;
  //   },
  // },
  mounted() {
    const dict = {
      cn: {
        messages: {
          required: (name) => `请输入${name}`,
        },
        attributes: {
          username: "用户名",
        },
      },
    };
    localize("cn", cn);
    localize(dict);
    // extend("username", {
    //   validate: (value) => {
    //     return ;
    //   },
    // });
  },
};
</script>

<style>
</style>
