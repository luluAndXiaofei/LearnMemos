<template>
  <Center>
    <form class="login-container" @submit.prevent="handleSubmit">
      <div class="form-item">
        <div class="input">
          <label for="">账号：</label>
          <input
            type="text"
            v-model="userInfo.loginId"
            @input="validateId"
          />
        </div>
        <FormError :msg="errorInfo.loginId" />
      </div>

      <div class="form-item">
        <div class="input">
          <label for="">密码：</label>
          <input
            type="password"
            v-model="userInfo.loginPwd"
            @input="validatePwd"
          />
        </div>
        <FormError :msg="errorInfo.loginPwd" />
      </div>
      <div class="form-item">
        <div class="input">
          <label></label><button>{{ loginStr }}</button>
        </div>
      </div>
    </form>
  </Center>
</template>

<script>
import Center from "@/components/Center";
import FormError from "../components/FormError";

export default {
  data() {
    return {
      userInfo: {
        loginId: "",
        loginPwd: "",
      },
      errorInfo: {
        loginId: "",
        loginPwd: "",
      },
    };
  },

  components: {
    Center,
    FormError,
  },

  methods: {
    async handleSubmit() {
      if (!this.validateId()) {
        return;
      }
      
      if (!this.validatePwd()) {
        return;
      }

      var success = await this.$store.dispatch(
        "loginUser/login",
        this.userInfo
      );

      if (!success) {
        this.errorInfo.loginId = "账号/密码不正确";
      }
    },

    validateEmpty(field, msg) {
      if (this.userInfo[field] == "") {
        this.errorInfo[field] = msg;
        return false;
      } else {
        this.errorInfo[field] = "";

        return true;
      }
    },

    validateId() {
      return this.validateEmpty('loginId', '账号不能为空');
    },

    validatePwd() {
      return this.validateEmpty('loginPwd', '密码不能为空');
    },
  },

  computed: {
    loginStr() {
      return this.$store.state.loginUser.isLoading ? "isLoading..." : "登陆";
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
