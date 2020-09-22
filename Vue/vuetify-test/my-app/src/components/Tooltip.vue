<template>
  <v-tooltip color="cyan darken-1" bottom>
    <template v-slot:activator="{ attrs, on }">
      <router-link :to="to">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
          class="mr-1"
          :loading="loading"
          :disabled="loading"
          @click="handleClick"
        >
          <v-icon>{{ icon }}</v-icon>
        </v-btn>
      </router-link>
    </template>
    <span>{{ text }}</span>
  </v-tooltip>
</template>

<script>
export default {
  props: {
    // 跳转页面
    link: {
      default: "",
      type: String,
    },
    icon: {
      default: "",
      type: String,
    },
    text: {
      default: "",
      type: String,
    },
    loading: {
      default: false,
      type: Boolean,
    },
  },

  computed: {
    to() {
      return { name: this.link };
    },
  },

  methods: {
    handleClick() {
      this.$emit("onClick");
    },
  },
};
</script>

<style scoped>
</style>
