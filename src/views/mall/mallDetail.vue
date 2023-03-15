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
          <div class="first">Product Type</div>
          <div class="last">{{ detail.currencyName }}</div>
        </div>
        <div class="flex cells">
          <div class="first">Life Cycle</div>
          <div class="last">{{ detail.lifeCycle }} Days</div>
        </div>
        <div class="flex cells">
          <div class="first">Compute Speed</div>
          <div class="last">
            {{ detail.specification }} {{ detail.hashrateUnit }}
          </div>
        </div>
        <div class="flex cells">
          <div class="first">Techniacl Fee</div>
          <div class="last">{{ detail.beforeServiceFee * 100 }}%</div>
        </div>
        <div class="flex cells">
          <div class="first">Include pledge coins</div>
          <div class="last">
            {{ detail.mortgageAmount }} {{ detail.currencyName }}
          </div>
        </div>
        <div class="flex cells">
          <div class="rights">Release income</div>
          <div>T+1</div>
        </div>
      </div>
      <div class="flex-sub flex flex-direction justify-between">
        <h2 class="margin-bottom-sm">{{ detail.name }}</h2>
        <div class="margin-bottom-sm">{{ detail.goodsDescribe }}</div>
        <div class="margin-bottom-sm flex align-center fontSize-14">
          <p class="margin-right">支付方式:</p>

          <img style="width: 20px" src="../../assets/img-usdt.png" />
          <a class="margin-left-xs">USDT</a>
        </div>
        <div class="margin-bottom-sm flex align-center">
          <div class="fontSize-20">{{ detail.price }} USDT</div>
          <div class="margin-left-sm text-removeDel fontSize-14">
            {{ detail.originalPrice }} USDT
          </div>
        </div>
        <div class="flex align-center margin-bottom-sm agreeOn">
          <img
            v-if="isChoise"
            class="choseImg"
            src="../../assets/img-xuanzhong.png"
            @click="isChoise = !isChoise"
          />

          <img
            v-else
            class="choseImg"
            @click="isChoise = !isChoise"
            src="../../assets/img-weixuan.png"
          />

          <div
            class="fontSize-14"
            v-for="(item, index) in detail.goodsAgreementDetailList"
            :key="index"
          >
            《 {{ item.agreementName }} 》
          </div>
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
      <div class="fontSize-20 margin-bottom">Pay Explain</div>
      <div class="margin-bottom" v-html="`${detail.goodsDetail}`"></div>
    </div>
    <el-dialog
      :close-on-click-modal="false"
      :visible.sync="isShow"
      center
      width="600px"
      class="coloFFF"
    >
      <div class="margin-bottom-sm margin-top fontBlod fontSize-20">
        {{ detail.name }}
      </div>
      <div class="margin-bottom-sm flex justify-between">
        <div>Price</div>
        <div>{{ detail.price }} USDT</div>
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
        <div>{{ detail.price * num }} USDT</div>
      </div>
      <span slot="footer" class="dialog-footer trans">
        <el-button style="width: 200px" @click="doSave">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import api from "@/api";

export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      id: "",
      isShow: false,
      isChoise: false,
      agreement: "",
      num: 1,
      detail: {},
    };
  },
  computed: {},
  methods: {
    handleChange(value) {
      console.log(value);
    },
    doSave() {
      this.confirmOrder();
    },

    // 获取详情
    async getDetail() {
      let { id } = this;
      let langId = 2;
      let result = await api.$getDetail({ id, langId });
      if (result.errorCode == null) {
        this.detail = result.data;
      }
    },

    // 获取优惠券列表
    async getCouponList() {
      //todo 优惠券问题
      // let params = {
      //   state: 1, //状态        1未使用 2已使用 3已过期
      //   // type: 2, //优惠券类型   1矿机 2云算力 3电费
      //   //currencyId: this.id,
      //   langId: 2,
      // };
      // let result = await api.$getCouponList(params);
      // console.log(result.data);
    },

    //确认订单
    async confirmOrder() {
      let params = {
        goodsId: this.id,
        goodsNum: this.num,
        goodsType: 2,
        langId: 2,
      };
      let result = await api.$confirmOrder(params);
      console.log(result.data);

      this.createOrderPayment(result.data);
    },

    async createOrderPayment(data) {
      let params = {
        goodsId: data.goodsId,
        goodsNum: data.goodsNum,
        price: data.price,
        amount: data.amount,
        goodsName: data.goodsName,
        payState: 1, //支付类型：1线上支付 2线下支付【必须】",
        goodsType: 2, //订单类型 1矿机 2云算力 3电费【必须】",
        currencyName: data.currencyName,
        currencyId: data.currencyId,
      };
      let result = await api.$createOrderPayment(params);
      if (result.errorCode == null) {
        this.$router.push({
          name: "pay",
          query: { order: JSON.stringify(result.data) },
        });
      } else {
        this.$message({
          message: result.errorMsg,
          type: "warning",
        });
      }
    },
  },

  created() {
    this.id = this.$route.query.id;
  },
  mounted() {
    this.getDetail();
    this.getCouponList();
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
