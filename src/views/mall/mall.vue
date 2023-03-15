<!--
* 商城列表
* @author （cgt）
* @date 2020/7/30
-->
<template>
  <div class="bac">
    <div class="positRe widCont">
      <img class="banners" src="../../assets/img-banner.png" />
      <div class="contes">
        <div class="flex align-center tope">
          <img
            :src="item.icon"
            v-for="item in currency"
            :key="item.id"
            @click="handleClick(item.id)"
          />
        </div>
        <div class="content">
          <!-- <swiper class="swiper" :options="swiperOption">
          </swiper> -->
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide
              v-for="item in list"
              :key="item.id"
              :data-id="item.id"
            >
              <div class="text-center fontBlod margin-bottom fontSize-20">
                {{ item.name }}
              </div>
              <div class="margin-bottom-lg">{{ item.goodsDescribe }}</div>
              <div class="margin-bottom">Cycle {{ item.lifeCycle }}</div>
              <div class="margin-bottom">
                Calculation speed {{ item.specification }}
                {{ item.hashrateUnit }}
              </div>
              <div class="margin-bottom text-removeDel">
                {{ item.originalPrice }} USDT
              </div>
              <div class="margin-bottom fontSize-20">{{ item.price }} USDT</div>
            </swiper-slide>
          </swiper>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api";
import Swiper from "swiper";
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      id: "",
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 40,
        slidesPerGroup: 3,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      currency: [],
      list: [],
    };
  },
  computed: {},
  methods: {
    // 获取币种
    async getCurrency() {
      let result = await api.$getCurrency({ currencyType: 3 });
      if (result.errorCode == null) {
        this.currency = result.data;
        this.getList(result.data[0].id);
      }
    },

    //获取列表
    async getList(id) {
      let result = await api.$getList({
        pageNum: 1,
        pageSize: 10,
        currencyId: id,
        langId: 2,
      });
      this.list = result.data.content;
    },

    //点击币
    handleClick(id) {
      this.getList(id);
    },

    //去详情页面
    goDetail(id) {
      this.$router.push({ name: "mallDetail", query: { id } });
    },
  },

  mounted() {
    let that = this;

    this.getCurrency();

    this.$nextTick(() => {
      new Swiper(".swiper", {
        preventClicksPropagation: false,
        loop: false,
        on: {
          click: function (e) {
            let id = e.target.dataset.id;
            that.goDetail(id);
          },
        },
      });
    });
  },
};
</script>
<style scoped lang="scss">
.bac {
  background-color: #0a0f1e;
  min-height: 100vh;
  padding-top: 80px;
  color: #ffffff;
  position: relative;
  .banners {
    width: 1400px;
    z-index: -1;
  }

  .contes {
    position: relative;
    top: -200px;

    .tope {
      height: 70px;
      background-color: #3b4051;
      border-radius: 20px;
      margin-bottom: 20px;
      padding-left: 10px;
      img {
        height: 44px;
        padding: 10px;
        margin-right: 10px;
        cursor: pointer;
      }
    }
    .content {
      background-color: #3b4051;
      border-radius: 20px;
      padding: 30px 80px;
      position: relative;
    }
    .swiper-slide {
      border-radius: 14px;
      background-color: #626674;
      padding: 30px 20px;
      // width: 400px;
    }
  }
}
</style>
