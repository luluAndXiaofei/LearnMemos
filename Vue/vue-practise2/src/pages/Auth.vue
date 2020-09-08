<template>
  <div>登陆验证中...</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("loginUser", ["isLoading", "data"]),
  },

  methods: {
    handleLogin() {
      if (this.isLoading) {
        return;
      }

      if (this.data) {
        if (this.$route.query.returnurl) {
          this.$router.push(this.$route.query.returnurl);
        } else {
          this.$router.push({ name: "personal" });
        }
      } else {
        this.$router.push({ name: "login" });
      }
    },
  },

  watch: {
    isLoading: {
      immediate: true,
      handler() {
        console.log("watch loading");
        this.handleLogin();
      },
    },
    data: {
      immediate: true,
      handler() {
        console.log("watch data");
        this.handleLogin();
      },
    },
  },
};
</script>

<style></style>
