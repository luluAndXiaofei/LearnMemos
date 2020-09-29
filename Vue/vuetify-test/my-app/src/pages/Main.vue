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
        @click:close="handleCloseLabel"
        small
      >
        {{ label }}
      </v-chip>
    </div>

    <Passage
      v-for="(item, i) in passages"
      :key="i"
      :title="item.title"
      :subTitle="item.subTitle"
      :views="item.views"
      :updateTime="item.updateTime + '小时前'"
      @clickLabel="onClickLabel"
      :labels="['java', 'python', 'javascript', 'vue']"
    ></Passage>
  </div>
</template>

<script>
import Passage from "../components/Passage";
import { api } from "../service/api";

export default {
  components: {
    Passage,
  },

  data() {
    return {
      chip1: false,
      label: "",
      passages:[],
    };
  },

  async created() {
    this.passages = await this.getLastPassageList();
  },

  methods: {
    async getLastPassageList() {
      return await api.getPassageList();
    },

    async onClickLabel(label) {
      this.label = label;
      this.chip1 = true;
      this.scrollToTop();
      this.passages = await api.getPassageListByLabel(label);
    },

    scrollToTop() {
      var top = document.documentElement.scrollTop;
      var speed = Math.ceil(top / 2)
      var timer = setInterval(() => {
        top = top - speed;
        document.documentElement.scrollTop = top;
        if (top <= 0) {
          clearInterval(timer);
        }
      }, 100);
    },

    async handleCloseLabel() {
      this.chip1 = false;
      this.passages = await this.getLastPassageList();
    }
  },
};
</script>

<style></style>
