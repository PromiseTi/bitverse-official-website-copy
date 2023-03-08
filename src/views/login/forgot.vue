<!--
* 忘记密码
* @author （cgt）
* @date 2020/7/30
-->
<template>
  <div class="flex justify-center contns">
    <div class="text-center">
      <div>
        <img class="margin-bottom logImg" src="../../assets/logo.png" />
        <div class="margin-bottom-sm fontBlod">Recharge login password</div>
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
        <el-form-item prop="email" class="trans">
          <el-input v-model="form.email" placeholder="Enter email"></el-input>
        </el-form-item>
      </el-form>
      <div class="trans conta">
        <el-button v-waves @click="doSve">Next step</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    var obj = {
      required: true,
      message: '*is required, please fill in the following carefully',
      trigger: 'blur',
    }
    return {
      form: {
        email: '',
      },
      formRules: {
        email: [
          { ...obj },
          {
            type: 'email',
            message: 'Please enter the correct email address',
            trigger: ['blur', 'change'],
          },
        ],
      },
    }
  },
  computed: {},
  methods: {
    doSve() {
      this.$refs.addForm.validate((valid) => {
        if (valid) {
          console.log(valid)
        }
      })
    },
  },
  created() {},
  mounted() {},
}
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
