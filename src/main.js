// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'

import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import FastClick from 'fastclick'

import store from './vuex/store'


Vue.use(VueAxios,axios,Vuex)

//使用 fastclick 解决移动端 300ms 点击延迟
FastClick.attach(document.body)

//将此值设置为 false ,会关闭 Vue 启动时的提示信息，推荐
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  //template: '<App/>',
  //components: { App }
  render:h=>h(App)
})
