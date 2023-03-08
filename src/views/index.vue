<template>
  <div class="coloFFF backMo">
    <div class="pc">
      <div class="toCont">
        <img class="wid100" src="../assets/img-home-banner@3x.png" />
        <div class="coloFFF widSmall" style="padding-top: 300px">
          <div class="toBack"></div>
          <h2 class="fontSize-46 margin-bottom-xs">{{ obj.h1 }}</h2>
          <h2 class="fontSize-46 margin-bottom-xl">{{ obj.h2 }}</h2>
          <div>
            <p class="margin-bottom-xs fontSize-22 reguFamily">{{ obj.h3 }}</p>
            <p class="margin-bottom120 fontSize-22 reguFamily">{{ obj.h4 }}</p>
          </div>
        </div>
        <div class="flex align-center pocket">
          <div class="pointer positRe">
            <img
              @click="
                errSpringFrame(
                  'Invitation code：P212WA',
                  'Scan code to download APK',
                  '',
                  'pcMa'
                )
              "
              style="width: 200px"
              class="margin-left-xl"
              src="../assets/icon1.png"
            />
          </div>
          <div class="pointer positRe">
            <img
              style="width: 200px"
              @click="
                goLink(
                  'https://play.google.com/store/apps/details?id=bit.verse.shop&hl'
                )
              "
              src="../assets/icon2.png"
            />
          </div>
        </div>
      </div>
      <div class="coloFFF bitves">
        <div class="widCont">
          <img style="width: 100%" src="../assets/image-p1.png" />
        </div>
      </div>
      <div class="widSmall ales">
        <div class="flex justify-between">
          <div class="fontSize-18 lin-height-18 aleDiv">
            <div
              class="fontSize-70 margin-bottom-xs flex align-center justify-between"
            >
              {{ obj.tit2 }}
              <img style="height: 50px" src="../assets/ale1.png" />
            </div>
            <p class="margin-bottom-sm">{{ obj.tit2h1 }}</p>
            <p class="margin-bottom">{{ obj.tit2h2 }}</p>
            <div class="aunNit">
              <div
                class="flex align-center justify-center aunCont"
                @click.stop="goCli('aleo')"
              >
                {{ obj.more }}
              </div>
            </div>
          </div>
          <div class="fontSize-18 lin-height-18 aleDiv">
            <div
              class="fontSize-70 margin-bottom-xs flex align-center justify-between"
            >
              {{ obj.tit3 }}
              <img style="height: 50px" src="../assets/ale2.png" />
            </div>
            <p class="margin-bottom">{{ obj.tit3h1 }}</p>
            <div class="aunNit">
              <div
                class="flex align-center justify-center aunCont"
                @click.stop="goCli('sinso')"
              >
                {{ obj.more }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="margin: 100px 0px 160px 0px">
        <div
          class="flex justify-between align-center text-center widSmall chooseCont"
        >
          <img style="width: 240px" src="../assets/chose1.png" />
          <img style="width: 240px" src="../assets/chose2.png" />
          <img style="width: 240px" src="../assets/chose3.png" />
          <img style="width: 240px" src="../assets/chose4.png" />
        </div>
      </div>
      <div class="custo">
        <h2 class="fontSize-70 text-center margin-bottom120">
          {{ obj.custo.h1 }}
        </h2>
        <div class="flex align-center justify-center margin-bottom120">
          <img
            style="width: 400px"
            class="margin-right-xl"
            src="../assets/mor1.png"
          />
          <img
            class="margin-left-xl"
            style="width: 400px"
            src="../assets/mor2.png"
          />
        </div>
        <div
          class="flex align-center justify-center marlrAuto margin-bottom120 aunCont"
          style="width: 170px; height: 40px"
          @click.stop="goCli('aboutUs')"
        >
          {{ obj.custo.contactUs }}
        </div>
      </div>
      <div class="widSmall download">
        <p class="margin-bottom fontSize-24">{{ obj.bott1 }}</p>
        <div class="fontBlod flex align-center margin-bottom-lg">
          <img
            class="margin-right"
            style="width: 50px"
            src="../assets/iconRight.png"
          />
          <div style="font-size: 68px">{{ obj.bott2 }}</div>
        </div>
        <div class="flex align-center flex-reverse googs">
          <img
            @click="
              errSpringFrame(
                'Invitation code：P212WA',
                'Scan code to download APK',
                '',
                'pcMa'
              )
            "
            class="margin-left"
            src="../assets/img-scanning@2x.png"
          />
          <img
            class="pointer"
            @click="
              goLink(
                'https://play.google.com/store/apps/details?id=bit.verse.shop&hl'
              )
            "
            src="../assets/img-google@2x.png"
          />
        </div>
      </div>
    </div>
    <div class="mobile">
      <div class="mob_top">
        <img src="../assets/img-home-banner@3x.png" />
        <div class="mobCont topAs">
          <h3>{{ obj.h1 }}</h3>
          <h3 class="margin-bottom-sm">{{ obj.h2 }}</h3>
          <p class="fontSize-14">{{ obj.h3 }}</p>
          <p class="fontSize-14 margin-bottom-sm">{{ obj.h4 }}</p>
          <div class="flex align-center mob_googs">
            <img
              @click="
                errSpringFrame(
                  'Invitation code：P212WA',
                  'Scan code to download APK',
                  '',
                  'pcMa'
                )
              "
              class="margin-right"
              src="../assets/icon1.png"
            />
            <img
              @click="
                goLink(
                  'https://play.google.com/store/apps/details?id=bit.verse.shop&hl'
                )
              "
              src="../assets/icon2.png"
            />
          </div>
        </div>
      </div>
      <div class="mob_top">
        <img src="../assets/mobile/img-home-bg2@2x.png" />
        <div class="mobCont mob_bitv">
          <h3 class="mob_biaoT">{{ obj.tit1 }}</h3>
          <div class="text-center">
            <p class="fontSize-20 margin-bottom">{{ obj.fuTit1 }}</p>
            <p class="margin-bottom-sm">{{ obj.tit1p1 }}</p>
            <!-- <p class="margin-bottom">{{ obj.tit1p2 }}</p> -->
            <div
              class="flex justify-between text-left fontSize-14 margin-bottom-sm"
            >
              <div class="mob_positAbs">
                <img src="../assets/img-home-bg4@2x.png" />
                <p v-for="item in obj.tit1L1" :key="item">{{ item }}</p>
              </div>
              <div class="mob_positAbs">
                <img src="../assets/img-home-bg4@2x.png" />
                <p v-for="item in obj.tit1L2" :key="item">{{ item }}</p>
              </div>
            </div>
            <div
              class="flex justify-between text-left fontSize-14 margin-bottom-sm"
            >
              <div class="mob_positAbs">
                <img src="../assets/img-home-bg4@2x.png" />
                <p v-for="item in obj.tit1L3" :key="item">{{ item }}</p>
              </div>
              <div class="mob_positAbs">
                <img src="../assets/img-home-bg4@2x.png" />
                <p v-for="item in obj.tit1L4" :key="item">{{ item }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ales" style="padding-top: 20px; padding-bottom: 40px">
        <div class="mob_biaoT">{{ obj.tit2 }}</div>
        <div class="text-center mobCont">
          <img
            class="margin-bottom-xs"
            style="width: 50vw"
            src="../assets/img-home-aleo@2x.png"
          />
          <div class="fontSize-14">
            <h4 class="fontSize-20 margin-bottom-sm">{{ obj.tit2 }}</h4>
            <p class="margin-bottom-sm lin-height-14">
              {{ obj.tit2h1 }} {{ obj.tit2h2 }}
            </p>
            <div
              class="flex align-center justify-center marlrAuto aunCont"
              @click.stop="goCli('aleo')"
            >
              {{ obj.more }}
            </div>
          </div>
        </div>
      </div>
      <div class="padding-tb">
        <h2 class="mob_biaoT">{{ obj.tit3 }}</h2>
        <div class="fontSize-14 text-center mobCont">
          <img style="width: 50vw" src="../assets/img-home-sinso@2x.png" />
          <div class="fontSize-24 margin-tb">{{ obj.tit3 }}</div>
          <p class="margin-bottom-sm">{{ obj.tit3h1 }}</p>
          <div
            class="flex align-center justify-center marlrAuto aunCont"
            @click.stop="goCli('sinso')"
          >
            {{ obj.more }}
          </div>
        </div>
      </div>
      <img
        style="width: 90vw"
        class="imgBlock marlrAuto"
        src="../assets/img-home-bg7@2x.png"
      />
      <div class="mobCont padding-tb-xl">
        <h2 class="fontSize-24 text-center margin-bottom-lg">
          {{ obj.choose.h1 }}
        </h2>
        <div class="flex justify-around margin-bottom fontSize-14">
          <div>
            <img class="chooseMoImg" src="../assets/choose0.png" />
            <div class="margin-top-xs">
              <p v-for="item in obj.choose.list1" :key="item">
                {{ item }}
              </p>
            </div>
          </div>
          <div>
            <img class="chooseMoImg" src="../assets/choose1.png" />
            <div class="margin-top-xs">
              <p v-for="item in obj.choose.list2" :key="item">
                {{ item }}
              </p>
            </div>
          </div>
        </div>
        <div class="flex justify-around margin-bottom fontSize-14">
          <div>
            <img class="chooseMoImg" src="../assets/choose2.png" />
            <div class="margin-top-xs">
              <p v-for="item in obj.choose.list3" :key="item">
                {{ item }}
              </p>
            </div>
          </div>
          <div>
            <img class="chooseMoImg" src="../assets/choose3.png" />
            <div class="margin-top-xs">
              <p v-for="item in obj.choose.list4" :key="item">
                {{ item }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        style="width: 90vw"
        class="imgBlock marlrAuto"
        src="../assets/img-home-bg7@2x.png"
      />
      <div class="custo" style="padding-top: 40px">
        <h2 class="fontSize-24 text-center margin-bottom">
          {{ obj.custo.h1 }}
        </h2>
        <div class="flex align-center justify-between mobCont margin-bottom">
          <img style="width: 44vw" src="../assets/mor1.png" />
          <img style="width: 44vw" src="../assets/mor2.png" />
        </div>
        <div
          class="flex align-center justify-center marlrAuto aunCont"
          style="width: 200px"
          @click.stop="goCli('aboutUs')"
        >
          {{ obj.custo.contactUs }}
        </div>
      </div>
      <div class="mobCont download">
        <p class="margin-bottom">{{ obj.bott1 }}</p>
        <h2 class="fontSize-20 margin-bottom">{{ obj.bott2 }}</h2>
        <div class="flex align-center justify-center mob_googs">
          <img
            @click="
              errSpringFrame(
                'Invitation code：P212WA',
                'Scan code to download APK',
                '',
                'pcMa'
              )
            "
            class="margin-right"
            src="../assets/img-scanning@2x.png"
          />
          <img
            @click="
              goLink(
                'https://play.google.com/store/apps/details?id=bit.verse.shop&hl'
              )
            "
            src="../assets/img-google@2x.png"
          />
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
      obj: {
        h1: 'Pocketing Metaverse Assets',
        h2: 'with the Most Value-added Potential',
        h3: 'Right Now! Partake in early construction of Metaverse ',
        h4: 'infrastructure, to reap high-value rewards in the future!',
        tit1: 'Bitverse',
        fuTit1: 'About Bitverse',
        tit1p1:
          'Bitverse is an easy-to-use metaverse asset collection platform;',
        tit1p2:
          'A one-stop digital asset platform serving the Metaverse ecosystem.',
        tit1L1: ['Metaverse infrastructure', 'building and mining'],
        tit1L2: [
          'Participate in early metaverse',
          'NFT projects with high',
          'value-added potential',
        ],
        tit1L3: ['Get airdrops and incentives', 'from Metaverse projects'],
        tit1L4: [
          'Participate in the governance',
          'and construction of Metaverse',
          'projects',
        ],
        tit2: 'Aleo',
        tit2h1: `Based on zero-knowledge proof, Aleo Network is committed 
                  to building a blockchain network with both privacy capabilities 
                  and unlimited off-chain scalability.
                  `,
        tit2h2: `Aleo is the private version of ETH2.0, which is ETH2.0 + Zcash.
                 Aleo is the most significant investment target for hardware 
                 mining in 2022, and it is also one of the projects capable of 
                  undertaking a large number of miners after ETH2.0.`,
        tit3: 'Sinso',
        tit3h1: `SINSO can greatly improve the DAPPs-Filecoin interactive efficiency with ensured decentralization, which could significantly facilitate the eye-catching data presentation efficiency of GameFi and NFT. SINSO will build a data-oriented DAO architecture based on Filecoin Virtual Machine (FVM) so that data users can maximize the value of aggregated data.
                  `,
        more: 'More',
        choose: {
          h1: 'Why choose us?',
          list1: ['Professional R&D and', 'operation team'],
          list2: ['Safe and reliable', 'mining environment'],
          list3: ['Sound and transparent', 'growth system'],
          list4: ['Focus on early-stage', 'high-return projects'],
        },
        custo: {
          h1: 'More customers choose us',
          num1: '1000',
          text1: 'Users',
          num2: '2.7',
          text2: 'Asset Value',
          contactUs: 'About us',
        },
        bott1: 'What are you still hesitating about?',
        bott2: 'Download Bitverse now!',
        bott3: '2009-2020 aone.版权所有',
      },
    }
  },
  computed: {},
  methods: {
    goCli(name) {
      this.$router.push({ name })
    },
  },
  created() {},
  mounted() {},
}
</script>
<style scoped>
@media screen and (max-width: 900px) {
  .mob_top {
    position: relative;
    min-height: 300px;
  }
  .mob_top > img {
    width: 100vw;
  }
  .topAs {
    position: absolute;
    top: 90px;
    left: 2vw;
  }
  .mob_googs img {
    width: 40vw;
  }
  .mob_bitv {
    position: absolute;
    top: 0px;
    left: 2vw;
  }
  .mob_positAbs img {
    height: 40px;
  }
  .chooseMoImg {
    width: 60px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .mob_custCont {
    background: url(../assets/img-kuang@2x.png) no-repeat;
    background-size: cover;
    width: 175.5px;
    height: 97.5px;
    text-align: center;
  }
}
.toCont {
  position: relative;
  min-height: 700px;
}
.toBack {
  width: 70px;
  height: 2px;
  background-color: #ffffff;
  margin-bottom: 30px;
}
.toCont .widSmall {
  position: absolute;
  top: 0px;
  left: calc(50% - 600px);
}
.pocket {
  position: absolute;
  right: calc(50% - 600px);
  bottom: 80px;
  width: 1200px;
  display: flex;
  flex-direction: row-reverse;
}
.wid100 {
  width: 100%;
  position: relative;
  /* z-index: -1; */
}
.googs img {
  width: 200px;
}

.bitves {
  /* background: url(../assets/img-home-bg22.png) no-repeat; */
  background-size: cover;
  padding-bottom: 100px;
}
.fish {
  width: 1550px;
  height: 360px;
  background: url(../assets/img-homg-bg3@2x.png) no-repeat;
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  text-align: left;
}
.positAbs {
  position: absolute;
  background: url(../assets/img-home-bg4@2x.png) no-repeat;
  background-size: cover;
  width: 65px;
  height: 65px;
}
.qiu1 {
  left: 365px;
  top: 124px;
}
.qiu2 {
  left: 576px;
  top: 182px;
}
.qiu3 {
  width: 50px;
  height: 50px;
  right: 634px;
  top: 196px;
}
.qiu4 {
  width: 70px;
  height: 70px;
  right: 332px;
  top: 96px;
}
.qiu3 .contens {
  top: 70px;
}
.contens {
  position: absolute;
  width: 300px;
  top: 80px;
  left: -60px;
  font-size: 16px;
  line-height: 1.6;
}
.ales {
  /* background: url(../assets/img-home-bg5@2x.png) no-repeat;
  background-size: cover; */
  padding-bottom: 180px;
}
.aleImgDiv {
  width: 400px;
  text-align: right;
}
.aleImgDiv img {
  width: 300px;
}
.aleImg2 {
  height: 450px;
  margin: 0px 100px;
}
.aleDiv {
  width: 540px;
  height: 550px;
  color: #ffffff;
  background-color: #04163a;
  padding: 10px 40px 40px 40px;
  position: relative;
}
.aunNit {
  position: absolute;
  right: 40px;
  bottom: 40px;
}
.aunCont {
  display: flex;
  width: 100px;
  height: 36px;
  border: 1px solid #ffffff;
  border-radius: 40px;
  color: #ffffff;
  cursor: pointer;
}
.aunCont img {
  margin-left: 10px;
  width: 16px;
}
.sinso {
  background: url(../assets/img-home-bg8@2x.png) no-repeat;
  background-size: cover;
  width: 100%;
  padding-bottom: 150px;
}
.chooseCont {
  margin-bottom: 120px;
}
.chooseCont img {
  width: 130px;
}
.xianImg {
  display: block;
  margin: 0px auto 80px auto;
  width: 100%;
}
.custo {
  /* background: url(../assets/img-home-bg1@2x.png) no-repeat;
  background-size: cover; */
  width: 100%;
  padding-bottom: 50px;
}
.custCont {
  background: url(../assets/img-kuang@2x.png) no-repeat;
  background-size: cover;
  width: 400px;
  height: 223px;
  text-align: center;
}
.download {
  padding: 50px 0px;
  border-top: 1px solid #ffffff;
}
</style>
