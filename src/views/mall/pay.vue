<!--
* 支付
* @author （cgt）
* @date 2020/7/30
-->
<template>
  <div class="bac">
    <div class="widCont">
      <div class="fonyBlod fontSize-20 margin-bottom-sm">
        Order Number：326594645646
      </div>
      <div class="tabs">
        <div class="flex cells">
          <div class="first">Name</div>
          <div class="first">Price</div>
          <div class="first">Amount</div>
          <div class="first">Coupon</div>
          <div class="last">Total</div>
        </div>
        <div class="flex cells">
          <div class="rights">sinso节点</div>
          <div class="rights">800.00USDT</div>
          <div class="rights">1</div>
          <div class="rights">无</div>
          <div>800.00USDT</div>
        </div>
      </div>
      <div class="lines"></div>
      <div class="fontSize-18 fontBlod">Pay USDT</div>
      <div class="conct">
        <img src="../../assets/img-contact-pic@2x.png" />
      </div>
      <div class="flex align-center margin-bottom">
        <div>Total</div>
        <div>trc20</div>
      </div>
      <div class="flex align-center margin-bottom">
        <div>Payment Address</div>
        <div>0xf7c3c07c32daea74f07b7d7bc84cc269242473ca</div>
      </div>
      <div class="lines"></div>
      <div class="margin-bottom fontSize-20">Payment instructions</div>
      <div class="padding-bottom-xl">
        <div>1.Payment instructions</div>
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
    .cells {
      > div {
        width: 20%;
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
  .lines {
    height: 1px;
    background-color: #ffffff;
    margin: 60px 0px;
  }
  .conct {
    width: 200px;
    height: 200px;
    border: 1px solid #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 80px auto;
    img {
      width: 130px;
      height: 130px;
    }
  }
}
</style>
