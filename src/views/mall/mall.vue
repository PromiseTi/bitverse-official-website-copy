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
          <img src="../../assets/to1.png" />
          <img src="../../assets/to2.png" />
          <img src="../../assets/to3.png" />
        </div>
        <div class="content">
          <!-- <swiper class="swiper" :options="swiperOption">
          </swiper> -->
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="(item, index) in 5" :key="index">
              <div class="text-center fontBlod margin-bottom fontSize-20">
                SINSO节点
              </div>
              <div class="margin-bottom-lg">无技术服务费，免托管</div>
              <div class="margin-bottom">Cycle 365day</div>
              <div class="margin-bottom">Calculation speed 1N</div>
              <div class="margin-bottom text-removeDel">850.00 USDT</div>
              <div class="margin-bottom fontSize-20">850.00 USDT</div>
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
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 40,
        slidesPerGroup: 3,

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {},
}
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
