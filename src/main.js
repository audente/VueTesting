// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from "vue";
import VueRouter from 'vue-router'
import VueFeatherIcon from 'vue-feather-icon'
import "bootstrap/dist/css/bootstrap.css";

import App from "./App";
import WelcomePage from "./components/WelcomePage";
import LoginPage from "./components/LoginPage";

Vue.use(VueRouter)
Vue.use(VueFeatherIcon)
Vue.config.productionTip = false;

/* eslint-disable no-new */

const router = new VueRouter({
  routes: [
    { path: '/', component: App, children: [ 
        { path: '/',        component: LoginPage },
        { path: '/welcome', component: WelcomePage }
      ],
    },
  ]
})

/*
new Vue({
  router
}).$mount('#app')
*/


new Vue({
  el: "#app",
  components: { App, router },
  template: "<App/>"
});


