<!--
* 重置密码
* @author （cgt）
* @date 2020/7/30
-->
<template>
  <div class="flex justify-center contns">
    <div class="text-center">
      <div>
        <img class="margin-bottom logImg" src="../../assets/logo.png" />
        <div class="margin-bottom-sm fontBlod">Reset login password</div>
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
        <el-form-item prop="pass" class="trans text-left margin-bottom-lg">
          <el-input
            type="password"
            show-password
            v-model="form.pass"
            placeholder="Please enter your password"
          ></el-input>
        </el-form-item>
        <el-form-item prop="checkPass" class="trans margin-bottom-xl">
          <el-input
            type="password"
            show-password
            v-model="form.checkPass"
            placeholder="Enter the login password again"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="trans conta">
        <el-button v-waves @click="doSve">Confim</el-button>
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
    var validatePass = (rule, value, callback) => {
      var reg = new RegExp(/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/)
      if (value.length < 8 || value.length > 20 || !reg.test(value)) {
        callback(
          new Error(
            'The password must be at least 8-20 characters and must contain numbers and letters'
          )
        )
      } else {
        if (this.formRules.checkPass !== '') {
          this.$refs.addForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter the password again'))
      } else if (value !== this.form.pass) {
        callback(new Error('The two passwords are inconsistent!'))
      } else {
        callback()
      }
    }
    return {
      form: {
        pass: '',
        checkPass: '',
      },
      formRules: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }],
      },
    }
  },
  computed: {},
  methods: {
    doSve() {
      this.$refs.addForm.validate((valid) => {
        if (valid) {
          console.log(1)
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
