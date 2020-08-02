<template>
  <div class="news-types" v-if="channels.length > 0">
    <div
      class="item"
      v-for="(item, i) in showChannels"
      :key="i"
      :class="{
        active: chooseId === item.id,
      }"
      @click="changeChannelId(item.id)"
    >
      <span class="name">{{ item.name }}</span>
    </div>
    <a href="" @click.prevent="isCollopased = !isCollopased">{{
      isCollopased ? "展开" : "收起"
    }}</a>
  </div>
</template>

<script>
import { getNewsChannles } from "@/services/newsSevice";

export default {
  data() {
    return {
      channels: [],
      isCollopased: true,
      chooseId: null,
    };
  },

  computed: {
    showChannels() {
      if (this.isCollopased) {
        return this.channels.slice(0, 8);
      } else {
        return this.channels;
      }
    },
  },

  methods: {
    changeChannelId(id) {
      this.chooseId = id;
      this.$emit("changeChannel", id);
    }
  },

  async created() {
    var res = await getNewsChannles();
    this.channels = res;
    this.changeChannelId(res[0].id);
  },
};
</script>

<style scoped>
.news-types {
  margin: 30px 0;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  padding-bottom: 15px;
}
.item {
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-right: 15px;
  margin: 7px 15px 7px 0;
  cursor: pointer;
  position: relative;
}
.item:hover {
  background: #ccc;
}
.item.active {
  background: #000;
  color: #fff;
}
.news-types a {
  align-self: flex-end;
  margin-bottom: 20px;
  color: #409eff;
}
</style>
