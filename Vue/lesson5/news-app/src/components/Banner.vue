<template>
  <div class="banner-container">
    <!-- <ul class="images" style="width:300%"> -->
    <ul
      class="images"
      :style="{
        width: banners.length * 100 + '%',
        marginLeft: -index * 100 + '%',
      }"
    >
      <!-- <li>
              <a href=""><img src="../assets/banner/banner1.jpeg" alt=""></a>
          </li>
          <li>
              <a href=""><img src="../assets/banner/banner2.jpeg" alt=""></a>
          </li>
          <li>
              <a href=""><img src="../assets/banner/banner3.jpeg" alt=""></a>
          </li> -->
      <li v-for="(item, i) in banners" :key="i">
        <a :href="item.link"><img :src="item.url" alt="" /></a>
      </li>
    </ul>
    <ul class="dots">
      <!-- <li class="active"></li>
      <li></li>
      <li></li> -->
      <li
        v-for="(item, i) in banners"
        :key="i"
        :class="{
          active: index === i,
        }"
      ></li>
    </ul>
  </div>
</template>

<script>
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
    };
  },
};
</script>

<style>
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
