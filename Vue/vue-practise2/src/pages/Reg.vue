<template>
  <Center>
    <form class="login-container" @submit.prevent="handleSubmit">
      <div class="form-item">
        <div class="input">
          <label for="">账号：</label>
          <input
            type="text"
            @input="validateLoginId"
            v-model="userInfo.loginId"
          />
        </div>
        <FormError :msg="error.loginId" />
      </div>

      <div class="form-item">
        <div class="input">
          <label for="">密码：</label>
          <input
            type="password"
            @input="validateLoginPwd"
            v-model="userInfo.loginPwd"
          />
        </div>
        <FormError :msg="error.loginPwd" />
      </div>
      <div class="form-item">
        <div class="input">
          <label for="">重复密码：</label>
          <input
            type="password"
            @input="validatePwdAgain"
            v-model="userInfo.loginPwdAgain"
          />
        </div>
        <FormError :msg="error.loginPwdAgain" />
      </div>

      <div class="form-item">
        <div class="input">
          <label for="">昵称：</label>
          <input
            type="text"
            @input="validateNickName"
            v-model="userInfo.nickname"
          />
        </div>
        <FormError :msg="error.nickname" />
      </div>
      <div class="form-item">
        <div class="input"><label></label><button>注册</button></div>
        <FormError :msg="error.server" />
      </div>
    </form>
  </Center>
</template>

<script>
import Center from "@/components/Center";
import FormError from "../components/FormError";
import { reg } from "../service/userService";

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
        loginPwdAgain: "",
        nickname: "",
      },
      error: {
        loginId: "",
        loginPwd: "",
        loginPwdAgain: "",
        server: "",
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
      if (this.validateEmpty("loginPwd", "密码不能为空")) {
        return this.validatePwdAgain();
      }

      return false;
    },

    validateNickName() {
      return this.validateEmpty("nickname", "昵称不能为空");
    },

    validatePwdAgain() {
      if (this.validateEmpty("loginPwdAgain", "密码不能为空")) {
        if (this.userInfo.loginPwd != this.userInfo.loginPwdAgain) {
          this.error.loginPwdAgain = "两次密码不一致";
          return false;
        } else {
          this.error.loginPwdAgain = "";
          return true;
        }
      }
    },

    async handleSubmit() {
      this.error.server = "";
      if (
        this.validateLoginId() &
        this.validateLoginPwd() &
        this.validatePwdAgain() &
        this.validateNickName()
      ) {
        var res = await reg(this.userInfo);
        console.log(res);
        if (res.data) {
          alert("注册成功");
        } else {
          this.error.server = res.msg;
        }
      }
    },
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
