<template>
  <div style="position:relative;z-index:0">
    <v-text-field
      label="请输入文章标题..."
      autofocus
      :loading="loading"
      v-model="title"
      single-line
    >
    </v-text-field>
    <mavon-editor
      style="height:700px;"
      v-model="text"
      @save="handleSave"
      :autofocus="false"
    >
    </mavon-editor>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      loading: false,
      title: "",
    };
  },

  methods: {
    async handleSave(savedText) {
      this.loading = true;
      console.log("保存中:" + savedText);
      await this.delay(2000);
      this.loading = false;
    },

    delay(duration) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, duration);
      });
    },
  },
};
</script>

<style></style>
