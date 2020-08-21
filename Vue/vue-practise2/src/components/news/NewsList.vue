<template>
  <div>
    <div class="news-item-normal" v-for="(item, i) in news" :key="i">
      <div class="image">
        <a :href="item.link" v-show="item.havePic">
          <img :src="item.img" alt="" />
        </a>
      </div>
      <div class="word">
        <h2 class="title">{{ item.title }}</h2>
      </div>
      <div class="aside">
        <span>{{ item.name }}</span>
        <span>发布日期：{{ item.putDate }}</span>
        <span>来源：{{ item.source }}</span>
      </div>
      <div class="content">{{ item.content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    news: {
      type: Array,
      default: () => [],
    },
  },
};
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
