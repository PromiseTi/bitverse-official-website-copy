<!--
* 商品详情
* @author （cgt）
* @date 2020/7/30
-->
<template>
  <div class="bac">
    <div class="flex justify-cetner widCont">
      <div class="tabs">
        <div class="flex cells">
          <div class="first">产品类型</div>
          <div class="last">SINSO</div>
        </div>
        <div class="flex cells">
          <div class="first">使用周期</div>
          <div class="last">SINSO</div>
        </div>
        <div class="flex cells">
          <div class="first">算力</div>
          <div class="last">SINSO</div>
        </div>
        <div class="flex cells">
          <div class="first">技术服务费</div>
          <div class="last">SINSO</div>
        </div>
        <div class="flex cells">
          <div class="first">包含质押币</div>
          <div class="last">SINSO</div>
        </div>
        <div class="flex cells">
          <div class="rights">收益发放</div>
          <div>SINSO</div>
        </div>
      </div>
      <div class="flex-sub flex flex-direction justify-between">
        <h2 class="margin-bottom-sm">SINSO节点</h2>
        <div class="margin-bottom-sm">无技术服务费，免托管</div>
        <div class="margin-bottom-sm flex align-center fontSize-14">
          <p class="margin-right">支付方式:</p>

          <img style="width: 20px" src="../../assets/img-usdt.png" />
          <a class="margin-left-xs">USDT</a>
        </div>
        <div class="margin-bottom-sm flex align-center">
          <div class="fontSize-20">850.00 USDT</div>
          <div class="margin-left-sm text-removeDel fontSize-14">
            850.00 USDT
          </div>
        </div>
        <div class="flex align-center margin-bottom-sm agreeOn">
          <img
            v-if="isChoise"
            class="choseImg"
            src="../../assets/img-xuanzhong.png"
          />
          <img v-else class="choseImg" src="../../assets/img-weixuan.png" />
          <div class="fontSize-14">{{ text }}</div>
        </div>
        <div class="flex align-center trans">
          <el-input-number
            v-model="num"
            @change="handleChange"
            :min="1"
            :max="10"
          ></el-input-number>
          <el-button class="purchase" v-waves @click="isShow = true"
            >购买</el-button
          >
        </div>
      </div>
    </div>
    <div class="widCont">
      <div class="lines"></div>
      <div class="fontSize-20 margin-bottom">购买须知</div>
      <div class="margin-bottom">1购买须知</div>
      <div class="margin-bottom">2购买须知</div>
    </div>
    <el-dialog
      :close-on-click-modal="false"
      :visible.sync="isShow"
      center
      width="600px"
      class="coloFFF"
    >
      <div class="margin-bottom-sm margin-top fontBlod fontSize-20">
        SINSO节点
      </div>
      <div class="margin-bottom-sm flex justify-between">
        <div>Price</div>
        <div>800.00USDT</div>
      </div>
      <div class="margin-bottom-sm flex justify-between">
        <div>Amount</div>
        <el-input-number
          class="trans"
          v-model="num"
          @change="handleChange"
          :min="1"
          :max="10"
        ></el-input-number>
      </div>
      <div class="margin-bottom-sm flex justify-between">
        <div>Coupon</div>
        <div>无可用优惠券 <i class="el-icon-arrow-down"></i></div>
      </div>
      <div class="margin-bottom-sm flex justify-between">
        <div>Total</div>
        <div>800.00USDT</div>
      </div>
      <span slot="footer" class="dialog-footer trans">
        <el-button style="width: 200px" @click="doSave">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      isShow: true,
      isChoise: false,
      text: '<<sinso 云算力购买协议>>',
      num: 1,
    }
  },
  computed: {},
  methods: {
    handleChange(value) {
      console.log(value)
    },
    doSave() {
      this.$router.push({ name: 'pay' })
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
  .tabs {
    border-radius: 10px;
    background-color: #3b3f4b;
    margin-right: 80px;
    .cells {
      > div {
        width: 300px;
        height: 60px;
        text-align: center;
        line-height: 60px;
      }
      .first {
        border-right: 1px solid #7b7b7b;
        border-bottom: 1px solid #7b7b7b;
      }
      .last {
        border-bottom: 1px solid #7b7b7b;
      }
      .rights {
        border-right: 1px solid #7b7b7b;
      }
    }
  }
  .agreeOn {
    width: 100%;
    background-color: #282c39;
    height: 50px;
    .choseImg {
      height: 24px;
      padding: 6px;
      cursor: pointer;
      margin: 0px 6px;
    }
  }
  .purchase {
    width: 150px;
    margin-left: 20px;
    height: 40px;
    padding: 0px;
  }
  .lines {
    height: 1px;
    background-color: #ffffff;
    margin: 50px 0px;
  }
  ::v-deep .el-dialog {
    background: #525562;

    .el-dialog__body {
      color: #ffffff;
    }
  }
}
</style>
