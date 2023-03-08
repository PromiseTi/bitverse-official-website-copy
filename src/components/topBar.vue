<!--
* ----
* @author （cgt）
* @date 2020/7/30
-->
<template>
  <div class="coloFFF">
    <div class="pc">
      <div
        class="coloFFF topBar"
        :style="{
          backgroundColor:
            'rgba(' + 10 + ',' + 15 + ',' + 30 + ',' + colos + ')',
        }"
      >
        <div class="flex align-center justify-between widSmall">
          <img
            @click="goHome('index')"
            class="pointer logo"
            src="../assets/logo.png"
          />
          <div class="flex align-center">
            <img
              v-for="item in arrs"
              :key="item.img"
              @click="goLink(item.href)"
              style="height: 24px"
              class="pointer margin-left-sm"
              :src="item.img"
            />
            <div
              @click="goHome(item.name)"
              v-for="(item, index) in list"
              :key="index"
              class="rigWid"
            >
              <div :class="item.name == $route.name && 'borff'">
                {{ item.a }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- :class="$route.name != 'index' && 'backMo'" -->
    <div class="mobile">
      <div
        class="mob_Head"
        :style="{
          backgroundColor:
            'rgba(' + 10 + ',' + 15 + ',' + 30 + ',' + colos + ')',
        }"
      >
        <img
          @click="goHome('index')"
          style="width: 32px"
          src="../assets/logo.png"
        />
        <img
          @click.stop="isFlag = true"
          style="width: 30px"
          src="../assets/mobile/gengduo.png"
        />
        <div class="moblie-nav-wrap" :class="isFlag && 'showAp'">
          <div class="modal-layer-1 modal-layer-closed"></div>
          <div class="modal-layer-2">
            <img
              @click.stop="isFlag = false"
              src="../assets/mobile/close.png"
            />
          </div>
          <div class="modal-layer-3">
            <ul>
              <li
                v-for="(item, index) in list"
                :key="index"
                @click="goHome(item.name)"
                :class="item.name == $route.name && 'coloBlue'"
              >
                {{ item.a }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    // eslint-disable-next-line vue/require-prop-type-constructor
    colos: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isFlag: false,
      arrs: [
        {
          href: 'https://twitter.com/Bitversepro',
          img: require('../assets/aboutUs/icon1.png'),
        },
        {
          href: 'https://t.me/bitverse_com',
          img: require('../assets/aboutUs/icon2.png'),
        },
        {
          href: 'https://medium.com/@Bitversepro',
          img: require('../assets/aboutUs/icon3.png'),
        },
      ],
      list: [
        { a: 'Home', name: 'index' },
        { a: 'About us', name: 'aboutUs' },
        { a: 'Download', name: 'Download' },
      ],
    }
  },
  computed: {},
  watch: {
    $route() {
      this.isFlag = false
    },
  },
  methods: {
    goHome(item) {
      let { name } = this.$route
      if (item == 'Download') {
        // this.goLink(
        //   `https://static.bitverse.shop/static/package/2ef41a92983a4647a0b727ed58fcaf90.apk`,
        //   '_self'
        // )
        this.errSpringFrame(
          'Invitation code：P212WA',
          'Scan code to download APK',
          '',
          'pcMa'
        )
        return
      }
      if (name != item) {
        this.$router.push({ name: item })
      }
    },
  },
  created() {},
  mounted() {},
}
</script>
<style scoped>
@media screen and (max-width: 900px) {
  .mob_Head {
    padding: 0px 10px;
    width: 100vw;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
  }
  .moblie-nav-wrap {
    width: 0vw;
    height: 0%;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 0px;
    height: 0px;
    overflow: hidden;
    z-index: 10000;
  }
  .showAp {
    width: 100vw;
    height: 100%;
  }
  .modal-layer-1 {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #0b0d19;
    opacity: 0;
    left: 0px;
    top: 0px;
    z-index: 1;
  }
  .showAp .modal-layer-1 {
    opacity: 0.8;
  }
  .showAp .modal-layer-2 {
    opacity: 1;
  }
  .showAp .modal-layer-3 {
    left: 0;
  }
  .modal-layer-2 {
    position: absolute;
    width: 20%;
    right: 0px;
    top: 40px;
    z-index: 100;
    text-align: center;
    opacity: 0;
  }
  .modal-layer-2 img {
    display: block;
    height: 50px;
    padding: 10px;
    margin: 0 auto;
  }
  .modal-layer-3 {
    position: absolute;
    width: 80%;
    left: 0px;
    top: 0px;
    background: #0b0d19;
    height: 100%;
    z-index: 100;
    left: -80%;
    transition: all 0.8s;
  }
  .modal-layer-3 ul {
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 100px;
  }
  .modal-layer-3 ul li {
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
}
.topBar {
  position: fixed;
  left: 0;
  top: 0;
  width: calc(100vw - 6px);
  height: 76px;
  z-index: 10000;
}
.topBar > div {
  height: 100%;
}
.logo {
  height: 46px;
}
.rigWid {
  width: 140px;
  text-align: center;
  cursor: pointer;
  height: 76px;
  line-height: 76px;
}
.rigWid > div {
  display: inline-block;
  height: 50px;
}
.borff {
  border-bottom: 1px solid #ffffff;
}
</style>
