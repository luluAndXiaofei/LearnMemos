<template>
  <Center>
      <div class="login-container">
        <div class="form-item">
          <div class="input">
            <label for="">账号：</label>
            <input type="text">
          </div>
        </div>
      </div>
  </Center>
</template>

<script>
import Center from "@/components/Center";

export default {
  components: {
    Center,
  }
}
</script>

<style>
.login-container {
  width: 400px;
}

.form-item .input {
  display: flex;
}
.form-item label {
  width: 100px;
  display: inline-block;
  text-align: right;
  line-height: 41px;
}

.form-item input,
.form-item button {
  flex-grow: 1;
}
</style>