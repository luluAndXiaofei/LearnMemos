<template>
  <div style="width:1080px; margin:0 auto">
      <Banner :banners="images" />
      <Channels />
    </div>
</template>

<script>
import Banner from "../components/Banner";
import Channels from "../components/news/Channels"

export default {
  data() {
    return {
      images: [
        { url: require("../assets/banner/banner1.jpeg") },
        { url: require("../assets/banner/banner2.jpeg") },
        { url: require("../assets/banner/banner3.jpeg") },
      ],
    };
  },

  components: {
    Banner,
    Channels,
  },
}
</script>

<style>

</style>