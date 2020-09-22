<template>
  <div>
    <div class="mb-2">
      <span v-if="chip1" class="grey--text">用标签过滤：</span>

      <v-chip
        v-if="chip1"
        class="ma-2"
        close
        color="primary"
        outlined
        @click:close="chip1 = false"
        small
      >
        {{ label }}
      </v-chip>
    </div>

    <Passage
      v-for="(item, i) in 10"
      :key="i"
      :title="'我的文章' + i"
      :subTitle="'我的文章副标题。也就是第一句话'"
      :views="256"
      :updateTime="i + '小时前'"
      @clickLabel="onClickLabel"
      :labels="['java', 'python', 'javascript', 'vue']"
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
      chip1: false,
      label: "",
    };
  },
  methods: {
    onClickLabel(label) {
      this.label = label;
      this.chip1 = true;
      this.scrollToTop();
    },

    scrollToTop() {
      var top = document.documentElement.scrollTop
      var speed = Math.ceil(top / 2)
      var timer = setInterval(() => {
        top = top - speed;
        document.documentElement.scrollTop = top;
        if (top <= 0) {
          clearInterval(timer);
        }
      }, 100);
    },
  },
};
</script>

<style></style>
