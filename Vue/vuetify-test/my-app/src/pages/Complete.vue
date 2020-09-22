<template>
  <div>
    <v-card max-width="1000" class="mx-auto">
      <v-sheet color="primary" light height="150" center>
          <div style="text-align:center">
          </div>

      </v-sheet>

      <v-card-text>
        <router-link :to="{ name: 'main' }">
          发布成功！
        </router-link>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn rounded color="primary" outlined dark>点击查看文章--></v-btn>

        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
