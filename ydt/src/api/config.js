import axios from 'axios';
import qs from 'qs';

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// http request拦截器
axios.interceptors.request.use((config) => {
  // POST传参序列化
  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }
  return config;
}, (error) => {
  Promise.reject(error);
});

// http response 拦截器
axios.interceptors.response.use((res) => {
  // 统一处理未登录
  if (res.data.code === 400135) {
    window.location.href = '/wx/index?goto_url=<{$g_www_domain}>/wx/xxxxxx';
  }
  return res.data;
}, (error) => {
  // 404等错误处理
  Promise.reject(error);
});

export default axios;