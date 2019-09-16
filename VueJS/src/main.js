import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueResource from 'vue-resource'

export const serverBus = new Vue();
0
// Vue-resource configs
Vue.use(VueResource);
Vue.http.options.root = 'https://udemy-vue-755c9.firebaseio.com/';
// interceptors catches requests and can apply modifiers
Vue.http.interceptors.push((request, next) => {
  if (request.method == 'POST') {
    request.method = 'PUT';
  }
  // Looking at the response
  next(response => {
    // Limit use of the following
    // It will affect all responses
    // Should not be used in production code
    response.json = () => { return { messages: response.body } };
  });
});

Vue.directive('highlight', {
  bind(el, binding) {
    // binding contains the information about the directive
    // value is what is set in the quotes
    // el.style.backgroundColor = 'green';
    // el.style.backgroundColor = binding.value;

    let delay = 0;

    if (binding.modifiers.delayed) {
      delay = 3000;
    }

    setTimeout(() => {
      // arg is what is in v-X:arg
      // e.g. v-highlight:background=
      if (binding.arg === 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  },
});

Vue.filter('to-lowercase', value => value.toLowerCase());

Vue.filter('calculateLength', value => `${value} (${value.length})`);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
