<template>
  <div style="width:1080px; margin:0 auto">
    <Banner :banners="images" />
    <Channels @changeChannel="onHannelChange" />
    <News :news="news" />
  </div>
</template>

<script>
import Banner from "../components/Banner";
import Channels from "../components/news/Channels";
import News from "../components/news/NewsList";
import { getNews } from "../service/newsSevice";

export default {
  data() {
    return {
      images: [
        { url: require("../assets/banner/banner1.jpeg") },
        { url: require("../assets/banner/banner2.jpeg") },
        { url: require("../assets/banner/banner3.jpeg") },
      ],
      news: [],
    };
  },

  components: {
    Banner,
    Channels,
    News,
  },

  methods: {
    async onHannelChange(id) {
      console.log(id);
      this.news = await getNews(id);
    },
  },
};
</script>

<style></style>
