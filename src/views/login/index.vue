<!--
* 登录
* @author （cgt）
* @date 2020/7/30
-->
<template>
  <div class="flex justify-center contns">
    <div class="text-center conta">
      <img class="margin-bottom logImg" src="../../assets/logo.png" />

      <el-form
        ref="addForm"
        :model="form"
        label-position="top"
        :rules="formRules"
        class="margin-bottom-xl"
      >
        <el-form-item prop="email" class="trans">
          <el-input v-model="form.email" placeholder="Enter email"></el-input>
        </el-form-item>
        <el-form-item prop="pwd" class="trans">
          <el-input
            v-model="form.pwd"
            placeholder="Enter login password"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="trans">
        <el-button v-waves @click="doSve">Login</el-button>
      </div>

      <div
        @click="$router.push({ name: 'forgot' })"
        class="text-right pointer padding-tb-xs"
      >
        Gorget the password？
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api";
import md5 from "js-md5";
export default {
  name: "",
  components: {},
  props: {},
  data() {
    var obj = {
      required: true,
      message: "*is required, please fill in the following carefully",
      trigger: "blur",
    };
    return {
      form: {
        email: "",
        pwd: "",
      },
      formRules: {
        email: [
          { ...obj },
          {
            type: "email",
            message: "Please enter the correct email address",
            trigger: ["blur", "change"],
          },
        ],
        pwd: { ...obj },
      },
    };
  },
  computed: {},
  methods: {
    doSve() {
      this.$refs.addForm.validate((valid) => {
        if (valid) {
          console.log(valid);
          this.login();
        }
      });
    },

    async login() {
      let { email, pwd } = this.form;
      let account = email;
      let password = md5('qwxioixascrwqd'+pwd);
      let result = await api.$login({ account, password });
      if (result.errorCode == null) {
        if (result.data.authToken != null) {
          this.$router.push({
            name: "verify",
            params: { email, authToken: result.data.authToken },
          });
        }
        //密码错误提示，连续输错5次 锁定账号30分钟
        else if (result.data.passwordErrorNum < 5) {
          this.$message({
            message: `The login password is wrong, you still have ${
              5 - result.data.passwordErrorNum
            } chances`,
            type: "error",
          });
        } else {
          this.$message({
            message:
              "Password is incorrect more than 5 times, the account will be locked for 30 minutes",
            type: "error",
          });
        }
      }
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped lang="scss">
.contns {
  color: #ffffff;
  width: 100%;
  height: 100vh;
  background: url(../../assets/backs.png) no-repeat;
  background-size: cover;
  padding-top: 140px;
  .conta {
    width: 400px;
    .logImg {
      width: 60px;
    }
  }
}
</style>
