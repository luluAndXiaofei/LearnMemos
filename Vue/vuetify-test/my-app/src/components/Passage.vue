<template>
  <v-card class="mb-8">
    <v-card-title>
      <router-link :to="{ name: 'blog' }" class="link"
        >这是我的文章1</router-link
      >
    </v-card-title>

    <v-card-subtitle>
      我的文章副标题。也就是文章的第一句话
    </v-card-subtitle>

    <v-card-actions>
      <v-spacer></v-spacer>
      <span class="grey--text text-caption mr-2">6小时前</span>
      <v-btn icon x-small class="mr-1">
        <v-icon>mdi-eye</v-icon>
      </v-btn>

      <span class="grey--text text-caption mr-2">256</span>
      
      <v-btn icon x-small class="mr-1">
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon x-small class="mr-1">
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {};
</script>

<style scoped>
.link {
  color: #000000;
  text-decoration: None;
}
</style>
