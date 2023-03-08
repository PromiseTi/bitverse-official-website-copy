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
        <el-form-item prop="value1" class="trans">
          <el-input
            v-model="form.value1"
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
        value1: '',
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
        value1: { ...obj },
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
