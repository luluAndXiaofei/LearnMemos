<template>
  <div id="app">
      <Header />
    <div class="container">
      <Home />
    </div>
  </div>
</template>

<script>
import Home from "./pages/Home";
import Header from "./components/Header";

export default {
  components: {
    Home,
    Header,
  },
};
</script>

<style scoped>
.container {
  margin: 30px auto;
}
</style>
