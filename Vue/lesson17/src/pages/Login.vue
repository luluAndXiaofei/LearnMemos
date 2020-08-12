<template>
  <Center>
    <form action="" class="login-container" @submit.prevent="handleSubmit">
      <div class="form-item">
        <div class="input">
          <label>账号：</label
          ><input
            type="text"
            v-model="userInfo.loginId"
            @input="validateLoginId()"
          />
        </div>
        <FormError :msg="error.loginId" />
      </div>
      <div class="form-item">
        <div class="input">
          <label>密码：</label
          ><input
            type="password"
            autocomplete="new-password"
            v-model="userInfo.loginPwd"
            @input="validateLoginPwd()"
          />
        </div>
        <FormError :msg="error.loginPwd" />
      </div>
      <div class="form-item">
        <div class="input"><label></label><button>登陆</button></div>
      </div>
    </form>
  </Center>
</template>

<script>
import Center from "@/components/Center";
import FormError from "../components/FormError";
import { reg } from "../services/userService";

export default {
  components: {
    Center,
    FormError,
  },

  data() {
    return {
      userInfo: {
        loginId: "",
        loginPwd: "",
      },
      error: {
        loginId: "",
        loginPwd: "",
      },
    };
  },

  methods: {
    validateEmpty(filed, msg) {
      if (this.userInfo[filed]) {
        this.error[filed] = "";
        return true;
      } else {
        this.error[filed] = msg;
        return false;
      }
    },

    validateLoginId() {
      return this.validateEmpty("loginId", "账号不能为空");
    },

    validateLoginPwd() {
      return this.validateEmpty("loginPwd", "密码不能为空");
    },

    async handleSubmit() {
      if (
        this.validateLoginId() &
        this.validateLoginPwd()
      ) {
        alert("登陆成功");
      }
    },
  },
};
</script>

<style scoped>
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
