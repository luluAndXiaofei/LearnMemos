import Vue from "vue";
import App from "./App.vue";
import "./assets/style/global.css";
import "./assets/style/reset.css";
import router from "./routes/index";
import store from "./store";

import { login , whoAmI, logout, reg} from "./services/userService";

// login({
//   loginId: "user",
//   loginPwd: "123123",
// }).then((resp) => {
//   console.log(`login:${resp}`);
// });

// whoAmI().then((res)=>{console.log(res)});
// logout();

reg({
  loginId:"luluxiaofei",
  loginPwd: "0825",
  nickname: "lulu",
}).then((res)=> {
  console.log(res);
});

store.dispatch("channels/fetchData");

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
