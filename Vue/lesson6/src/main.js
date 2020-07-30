import Vue from "vue";
import App from "./App.vue";
import "./assets/style/global.css";
import "./assets/style/reset.css";
import { getNewsChannles, getNews } from "./services/newsSevice";

Vue.config.productionTip = false;

getNewsChannles().then((res) => {
  console.log(res);
});

getNews().then((res) => {
  console.log(res);
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
