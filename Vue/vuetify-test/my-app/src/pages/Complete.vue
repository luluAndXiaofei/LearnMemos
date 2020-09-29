<template>
  <div class="text-center">
    <div>
      <v-icon color="primary" x-large class="mb-2">
        mdi-checkbox-marked-circle
      </v-icon>
    </div>
    <div class="mb-8">
      恭喜您发布成功！
    </div>

    <v-btn rounded color="primary" outlined dark :to="{ name: 'main' }">
      点击查看文章-->
    </v-btn>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
