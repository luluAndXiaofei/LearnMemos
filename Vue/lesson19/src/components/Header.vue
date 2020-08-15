<template>
  <div class="header">
    <div class="header-container">
      <div class="container">
        <div class="logo">
          <router-link :to="{ name: 'Home' }">
            <img src="../assets/logo.png" alt="" />
          </router-link>
        </div>
        <ul class="nav">
          <li><router-link :to="{ name: 'Home' }">首页</router-link></li>
          <li v-for="(item, i) in data" :key="i">
            <router-link
              :to="{
                name: 'Channel',
                params: { channelId: item.id },
                query: { page: 1 },
              }"
              >{{ item.name }}</router-link
            >
          </li>
        </ul>
        <div class="user">
          <span v-if="isLogin">loading...</span>
          <template v-else-if="loginUser">
            <router-link :to="{name: 'Personal'}">{{ loginUser.nickname }}</router-link>
            <a href="" @click.prevent="handleLogout">退出用户</a>
          </template>
          <template v-else>
            <router-link :to="{ name: 'Login' }">登陆</router-link>
            <router-link :to="{ name: 'Reg' }" href="">注册</router-link>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("channels", ["data", "isLoading"]),
    ...mapState("loginUser", {
      loginUser: "data",
      isLogin: "isLoading",
    }),
  },

  methods: {
    handleLogout() {
      this.$store.dispatch("loginUser/logout");
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style scoped>
.header {
  height: 60px;
}
.header-container {
  height: 60px;
  background: #000;
  color: #fff;
  line-height: 60px;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
}
.container {
  display: flex;
}
.logo a {
  display: flex;
  align-items: center;
  height: 100%;
}
.logo img {
  width: 42px;
  height: 42px;
}
.nav {
  margin: 0 60px;
  display: flex;
  flex-grow: 1;
}
.nav a {
  display: block;
  padding: 0 30px;
}
.nav .router-link-exact-active {
  color: #fcb85f;
}
.user {
  font-size: 14px;
}
.user * {
  margin-left: 10px;
}
.header a {
  color: #fff;
}
</style>
