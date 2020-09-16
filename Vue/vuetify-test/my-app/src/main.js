import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import VueRouter from 'vue-router';
import router from './routes';

Vue.use(mavonEditor)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
