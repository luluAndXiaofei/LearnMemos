<template>
  <div>
    <div class="type-title">
      {{ channelName }}
    </div>
    <Loading v-show="isLoading" />
    <NewsList :news="news" />
    <Pager
      :page="page"
      :limit="limit"
      :total="total"
      :panelNumber="panelNumber"
      @pageChange="handleChange"
    />
  </div>
</template>

<script>
import Pager from "@/components/Pager";
import NewsList from "../components/news/NewsList";
import * as NewsService from "../services/newsSevice";
import Loading from "../components/Loading";
import { mapState } from "vuex";

export default {
  components: {
    Pager,
    NewsList,
    Loading,
  },

  data() {
    return {
      channelName: "",
      limit: 3,
      total: 0,
      panelNumber: 5,
      news: [],
      isLoading: true,
    };
  },

  computed: {
    page() {
      return +this.$route.query.page || 1;
    },
    ...mapState("channels", ["data"]),
  },

  methods: {
    handleChange(newPage) {
      // this.$router.push("/");
      // this.$router.push("?page=" + newPage);
      this.$router.push({
        // name: "Channel",
        // params: this.$route.params.channelId,
        query: {
          page: newPage,
        },
      });
      this.setDatas();
    },
    
    async setChannelName() {
      this.channelName = this.data.find((item) => {
        return item.id == this.$route.params.channelId;
      }).name;
    },

    async setDatas() {
      this.isLoading = true;
      this.news = await NewsService.getNews(this.$route.params.channelId);
      this.isLoading = false;
      this.total = this.news.length;
    },
  },

  watch: {
    "$route.params.channelId": {
      immediate: true, // 一开始的数据也要当作是一种变化
      handler(newId, oldId) {
        this.setChannelName();
        this.setDatas();
      },
    },
  },
};
</script>

<style scoped>
.type-title {
  font-size: 2em;
  color: #888;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}
</style>
