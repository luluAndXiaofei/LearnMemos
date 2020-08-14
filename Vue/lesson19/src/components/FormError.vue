<template>
  <div
    class="error"
    :class="{ center: isCenter, }"
    :style="{ visibility: msg ? 'visible' : 'hidden' }"
  >
    {{ msg }}
  </div>
</template>

<script>
export default {
  props: {
    isCenter: {
      default: false,
      type: Boolean,
    },

    msg: {
      default: "",
      type: String,
    },
  },
};
</script>

<style scoped>
.form-item .error {
  font-size: 14px;
  color: #a44242;
  padding-left: 100px;
  height: 30px;
  line-height: 30px;
}
.form-item .error.center {
  text-align: center;
}
</style>
