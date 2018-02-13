// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';

Vue.use(Vuex);
Vue.config.productionTip = false;

/* eslint-disable no-new */
// mounts the component app into div with the id=app

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count += 1;
    },
  },
});

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
