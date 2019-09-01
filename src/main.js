import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import {
  // VChart,
  // BRate,
  // DateRange,
  // GridFilter,
  // BSelectFilter,
  // HelloWorld
} from './components';

Vue.use(Router);

const components = {
  // 'v-chart': VChart,
  // BRate,
  // DateRange,
  // GridFilter,
  // BSelectFilter,
};
Object.keys(components).forEach(key => {
  Vue.component(key, components[key]);
});

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  data: {
    // eventBus: new Vue(),
  },
  router: App.router,
  render: h => h(App),
}).$mount('#app')
