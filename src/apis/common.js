import apis from "config/apis.config.js";
import axios from "config/axios.config.js";
const { notice } = apis.common;
const common = {
  getNotice: (data) => {
    return axios.get(notice, data);
  },
};
export default common;
