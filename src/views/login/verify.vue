<!--
* 安全验证
* @author （cgt）
* @date 2020/7/30
-->
<template>
  <div class="flex justify-center contns">
    <div class="text-center">
      <div>
        <img class="margin-bottom logImg" src="../../assets/logo.png" />
        <div class="margin-bottom-sm fontBlod">safety verification</div>
        <div class="margin-bottom">
          After changing the login password, the currency cannot be withdrawn
          for 24 hours
        </div>
      </div>
      <el-form
        ref="addForm"
        :model="form"
        label-position="top"
        :rules="formRules"
        class="margin-bottom conta"
      >
        <el-form-item prop="value1" class="trans positRe">
          <div class="text-left margin-bottom-xs fontSize-18">
            Your email {{ email }}
          </div>
          <div class="blcks" @click="goVer">
            {{ isDisable ? countdown + "s" : "Get verification code" }}
          </div>
          <el-input
            v-model="form.value1"
            placeholder="E-mail verification code"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="trans conta">
        <el-button v-waves @click="doSve">Next step</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api";
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
      isDisable: false,
      countdown: 90,
      email: "",
      form: {
        value1: "",
      },
      formRules: {
        value1: { ...obj },
      },
    };
  },
  computed: {},
  methods: {
    doSve() {
      this.$refs.addForm.validate((valid) => {
        if (valid) {
          this.loginVerify();
        }
      });
    },
    goVer() {
      if (this.isDisable) {
        return;
      }
      this.sendVerifyLoginCode();
    },

    //发送验证码
    async sendVerifyLoginCode() {
      let { authToken } = this;
      let result = await api.$sendVerifyLoginCode({ authToken });
      if (result.errorCode == null) {
        this.succesIng();
        this.$message({
          message: "Send Success!",
          type: "success",
        });
      } else {
        this.$message({
          message: result.errorMsg,
          type: "error",
        });
      }
    },

    //安全验证登录
    async loginVerify() {
      let { authToken } = this;
      let { value1 } = this.form;
      let that = this

      let result = await api.$loginVerify({
        authToken,
        verifyCode: value1,
      });
      console.log(result);
      if (result.errorCode == null) {
        localStorage.setItem("token", result.data.token);
        this.$message({
          message: "Login Success!",
          type: "success",
        });
        that.$router.push("/mall");
      } else {
        this.$message({
          message: result.errorMsg,
          type: "error",
        });
      }
    },
  },
  created() {
    this.email = this.$route.params.email;
    this.authToken = this.$route.params.authToken;
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.contns {
  color: #ffffff;
  width: 100%;
  height: 100vh;
  background: url(../../assets/backs.png) no-repeat;
  background-size: cover;
  padding-top: 140px;
  .conta {
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    .logImg {
      width: 60px;
    }
  }
}
</style>
