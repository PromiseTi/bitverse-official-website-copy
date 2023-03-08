<!--
* ----
* @author （cgt）
* @date 2020/7/30
-->
<template>
  <div class="coloFFF backMo">
    <div class="pc">
      <div class="contactUs">
        <div class="widSmall">
          <div class="froSs">
            <img class="PicImg" src="../assets/img-contact-pic@2x.png" />
            <el-form
              ref="addForm"
              :model="form"
              label-position="top"
              :rules="formRules"
            >
              <el-form-item label="Name" prop="name">
                <el-input
                  style="width: 440px"
                  v-model="form.name"
                  placeholder="Your full name and prefered prefix"
                ></el-input>
              </el-form-item>
              <el-form-item label="E-mail Address" prop="email">
                <el-input
                  style="width: 440px"
                  v-model="form.email"
                  placeholder="Please enter your email address here"
                ></el-input>
              </el-form-item>
              <el-form-item label="Subject" prop="subject">
                <el-input
                  v-model="form.subject"
                  placeholder="Brief your issue in one sentence"
                ></el-input>
              </el-form-item>
              <el-form-item label="Message" prop="message">
                <el-input
                  type="textarea"
                  :rows="3"
                  v-model="form.message"
                  placeholder="Please describe your issue in detail"
                ></el-input>
              </el-form-item>
            </el-form>
            <!-- <div class="margin-bottom-lg fontSize-14">
              Contact email:<a class="coloBlue margin-left-xs"
                >admin@bitverse.io</a
              >
            </div> -->
            <el-button
              class="coloBlue fontSize-14 margin-top butts"
              type="primary"
              plain
              round
              @click="doSve"
              >Send Message</el-button
            >
          </div>
        </div>
      </div>
    </div>
    <div class="mobile">
      <div class="mob_contactUs">
        <div class="mobCont">
          <div class="mob_froSs">
            <el-form
              ref="addForm"
              :model="form"
              label-position="top"
              :rules="formRules"
            >
              <el-form-item label="Name" prop="name">
                <el-input
                  v-model="form.name"
                  placeholder="Your full name and prefered prefix"
                ></el-input>
              </el-form-item>
              <el-form-item label="E-mail Address" prop="email">
                <el-input
                  v-model="form.email"
                  placeholder="Please enter your email address here"
                ></el-input>
              </el-form-item>
              <el-form-item label="Subject" prop="subject">
                <el-input
                  v-model="form.subject"
                  placeholder="Brief your issue in one sentence"
                ></el-input>
              </el-form-item>
              <el-form-item label="Message" prop="message">
                <el-input
                  type="textarea"
                  :rows="3"
                  v-model="form.message"
                  placeholder="Please describe your issue in detail"
                ></el-input>
              </el-form-item>
            </el-form>
            <!-- <div class="margin-bottom-lg fontSize-14">
              Contact email:<a class="coloBlue margin-left-xs"
                >admin@bitverse.io</a
              >
            </div> -->
            <div class="flex justify-between margin-top">
              <div class="coloBlue fontSize-14 mob_butts" @click="doSve">
                Send Message
              </div>
              <img
                class="mob_pivImg"
                src="../assets/mobile/img-contact-pic@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/index'
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
      isLoading: false,
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      formRules: {
        name: { ...obj },
        subject: { ...obj },
        message: { ...obj },
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
      if (this.isLoading) {
        return
      }
      this.$refs.addForm.validate((valid) => {
        if (valid) {
          this.isLoading = true
          api
            .$customerInformation({ ...this.form })
            .then((res) => {
              if (res.status == 'ok') {
                this.errSpringFrame('Successfully sent', 'Success')
                this.$refs.addForm.resetFields()
              } else {
                this.errSpringFrame(res.errorMsg, 'Error')
              }
              this.isLoading = false
            })
            .catch(() => {
              this.errSpringFrame('request timeout', 'Error')
              this.isLoading = false
            })
        }
      })
    },
  },
  created() {},
  mounted() {},
}
</script>
<style scoped>
@media screen and (max-width: 900px) {
  .mob_contactUs {
    padding-top: 120px;
    padding-bottom: 40px;
  }
  .mob_froSs {
    background-color: #074875;
    border-radius: 20px;
    position: relative;
    padding: 20px 20px 0px 20px;
  }
  .mob_butts {
    margin: 0px auto;
    width: 148px;
    height: 41px;
    text-align: center;
    line-height: 41px;
    border-radius: 20px;
    border: 1px solid #71b6f5;
    cursor: pointer;
    background-color: #074875;
  }
  .mob_pivImg {
    width: 50vw;
    position: relative;
    top: -50px;
  }
}
.contactUs {
  height: 100vh;
  width: 100%;
  background: url(../assets/contactUsS.png) no-repeat;
  background-size: cover;
}
.widSmall {
  padding-top: 150px;
}
.froSs {
  background-color: #074875;
  border-radius: 20px;
  width: 900px;
  position: relative;
  padding: 24px 280px 40px 40px;
  margin-left: 40px;
}
::v-deep .el-form-item__label {
  color: #ffffff;
  padding: 0px;
}
::v-deep .el-input__inner {
  background-color: #0f7cb9;
  border: 1px solid #0f7cb9;
  color: #ffffff;
}
::v-deep .el-textarea__inner {
  background-color: #0f7cb9;
  border: 1px solid #0f7cb9;
  color: #ffffff;
}
.butts {
  margin-left: 140px;
  display: inline-block;
  padding: 10px 25px;
  border-radius: 20px;
  border: 1px solid #71b6f5;
  cursor: pointer;
  background-color: #074875;
}
.PicImg {
  position: absolute;
  right: -180px;
  top: calc(50% - 190px);
  height: 380px;
}
</style>
