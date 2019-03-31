import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuetify from 'vuetify';

import * as VueFire from "vuefire";
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//import Firebase from "firebase";

Vue.config.productionTip = false;
Vue.config.devtools = true


Vue.use(VueFire);
Vue.use(router);
Vue.use(Vuetify);


new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App },
  render: h => h(App)
}).$mount("#app");
