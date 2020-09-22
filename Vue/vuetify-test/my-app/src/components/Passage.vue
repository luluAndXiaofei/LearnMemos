<template>
  <v-card class="mb-4">
    <v-card-title>
      <router-link :to="{ name: 'blog' }" class="link">{{ title }}</router-link>
    </v-card-title>

    <v-card-subtitle>
      {{ subTitle }}
    </v-card-subtitle>

    <v-card-actions>
      <v-chip
        color="primary"
        x-small
        class="ml-2"
        v-for="l in labels"
        :key="l"
        @click="clickLabel(l)"
      >
        {{ l }}
      </v-chip>
      <v-spacer></v-spacer>

      <span class="grey--text text-caption mr-2">{{ updateTime }}</span>
      <v-btn icon x-small class="mr-1">
        <v-icon>mdi-eye</v-icon>
      </v-btn>

      <span class="grey--text text-caption mr-2">{{ views }}</span>

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
export default {
  methods: {
    clickLabel(label) {
      alert(label);
    },
  },
  props: {
    title: {
      default: "",
      type: String,
    },
    subTitle: {
      default: "",
      type: String,
    },
    updateTime: {
      default: "",
      type: String,
    },
    views: {
      default: 0,
      type: Number,
    },
    labels: {
      default: () => ["java", "python", "vue"],
      type: Array,
    },
  },
};
</script>

<style scoped>
.link {
  color: #000000;
  text-decoration: None;
}
</style>
