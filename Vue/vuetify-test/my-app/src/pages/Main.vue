<template>
  <div>
    <div class="mb-2">
      <span class="grey--text">用标签过滤：</span>

      <v-chip
        v-if="chip1"
        class="ma-2"
        close
        color="primary"
        outlined
        @click:close="chip1 = false"
        small
      >
        Java
      </v-chip>
    </div>

    <Passage
      v-for="(item, i) in 10"
      :key="i"
      :title="'我的文章' + i"
      :subTitle="'我的文章副标题。也就是第一句话'"
      :views="256"
      :updateTime="i + '小时前'"
    ></Passage>
  </div>
</template>

<script>
import Passage from "../components/Passage";

export default {
  components: {
    Passage,
  },
  data() {
    return {
      chip1: true,
    };
  },
};
</script>

<style></style>
