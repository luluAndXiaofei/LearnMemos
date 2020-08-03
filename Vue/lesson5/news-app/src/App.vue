<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "./pages/Home";

export default {
  components: {
    Home,
  },
  data() {
    return {
      banners: [
        { url: require("./assets/banner/banner1.jpeg"), link: "http://www.baidu.com" },
        { url: require("./assets/banner/banner2.jpeg"), link: "http://www.baidu.com" },
        { url: require("./assets/banner/banner3.jpeg"), link: "http://www.baidu.com" },
      ],
    };
  },
};
</script>
