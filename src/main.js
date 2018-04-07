import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import $ from 'jquery'
import w3css from './assets/css/w3.css'
import bootstrap from './assets/css/bootstrap.css'
import App from './App'
import fansIndex from './components/fansIndex'
import home from './components/home'
import fanDetails from './components/fanDetails'

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  {path: '/fans', component: fansIndex},
  {path: '/', component: home},
  {path: '/fanDetails/:id', component: fanDetails}

];

const router = new VueRouter({
  routes: routes,
  mode:'history'
});


Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router: router,
  render: h=> h(App)
});
