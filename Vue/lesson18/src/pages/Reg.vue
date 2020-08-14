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
        <div class="input">
          <label>重复密码：</label
          ><input
            type="password"
            autocomplete="new-password"
            v-model="userInfo.pwdAgain"
            @input="validatePwdAgain()"
          />
        </div>
        <FormError :msg="error.pwdAgain" />
      </div>
      <div class="form-item">
        <div class="input">
          <label>昵称：</label
          ><input
            type="text"
            autocomplete="new-password"
            v-model="userInfo.nickname"
            @input="validateNickName()"
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
        pwdAgain: "",
        nickname: "",
      },
      error: {
        loginId: "",
        loginPwd: "",
        pwdAgain: "",
        nickname: "",
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

    validatePwdAgain() {
      if (this.validateEmpty("pwdAgain", "重复密码不能为空")) {
        if (this.userInfo.loginPwd !== this.userInfo.pwdAgain) {
          this.error.pwdAgain = "两次密码不一致";
        }
        return true;
      }

      return false;
    },

    validateLoginId() {
      return this.validateEmpty("loginId", "账号不能为空");
    },

    validateLoginPwd() {
      return this.validateEmpty("loginPwd", "密码不能为空");
    },

    validateNickName() {
      return this.validateEmpty("nickname", "昵称不能为空");
    },

    async handleSubmit() {
      if (
        this.validateLoginId() &
        this.validateLoginPwd() &
        this.validatePwdAgain() &
        this.validateNickName()
      ) {
        var result = await reg(this.userInfo);
        if (result.data) {
            alert("注册成功");
            this.$router.push({
                name: "Login",
            });
        } else {
            this.error.server = result.msg;
        }
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
