<template>
  <div id="app">
    <div style="width:1080px; margin:0 auto">
      <Banner :banners="banners" />
      <Channels @changeChannel="handleChange" />
      <NewsList :news="newsList" />
      <Center><Loading /></Center>
    </div>
  </div>
</template>

<script>
import Banner from "./components/Banner";
import Channels from "./components/news/Channels";
import NewsList from "./components/news/NewsList";
import { getNews } from "./services/newsSevice";
import Loading from "./components/Loading";
import Center from "./components/Center";

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
          url: require("./assets/banner/banner1.jpeg"),
          link: "http://www.baidu.com",
        },
        {
          url: require("./assets/banner/banner2.jpeg"),
          link: "http://www.baidu.com",
        },
        {
          url: require("./assets/banner/banner3.jpeg"),
          link: "http://www.baidu.com",
        },
      ],
      newsList: [],
    };
  },

  async created() {
    var res = await getNews();
    console.log(res);
    this.newsList = res;
  },

  methods: {
    handleChange(id) {
      console.log(id);
    },
  },
};
</script>
