<template>
  <div>
    <div class="type-title">
      {{ channelName }}
    </div>
    <isLoading v-show="isLoading"/>
    <NewsList :news="news" />
    <Pager />
  </div>
</template>

<script>
import { mapState } from "vuex";
import NewsList from "../components/news/NewsList";
import {getNews} from "../service/newsSevice";
import isLoading from "../components/Loading";
import Pager from "../components/Pager";

export default {
  data() {
    return {
      news: [],
      channelName: "",
      isLoading: true,
    };
  },

  methods: {
    setChannelName() {
      var id = this.$route.params.channelId;
      this.channelName = this.data.find((item) => id == item.id).name;
    },
    async setData() {
      this.isLoading = true;
      this.news = await getNews(this.$route.params.channelId);
      this.isLoading = false;
    }
  },

  computed: {
    ...mapState("channels", ["data"]),
  },

  components: {
    NewsList,
    isLoading,
    Pager,
  },

  watch: {
    "$route.params.channelId": {
      immediate: true,
      handler() {
        this.setChannelName();
        this.setData();
      },
    },
  },
};
</script>

<style>
.type-title {
  font-size: 2em;
  color: #888;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}
</style>
