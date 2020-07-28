// import Vue from "./lib/vue.js";
import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js";
import App from "./App.js";


var vm = new Vue({
  components: {
    App,
  },
  render(createElement) {
      return createElement(App);
  }
});

vm.$mount("#app");
