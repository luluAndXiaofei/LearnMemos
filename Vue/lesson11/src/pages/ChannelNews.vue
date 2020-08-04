<template>
  <Center>
      某个频道的主页
  </Center>
</template>

<script>
import Center from "@/components/Center";

export default {
    components: {
        Center,
    },

    created() {
        console.log(this.$route.params.channelId);
    },
}
</script>

<style>

</style>