<template>
  <div>
    <Passage v-for="item in 5" :key="item"></Passage>
  </div>
</template>

<script>
import Passage from "../components/Passage";

export default {
  components: {
    Passage,
  },
};
</script>

<style></style>
