<!--
* ----
* @author （cgt）
* @date 2020/7/30
-->
<template>
  <div>
    <div class="coloFFF backMo">
      <div class="pc">
        <div class="text-center topAbs">
          <h2 class="biaoT">
            {{ obj.title }}
            <p>{{ obj.title }}</p>
          </h2>

          <div class="lin-height-2 fontSize-20 bigPhos">
            <p class="margin-bottom90 fontSize-20">
              {{ obj.p }}
            </p>
            <div class="fontSize-30 margin-bottom">{{ obj.cont }}</div>
            <p>{{ obj.cont1 }}</p>
            <p>{{ obj.cont2 }}</p>
            <p>{{ obj.cont3 }}</p>
            <p>{{ obj.cont4 }}</p>
            <img src="../assets/img-sinso-bg1@2x.png" />
          </div>
        </div>
        <div class="margin-bottom90 positRe">
          <img class="flotsImg" src="../assets/img-sinso-bg2.png" />
          <div class="fontSize-32 text-center margin-bottom-xl">
            {{ obj.consis.title }}
          </div>
          <div class="widSmall">
            <div
              class="flex align-center margin-bottom-xl"
              v-for="(item, index) in obj.consis.ob"
              :key="index"
            >
              <div class="flex align-center fontBlod padding-left-xs conLefs">
                <p>{{ item.a }}</p>
              </div>
              <div class="fontSize-18 lineBor">{{ item.b }}</div>
            </div>
          </div>
        </div>
        <div class="widSmall margin-bottom90 backse">
          <p class="fontSize-32 text-center margin-bottom">
            {{ obj.back.title }}
          </p>
          <div class="seAb1">
            <p class="flex align-center textPs">
              <i></i>{{ obj.back.ob[0].a }}
            </p>
            <div>{{ obj.back.ob[0].b }}</div>
          </div>
          <div class="seAb2">
            <p class="flex align-center textPs">
              <i></i>{{ obj.back.ob[1].a }}
            </p>
            <div>{{ obj.back.ob[1].b }}</div>
          </div>
          <div class="seAb3">
            <p class="flex align-center textPs">
              <i></i>{{ obj.back.ob[2].a }}
            </p>
            <div>{{ obj.back.ob[2].b }}</div>
          </div>
          <div class="seAb4">
            <p class="flex align-center textPs">
              <i></i>{{ obj.back.ob[3].a }}
            </p>
            <div>{{ obj.back.ob[3].b }}</div>
          </div>
        </div>
        <div class="widSmall margin-bottom90">
          <div class="fontSize-32 text-center margin-bottom-xl">
            {{ obj.map.title }}
          </div>
          <div class="linrs"></div>
          <div class="flex justify-between padding-lr pcLus">
            <div
              v-for="(item, index) in obj.map.ob"
              :key="index"
              class="tabCont"
              :class="item.h1 == '2022 Q3' && 'coloBls'"
            >
              <i class="bigQuns"></i>
              <h2 class="margin-bottom">{{ item.h1 }}</h2>
              <div
                v-for="itemm in item.a"
                :key="itemm"
                class="fontSize-16 flex positRe"
              >
                <i class="quanis"></i>
                {{ itemm }}
              </div>
              <p class="margin-tb-sm"></p>
              <div v-for="itemm in item.b" :key="itemm" class="fontSize-14">
                {{ itemm }}
              </div>
            </div>
          </div>
        </div>
        <div class="margin-bottom90">
          <div class="fontSize-32 text-center margin-bottom-xl">
            {{ obj.proj.title }}
          </div>
          <div class="marlrAuto flex flex-direction justify-center pros">
            <p class="margin-bottom-xs">{{ obj.proj.h1 }}</p>
          </div>
        </div>
        <div class="text-center foots">
          <div class="fontSize-32 text-center margin-bottom-xl">
            {{ obj.foot1 }}
          </div>
          <p class="fontSize-14 coloBls">{{ obj.foot2 }}</p>
          <img
            class="pointer aleobg4"
            @click.stop="goLink(obj.foot2)"
            src="../assets/img-aleo-bg4@2x.png"
          />
        </div>
      </div>
      <div class="mobile">
        <div class="text-center mobCont mob_topAbs">
          <h2 class="mob_biaoT">
            {{ obj.title }}
            <p>{{ obj.title }}</p>
          </h2>
          <p class="margin-bottom">{{ obj.p }}</p>
          <h2 class="fontSize-24 text-center margin-bottom padding-lr">
            {{ obj.cont }}
          </h2>
          <div class="lin-height-2 mob_bigPhos">
            <p>{{ obj.cont1 }}{{ obj.cont2 }}{{ obj.cont3 }}{{ obj.cont4 }}</p>

            <img src="../assets/img-sinso-bg1@2x.png" />
          </div>
        </div>
        <div class="margin-tb mobCont">
          <h2 class="fontSize-24 text-center margin-bottom padding-lr">
            {{ obj.consis.title }}
          </h2>
          <div
            class="flex align-center margin-bottom-xl"
            v-for="(item, index) in obj.consis.ob"
            :key="index"
          >
            <div class="flex align-center justify-center mob_conLefs">
              <p>{{ item.a }}</p>
            </div>
            <div class="fontSize-12 lineBor">{{ item.b }}</div>
          </div>
        </div>

        <div class="margin-bottom mob_backse">
          <h2 class="fontSize-24 text-center margin-bottom-xs">
            {{ obj.back.title }}
          </h2>
          <div class="padding-top mobCont">
            <div class="flex justify-between margin-bottom">
              <div class="mob_bacse">
                <p class="flex align-center"><i></i>{{ obj.back.ob[0].a }}</p>
                <div>{{ obj.back.ob[0].b }}</div>
              </div>
              <div class="mob_bacse">
                <p class="flex align-center"><i></i>{{ obj.back.ob[1].a }}</p>
                <div>{{ obj.back.ob[1].b }}</div>
              </div>
            </div>
            <div class="flex justify-between">
              <div class="mob_bacse">
                <p class="flex align-center"><i></i>{{ obj.back.ob[2].a }}</p>
                <div>{{ obj.back.ob[2].b }}</div>
              </div>
              <div class="mob_bacse">
                <p class="flex align-center"><i></i>{{ obj.back.ob[3].a }}</p>
                <div>{{ obj.back.ob[3].b }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="margin-tb">
          <h2 class="fontSize-24 text-center margin-bottom-xl">
            {{ obj.map.title }}
          </h2>
          <div class="mobCont">
            <!-- <div class="mob_penetration"></div> -->
            <swiper class="swiper" :options="mobswiperOption2">
              <swiper-slide v-for="(item, index) in obj.map.ob" :key="index">
                <div class="mob_Quas">
                  <i></i>
                </div>
                <div
                  class="taasCont"
                  :class="item.h1 == '2022 Q3' && 'coloBls'"
                >
                  <h2 class="margin-bottom-sm">{{ item.h1 }}</h2>
                  <div
                    v-for="itemm in item.a"
                    :key="itemm"
                    class="fontSize-14 flex align-center"
                  >
                    <i class="margin-right-xs mob_quanis"></i>
                    <a>{{ itemm }}</a>
                  </div>
                  <p class="margin-tb-xs"></p>
                  <div v-for="itemm in item.b" :key="itemm" class="fontSize-14">
                    {{ itemm }}
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="margin-tb mobCont">
          <h2 class="fontSize-24 text-center margin-bottom">
            {{ obj.proj.title }}
          </h2>
          <div class="marlrAuto flex flex-direction justify-center mob_pros">
            <p class="margin-bottom-xs">{{ obj.proj.h1 }}</p>
          </div>
        </div>
        <div class="padding-bottom positRe overHidd mobCont">
          <h2 class="fontSize-24 text-center margin-bottom">
            {{ obj.foot1 }}
          </h2>
          <p class="fontSize-14 coloBls">{{ obj.foot2 }}</p>
          <img
            @click="goLink(obj.foot2)"
            class="mob_aleobg4"
            src="../assets/img-aleo-bg4@2x.png"
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
      tabsIndex: 4,
      mobswiperOption2: {
        initialSlide: 0,
        slidesPerView: 2,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swipe-next2',
          prevEl: '.swipe-prev2',
        },
      },
      obj: {
        title: 'Sinso',
        p: 'SINSO is a web3.0 infrastructure that provides decentralized data caching and data governance services.',
        cont: 'Strengths of SINSO',
        cont1:
          'SINSO can greatly improve the DAPPs-Filecoin interactive efficiency with ensured decentralizati on, which could ',
        cont2:
          'significantly facilitate the eye-catching data presentation efficiency of GameFi and NFT. SINSO will build a ',
        cont3:
          'data-oriented DAO architecture based on Filecoin Virtual Machine (FVM) so that data users can maximize the ',
        cont4: 'value of aggregated data.',
        consis: {
          title: 'SINSO consists of five related components',
          ob: [
            {
              a: 'SINSO Getway',
              b: 'Secondary distributed cache network, the infrastructure of the data governance system',
            },
            {
              a: 'SINSO DataLand',
              b: 'Tools for managing datasets for individuals',
            },
            {
              a: 'SINSO Donors Network',
              b: 'The economic incentive model component for data governance',
            },
            {
              a: 'SINSO DAPP Cube',
              b: 'A collection of middleware for DAPP',
            },
            {
              a: 'SINSO DAC',
              b: 'SINSO DAC is the technical framework of SINSO community autonomy and the technical basic framework of data DAO',
            },
          ],
        },
        back: {
          title: 'Background',
          ob: [
            {
              a: '2021.04',
              b: 'Top 11 in the 1st Filecoin Frontier Accelerator with a grant.',
            },
            {
              a: '2021.06',
              b: 'Received investment led by Protocol labs and followed by many European capitals.',
            },
            {
              a: '2021.09 ',
              b: 'Chia Hackathon Global Top 3, Asia.',
            },
            {
              a: '2021.10',
              b: 'Wanxiang Hackathon Community Choice Award',
            },
          ],
        },
        map: {
          title: 'Road Map',
          ob: [
            {
              h1: '2022 Q2',
              a: ['SINSO Getway v3.0', 'SINSO Dataland v1.0'],
              b: [
                'CID-based retrieval of hot data resource browser',
                'NFT Folders',
              ],
            },
            {
              h1: '2022 Q3',
              a: [
                'SINSO DAC v1.0',
                'Donors Network v2.0',
                'SINSO Dataland v2.0',
              ],
              b: ['Data-Oriented DAC Governance Framework'],
            },
            {
              h1: '2022 Q4',
              a: [
                'SINSO DAC v3.0',
                'SINSO Getway Extended v5.0',
                'Donors Network v3.0',
                'SINSO DAPP Cube v2.0',
                'Hot Data Mainnet Mining Online (22.11)',
              ],
              b: [],
            },
            {
              h1: '2023 Q1',
              a: ['Donors Network v4.0', 'SINSO Dataland v3.0'],
              b: [],
            },
            {
              h1: '2023 Q2',
              a: ['SINSO Getway v3.0', 'Donors Network v5.0'],
              b: [],
            },
            {
              h1: '2023 Q3',
              a: [
                'Donors Network v6.0',
                'SINSO DAPP Cube v3.0',
                'SINSO Dataland v4.0',
                'SINSO DAC v2.0',
                'SINSO Mining Software v3.0',
              ],
              b: [],
            },
          ],
        },
        proj: {
          title: 'Project Timeline',
          h1: 'The Mainnet is expected to be launched in November 2022',
        },
        foot1: 'Media Coverage',
        foot2:
          'https://www.einnews.com/pr_news/540673411/the-value-of-sinso-that-let-nft-technology-to-be-applied-in-medical-industry',
      },
    }
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {},
}
</script>
<style scoped>
@media screen and (max-width: 900px) {
  .mob_topAbs {
    margin-top: 76px;
  }
  .mob_bigPhos {
    position: relative;
    z-index: 10;
    margin-bottom: 40px;
  }
  .mob_bigPhos img {
    position: absolute;
    width: 100vw;
    right: -2vw;
    top: -100px;
    z-index: -1;
  }
  .mob_conLefs {
    position: relative;
    margin-right: 10px;
    background: url(../assets/img-sinso-bg3@2x.png) no-repeat;
    background-size: cover;
    width: 117px;
    height: 50px;
    font-size: 12px;
  }
  .mob_backse {
    background: url(../assets/img-sinso-bg4@2x.png) no-repeat;
    background-size: cover;
    width: 100vw;
    height: 90vw;
    position: relative;
  }
  .mob_backse > div i {
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #9ccfff;
    margin-right: 10px;
  }
  .mob_bacse {
    margin-top: 10px;
    width: 40vw;
  }
  .mob_pros {
    background: url(../assets/mobile/img-aleo-bg3@2x.png) no-repeat;
    background-size: cover;
    position: relative;
    width: 96vw;
    height: 54.6vw;
    padding-left: 40vw;
  }
  .mob_pros p {
    width: 40vw;
    position: relative;
    z-index: 10;
    font-weight: bold;
    /* border-bottom: 42px solid #7fa5c7; */
  }
  .mob_pros p:after {
    content: '';
    position: absolute;
    left: 0px;
    bottom: 2px;
    width: 40vw;
    height: 8px;
    background-color: rgba(255, 255, 255, 0.2);
  }
  .mob_aleobg4 {
    width: 96vw;
    position: absolute;
    left: calc(50% - 43vw);
    bottom: 0px;
  }
  .mob_quanis {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #58a2f8;
  }
  .taasCont {
    width: 40vw;
    margin-left: auto;
    margin-right: auto;
  }
  .mob_Quas {
    width: 100%;
    height: 2px;
    background-color: #5c91cc;
    margin: 20px 0px;
    position: relative;
  }
  .mob_Quas i {
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #58a2f8;
    top: -6px;
    left: calc(50% - 7px);
  }
  .mob_penetration {
    position: absolute;
    width: 1000vw;
    height: 2px;
    left: 0px;
    top: 20px;
    background-color: #5c91cc;
  }
}
.topAbs {
  margin-top: 120px;
}
.bigPhos {
  position: relative;
  z-index: 10;
  margin-bottom: 150px;
}
.bigPhos img {
  position: absolute;
  width: 80vw;
  right: -100px;
  top: -400px;
  z-index: -1;
}
.conLefs {
  position: relative;
  margin-right: 30px;
  background: url(../assets/img-sinso-bg3@2x.png) no-repeat;
  background-size: cover;
  width: 234px;
  height: 100px;
  font-size: 18px;
}
.lineBor {
  flex: 1;
  line-height: 2;
  border-bottom: 1px solid #346395;
}
.backse {
  background: url(../assets/img-sinso-bg4@2x.png) no-repeat;
  background-size: cover;
  height: 600px;
  position: relative;
}
.backse > div {
  position: absolute;
  font-size: 16px;
}
.backse > div i {
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #9ccfff;
  margin-right: 10px;
}
.textPs {
  font-size: 18px;
  font-weight: bold;
}
.backse > div > div {
  margin-top: 10px;
  width: 300px;
  margin-left: 16px;
}
.seAb1 {
  left: 80px;
  top: 150px;
}
.seAb2 {
  left: 200px;
  bottom: 160px;
}
.seAb3 {
  right: 300px;
  top: 150px;
}
.seAb4 {
  right: 200px;
  bottom: 180px;
}
.linrs {
  background-color: #5c91cc;
  height: 3px;
  margin-bottom: 40px;
  border-radius: 40px;
}
.tabCont {
  width: 150px;
  line-height: 1.8;
  position: relative;
}
.quanis {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  left: -20px;
  background-color: #58a2f8;
  top: calc(50% - 2px);
}
.bigQuns {
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #58a2f8;
  top: -50px;
  left: 40px;
}
.pros {
  background: url(../assets/img-aleo-bg3@2x.png) no-repeat;
  background-size: cover;
  position: relative;
  width: 900px;
  height: 412px;
  font-size: 26px;
  padding-left: 380px;
  padding-bottom: 44px;
}
.pros p {
  width: 450px;
  position: relative;
  z-index: 10;
  /* border-bottom: 42px solid #7fa5c7; */
}
.pros p:after {
  content: '';
  position: absolute;
  left: 0px;
  bottom: 2px;
  width: 400px;
  height: 14px;
  background-color: rgba(255, 255, 255, 0.2);
}
.aleobg4 {
  width: 1200px;
  position: absolute;
  left: calc(50% - 600px);
  bottom: 0px;
}
.foots {
  position: relative;
  padding-bottom: 80px;
}
.flotsImg {
  position: absolute;
  width: 140px;
  left: 0px;
  top: -20px;
}
</style>
