<template>
  <transition name="fade">
    <div>
      <div class="loading-container" v-if="loading">加载中...</div>
      <router-view></router-view>
    </div>
  </transition>
</template>

<script>
import { mapState } from "vuex";
import { Validator, localize, extend } from "vee-validate";
import cn from "vee-validate/dist/locale/zh_CN";
export default {
  name: "App",
  computed: mapState({
    loading: (state) => state.common.loading,
  }),
  // 同名映射简写
  // computed: mapState(["common"]),
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
<style scoped>
.loading-container {
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
