<template>
  <div class="news-types">
    <div
      class="item"
      v-for="(item, i) in showChannels"
      :key="i"
      @click="changeChannelId(item.id)"
      :class="{ active: item.id == showId }"
    >
      <span class="name">{{ item.name }}</span>
    </div>
    <a href="" @click.prevent="opened = !opened">{{
      opened == false ? "展开" : "收起"
    }}</a>
  </div>
</template>

<script>
import { getNewsChannels } from "../../service/newsSevice";

export default {
  data() {
    return {
      channels: [],
      showId: null,
      opened: true,
    };
  },

  async created() {
    this.channels = await getNewsChannels();
    console.log(this.channels);
    this.showId = this.channels[0].id;
  },

  methods: {
    changeChannelId(id) {
      console.log(id);
      this.showId = id;
      this.$emit("changeChannel", id);
    },
  },
  computed: {
    showChannels() {
      if (this.opened) {
        return this.channels.slice(0, 8);
      } else {
        return this.channels;
      }
    },

  },
};
</script>

<style>
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
