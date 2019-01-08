// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from "vue";
import VueRouter from 'vue-router'
import VueFeatherIcon from 'vue-feather-icon'
import "bootstrap/dist/css/bootstrap.css";


// import App from "./App";
import { store } from './Store'
import WelcomePage from "./components/WelcomePage";
import LoginPage from "./components/LoginPage";
import ChartPage from "./components/ChartPage";
import TablePage from "./components/TablePage";

Vue.use(VueRouter);
Vue.use(VueFeatherIcon);
Vue.config.productionTip = false;

/* eslint-disable no-new */
const title = "Mexichem: ISR";
const router = new VueRouter({
  routes: [
    { name:'login',   path: '/',        component: LoginPage,   props: {title: title}, },
    { name:'welcome', path: '/welcome', component: WelcomePage, props: {title: title}, },
    { name:'chart',   path: '/chart',   component: ChartPage,   props: {title: title}, },
    { name:'table',   path: '/table',   component: TablePage,   props: {title: title}, },
  ]
})


new Vue({
  router,
  store,
}).$mount('#app')


/*
new Vue({
  el: "#app",
  store,
  components: { App, router },
  template: "<App/>"
});
*/


