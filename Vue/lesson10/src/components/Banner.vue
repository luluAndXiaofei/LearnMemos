<template>
  <div class="banner-container" @mouseenter="autoStop" @mouseleave="autoStart">
    <ul class="images" :style="styleObject">
      <li v-for="(item, i) in banners" :key="i">
        <a :href="item.link"><img :src="item.url" alt="" /></a>
      </li>
    </ul>
    <ul class="dots">
      <li
        v-for="(item, i) in banners"
        :key="i"
        :class="{
          active: index === i,
        }"
        @click="index = i"
      ></li>
    </ul>
  </div>
</template>

<script scoped>
export default {
  // props: ["banners"],
  props: {
    banners: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      index: 0,
      timer: null,
    };
  },

  created() {
    console.log("创建了");
    this.autoStart();
  },

  destoried() {
    this.autoStop();
  },

  methods: {
    autoStart() {
      if (this.timer) {
        return;
      }
      this.timer = setInterval(() => {
        this.index = (this.index + 1) % this.banners.length;
      }, 3000);
    },

    autoStop() {
      clearInterval(this.timer);
      this.timer = null;
    },
  },

  computed: {
    styleObject() {
      return {
        width: this.banners.length * 100 + "%",
        marginLeft: -this.index * 100 + "%",
      };
    },
  },
};
</script>

<style scoped>
.banner-container {
  height: 350px;
  position: relative;
  overflow: hidden;
}
.banner-container li {
  display: block;
  width: 1080px;
  height: 100%;
  float: left;
}
.images {
  height: 100%;
  transition: 0.5s;
}
.banner-container img {
  width: 1080px;
  height: 100%;
}
.dots {
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
}
.dots li {
  width: 10px;
  cursor: pointer;
  height: 10px;
  margin: 0 3px;
  border-radius: 50%;
  border: 1px solid;
  color: #fff;
}
.dots li.active {
  background: #fff;
}
</style>
