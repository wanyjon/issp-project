// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueChart from 'vue-chart-js'
import VueStomp from 'vue-stomp'
import VueWebsocket from "vue-websocket"
import VueSession from 'vue-session'
import VueSessionStorage from 'vue-sessionstorage'
import VueCookie from 'vue-cookie'


Vue.config.productionTip = false;

Vue.use(iView,VueAxios,axios,VueChart,VueCookie);

// axios.defaults.withCredentials = true;
// Vue.use(VueSession);

// Vue.use(VueWebsocket, "ws://localhost:9710/websocket",{
    // reconnection: false
// });
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
