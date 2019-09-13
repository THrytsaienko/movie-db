import Vue from 'vue';
import VueResource from 'vue-resource';
import VueScrollTo from 'vue-scrollto';
import router from './router';
import store from './store';
import App from './App.vue';

Vue.use(VueResource);
Vue.use(VueScrollTo);

Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
