<template>
  <div>
    <Banner :banners="images" />
    <Channels @changeChannel="onHannelChange" />
    <News :news="news" v-show="!isLoading"/>
    <Loading v-show="isLoading" />
  </div>
</template>

<script>
import Banner from "../components/Banner";
import Channels from "../components/news/Channels";
import News from "../components/news/NewsList";
import { getNews } from "../service/newsSevice";
import Loading from "../components/Loading";

export default {
  data() {
    return {
      images: [
        { url: require("../assets/banner/banner1.jpeg") },
        { url: require("../assets/banner/banner2.jpeg") },
        { url: require("../assets/banner/banner3.jpeg") },
      ],
      news: [],
      isLoading: false,
    };
  },

  components: {
    Banner,
    Channels,
    News,
    Loading,
  },

  methods: {
    async onHannelChange(id) {
      this.isLoading = true;
      this.news = await getNews(id);
      this.isLoading = false;
    },
  },
};
</script>

<style></style>
