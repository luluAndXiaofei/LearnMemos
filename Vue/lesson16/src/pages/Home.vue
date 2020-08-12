<template>
  <div>
    <Banner :banners="banners" />
    <Channels @changeChannel="handleChange" />
    <NewsList :news="newsList" v-show="!isLoading" />
    <Loading v-show="isLoading" />
  </div>
</template>

<script>
import Banner from "../components/Banner";
import Channels from "../components/news/Channels";
import NewsList from "../components/news/NewsList";
import { getNews } from "../services/newsSevice";
import Loading from "../components/Loading";
import Center from "../components/Center";

export default {
  components: {
    Banner,
    Channels,
    NewsList,
    Loading,
    Center,
  },
  data() {
    return {
      banners: [
        {
          url: require("../assets/banner/banner1.jpeg"),
          link: "http://www.baidu.com",
        },
        {
          url: require("../assets/banner/banner2.jpeg"),
          link: "http://www.baidu.com",
        },
        {
          url: require("../assets/banner/banner3.jpeg"),
          link: "http://www.baidu.com",
        },
      ],
      newsList: [],
      isLoading: true,
    };
  },

  methods: {
    async handleChange(id) {
      this.isLoading = true;
      var res = await getNews(id);
      console.log(res);
      this.newsList = res;
      this.isLoading = false;
    },
  },
};
</script>
