<!--
* 支付验证码
* @author （cgt）
* @date 2020/7/30
-->
<template>
  <div class="bac">
    <div class="wids">
      <div class="text-center margin-bottom">
        已将验证码发送至您的邮箱：256****2556@163.com，请注意查收。
      </div>
      <el-form
        ref="addForm"
        :model="form"
        label-position="left"
        :rules="formRules"
        class="margin-bottom padding-left conta"
        label-width="200"
      >
        <el-form-item label="验证码：" class="trans positRe">
          <div class="blcks" @click="goVer">
            {{ isDisable ? countdown + 's' : 'Get verification code' }}
          </div>
          <el-input
            style="width: 300px"
            v-model="form.value1"
            placeholder="E-mail verification code"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="flex justify-center trans">
        <el-button style="width: 210px" v-waves @click="doSve"
          >马上验证</el-button
        >
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
    return {
      isDisable: false,
      countdown: 90,
      form: {
        value1: '',
      },
      formRules: {},
    }
  },
  computed: {},
  methods: {
    doSve() {},
    goVer() {
      if (this.isDisable) {
        return
      }
      this.succesIng()
    },
  },
  created() {},
  mounted() {},
}
</script>
<style scoped lang="scss">
.bac {
  background-color: #0a0f1e;
  min-height: 100vh;
  padding-top: 140px;
  color: #ffffff;
  .wids {
    width: 550px;
    margin: 0px auto;
  }
  .blcks {
    right: -10px;
  }
  ::v-deep .el-form-item__label {
    color: #ffffff;
  }
}
</style>
