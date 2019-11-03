import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import Routes from './routes'


Vue.use(VueResource);
Vue.use(BootstrapVue)
Vue.use(VueRouter)

const router = new VueRouter({
  routes:Routes,
  mode:'history'
})

// filtering
Vue.filter('to-upercase', function(value) {
  return value.toUpperCase();
});

Vue.filter('sinppit', function(value){
  return value.slice(0, 100) + '.......'
});
new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
