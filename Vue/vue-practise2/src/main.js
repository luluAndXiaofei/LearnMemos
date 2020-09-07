import Vue from 'vue'
import App from './App.vue'
import "./assets/style/global.css";
import "./assets/style/reset.css";
import router from "./routes/";
import store from "./store";

store.dispatch("channels/fetchData");
store.dispatch("loginUser/whoami");

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
