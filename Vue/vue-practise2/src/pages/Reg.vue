<template>
  <Center>
    <div class="login-container">
      <div class="form-item">
        <div class="input">
          <label for="">账号：</label>
          <input type="text" />
        </div>
        <FormError :msg="'error1'" />
      </div>

      <div class="form-item">
        <div class="input">
          <label for="">密码：</label>
          <input type="password" />
        </div>
        <FormError :msg="'error2'" />
      </div>
      <div class="form-item">
        <div class="input">
          <label for="">重复密码：</label>
          <input type="password" />
        </div>
        <FormError :msg="'error1'" />
      </div>

      <div class="form-item">
        <div class="input">
          <label for="">昵称：</label>
          <input type="text" />
        </div>
        <FormError :msg="'error2'" />
      </div>
      <div class="form-item">
        <div class="input">
          <label></label><button>注册</button>
        </div>
      </div>
    </div>
  </Center>
</template>

<script>
import Center from "@/components/Center";
import FormError from "../components/FormError";

export default {
  components: {
    Center,
    FormError,
  },
};
</script>

<style socoped>
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
