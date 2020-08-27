<template>
  <div
    class="error"
    :class="{ center: isCenter }"
    :style="{ visibility: msg ? true : false }"
  >
    {{ msg }}
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      default: "",
      type: String,
    },
    isCenter: {
      default: false,
      type: Boolean,
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
