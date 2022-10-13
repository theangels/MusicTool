import axios from 'axios';

var build = false;
const Util = {
  // Develop
  deploy: build == true ? true : false,
  apiPath: '/api',
  imgPath: build == true ? '' : '/img',
};

// Ajax 通用配置
Util.ajax = axios.create({
  baseURL: Util.apiPath
});

// 添加响应拦截器
Util.ajax.interceptors.response.use(res => {
  return res.data;
});

export default Util;
