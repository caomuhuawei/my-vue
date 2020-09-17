import common from "apis/common";

export default {
  state: {
    localLoading: false,
    loading: false,
  },
  actions: {
    async getNotice() {
      let res = await common.getNotice({
        data: {},
      });
      return res;
    },
  },
  mutations: {
    setLocalLoading(val) {
      state.localLoading = val;
    },
    setLoading(state, status) {
      state.loading = status;
    },
  },
};
