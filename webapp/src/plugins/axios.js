"use strict";

import Vue from 'vue';
import axios from "axios";
import store from '../store/index'
import {Message} from 'element-ui'

// Full config:  https://github.com/axios/axios#request-config
axios.defaults.baseURL =  window.config.serverAddress;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
   timeout: 60 * 1000, // Timeout
   withCredentials: false, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    if(localStorage.getItem('token')){
      config.headers.Authorization="Bearer "+localStorage.getItem('token');
    }
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    if (error.response) {
      switch (error.response.status) {
          case 401:  //
          {
            Message.error('Token过期！请重新登录！');
              // 返回 401 清除token信息并跳转到登录页面
              store.commit("clearUser");
              this.$router.push('/Login');
          }
      }
  }
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;
