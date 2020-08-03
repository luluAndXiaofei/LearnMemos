<template>
  <div>
    <div class="news-item-normal" v-for="(item, i) in news" :key="i">
      <div class="image"></div>
      <div class="word">
        <h2 class="title">123</h2>
      </div>
      <div class="aside">
        <span>123</span>
        <span>456</span>
        <span>789</span>
      </div>
      <div class="content">456</div>
    </div>
  </div>
</template>

<script>
import {getNews} from "../../service/newsSevice";

export default {

  data() {
    return {
      news: [],
    }
  },

  async created() {
    var data = await getNews();
    this.news = data;
  },


}
</script>

<style>
.news-item-normal {
  border-bottom: 1px solid #ccc;
  overflow: hidden;
  padding: 20px 0;
}
.image {
  width: 150px;
  height: 150px;
  border: 1px solid #ccc;
  border-radius: 4px;
  float: left;
  margin-right: 20px;
}
.image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.title {
  font-size: 1.5em;
}
.aside {
  font-size: 14px;
  color: #888;
}
.aside span {
  margin-right: 15px;
}

.content {
  max-height: 100px;
  overflow: hidden;
  line-height: 2;
}
</style>