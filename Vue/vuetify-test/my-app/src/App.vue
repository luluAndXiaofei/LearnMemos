<template>
  <div id="app">
    <v-main>
      <HelloWorld/>
    </v-main>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
