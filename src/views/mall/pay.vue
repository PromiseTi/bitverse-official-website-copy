<!--
* 支付
* @author （cgt）
* @date 2020/7/30
-->
<template>
  <div class="bac">
    <div class="widCont">
      <div class="fonyBlod fontSize-20 margin-bottom-sm">
        Order Number：{{goods.id}}
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
          <div class="rights">{{ goods.goodsName }}</div>
          <div class="rights">{{ goods.price }} USDT</div>
          <div class="rights">{{ goods.amount }}</div>
          <div class="rights">{{ goods.discountAmount }}</div>
          <div>{{ goods.actualAmount }} USDT</div>
        </div>
      </div>
      <div class="lines"></div>
      <div class="fontSize-18 fontBlod">Pay USDT</div>
      <div class="conct">
        <img src="../../assets/img-contact-pic@2x.png" />
      </div>
      <div class="flex align-center margin-bottom">
        <div>Total</div>
        <div style="margin-left: 161px">trc20</div>
      </div>
      <div class="flex align-center margin-bottom">
        <div>Payment Address</div>
        <div style="margin-left: 65px">{{ goods.receiveAddress }}</div>
      </div>
      <div class="lines"></div>
      <div class="margin-bottom fontSize-20">Payment instructions</div>
      <div class="padding-bottom-xl">
        <p style="color: #999ba5; font-size: 13; margin: 0">
          1.Please do not pay any
          <span style="color: #ff0000"> non-TRC20-USDT</span> assets to the
          above address, otherwise it will not be retrieved.<br />
          2.It will take about
          <span style="color: #ff0000">1-10 minutes</span> for the entire
          network node to confirm the payment at the above address. Please wait
          patiently after payment.<br />
          3.<span style="color: #ff0000"
            >When paying, please make a one-time payment according to the actual
            amount paid above!</span
          ><br />
          <span style="color: #ff0000"
            >Note: Actual payment amount = total amount-red envelope
            amount.</span
          ><br />
          4.<span style="color: #ff0000"
            >If the payment amount is incorrect or is not a one-time payment,
            the order will not be confirmed and all losses will be borne by
            you.</span
          ><br />
          5.The order needs to be paid within<span style="color: #ff0000">
            30 minutes</span
          >. After completing the payment, you can check whether the payment is
          successful or not on the order page.
        </p>

        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: ["order"],
  data() {
    return {
      isShow: true,
      isChoise: false,
      text: "<<sinso 云算力购买协议>>",
      num: 1,
      goods: {},
    };
  },
  computed: {},
  methods: {
    handleChange(value) {
      console.log(value);
    },
    doSave() {
      this.$router.push({ name: "pay" });
    },
  },
  created() {},
  mounted() {
    this.goods = JSON.parse(this.order);
  },
};
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
