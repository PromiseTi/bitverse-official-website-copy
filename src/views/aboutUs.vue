<!--
* ----
* @author （cgt）
* @date 2020/7/30
-->
<template>
  <div class="coloFFF backMo">
    <div class="pc">
      <div class="abouts">
        <div class="text-center fontSize-30 margin-bottom-xl lin-height-18">
          <div class="inlineBlock">
            <div class="positRe">
              The future is already happening
              <p class="linees"></p>
            </div>
            <p>its just not popular yet.</p>
          </div>
        </div>
        <div class="text-center margin-bottom90">
          <img style="width: 1200px" src="../assets/aboutUs/aboutBanner.png" />
        </div>
        <div class="widSmall padding-lr-xl">
          <div class="margin-bottom120 flex justify-between">
            <div class="founWid">
              <div class="fontSize-30 margin-bottom-sm">Origin of Bitverse</div>
              <img style="width: 100%" src="../assets/aboutUs/txt1.png" />
            </div>
            <img style="height: 400px" src="../assets/aboutUs/imgLins.png" />
            <div class="founWid" style="margin-top: 150px">
              <div class="fontSize-30 margin-bottom-sm">What is Bitverse?</div>
              <img style="width: 100%" src="../assets/aboutUs/txt2.png" />
            </div>
          </div>
          <div class="margin-bottom120 flex justify-between">
            <img style="width: 450px" src="../assets/aboutUs/ph1.png" />
            <img style="width: 420px" src="../assets/aboutUs/ph2.png" />
          </div>
          <div class="margin-bottom120">
            <img style="width: 100%" src="../assets/aboutUs/bigAb.png" />
          </div>
          <div class="margin-bottom120 frms">
            <el-form
              ref="addForm"
              :model="form"
              label-position="left"
              :rules="formRules"
              label-width="200px"
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
            <div class="text-center">
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

          <!-- <div class="text-center margin-bottom-sm">
            <img
              @click="goLink('https://twitter.com/sinsonetwork')"
              class="pointer margin-right-sm"
              style="width: 30px"
              src="../assets/aboutUs/icon1.png"
            />
            <img
              @click="goLink('https://t.me/sinsonetwork')"
              class="pointer"
              style="width: 30px"
              src="../assets/aboutUs/icon2.png"
            />
          </div> -->
        </div>
      </div>
    </div>
    <div class="mobile">
      <div
        class="text-center padding-bottom-xl lin-height-18"
        style="padding-top: 120px"
      >
        <div class="inlineBlock fontSize-18">
          <div class="positRe">
            The future is already happening
            <p class="linees"></p>
          </div>
          <p>its just not popular yet.</p>
        </div>
      </div>
      <img
        style="width: 95vw"
        class="margin-bottom"
        src="../assets/aboutUs/aboutBanner.png"
      />
      <div class="mobCont">
        <div class="text-center">
          <div class="fontSize-18 margin-bottom-sm">Origin of Bitverse</div>
          <img
            class="margin-bottom"
            style="width: 80vw"
            src="../assets/aboutUs/txt1.png"
          />

          <div class="fontSize-18 margin-bottom-sm">What is Bitverse?</div>
          <img
            class="margn-bottom-xl"
            style="width: 80vw"
            src="../assets/aboutUs/txt2.png"
          />
          <img
            class="margin-bottom-sm"
            style="width: 80vw"
            src="../assets/aboutUs/ph1.png"
          />
          <img
            class="margin-bottom-xl"
            style="width: 80vw"
            src="../assets/aboutUs/ph2.png"
          />
          <div class="margin-bottom-xl">
            <!-- <div class="fontBlod fontSize-32 text-center margin-bottom-xl">
              Advantages
            </div> -->
            <img style="width: 100%" src="../assets/aboutUs/bigAb.png" />
          </div>

          <div class="mobCont">
            <div class="mob_froSs">
              <el-form
                ref="addForm"
                :model="form"
                label-position="left"
                :rules="formRules"
                label-width="100px"
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
              <div class="text-center margin-bottom">
                <el-button
                  class="coloBlue fontSize-14 margin-top butts"
                  type="primary"
                  plain
                  round
                  @click="doSve"
                  >Send Message</el-button
                >
              </div>
              <div class="text-center padding-tb-sm">
                <img
                  @click="goLink('https://twitter.com/sinsonetwork')"
                  class="pointer margin-right-sm"
                  style="width: 30px"
                  src="../assets/aboutUs/icon1.png"
                />
                <img
                  @click="goLink('https://t.me/sinsonetwork')"
                  class="pointer"
                  style="width: 30px"
                  src="../assets/aboutUs/icon2.png"
                />
                <img
                  @click="goLink('https://sinsonetwork.medium.com/')"
                  class="pointer"
                  style="width: 30px"
                  src="../assets/aboutUs/icon3.png"
                />
              </div>
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
}
.abouts {
  margin-top: 200px;
}
.linees {
  width: 20px;
  height: 2px;
  position: absolute;
  background-color: #ffffff;
  left: -30px;
  top: calc(50% - 1px);
}
.founWid {
  width: 450px;
}
.frms {
  padding: 40px 60px;
  border-radius: 15px;
  border: 1px solid #ffffff;
}

::v-deep .el-form-item__label {
  color: #ffffff;
}
.butts {
  padding: 10px 30px;
  border-radius: 20px;
  border: 1px solid #ffffff;
  cursor: pointer;
  background-color: transparent;
  color: #ffffff;
}
::v-deep .el-input__inner {
  border: 1px solid #ffffff;
  color: #ffffff;
  background-color: transparent;
}
::v-deep .el-textarea__inner {
  border: 1px solid #ffffff;
  color: #ffffff;
  background-color: transparent;
}
</style>
