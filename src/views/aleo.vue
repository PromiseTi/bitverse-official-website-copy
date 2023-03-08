<!--
* ----
* @author （cgt）
* @date 2020/7/30
-->
<template>
  <div class="coloFFF backMo">
    <div class="pc">
      <div class="positRe aleTop">
        <img class="wid100" src="../assets/img-aleo-bg1@2x.png" />
        <div class="topAbs">
          <h2 class="biaoT" style="margin-top: 0px">
            {{ obj.title }}
            <p>{{ obj.title }}</p>
          </h2>
          <div class="text-center lin-height-2 fontSize-20">
            <p>{{ obj.p1 }}</p>
            <p>{{ obj.p2 }}</p>
            <p>{{ obj.p3 }}</p>
            <p>{{ obj.p4 }}</p>
            <p>{{ obj.p5 }}</p>
          </div>
        </div>
      </div>
      <div class="widSmall aleoCont">
        <div class="fontSize-32 text-center margin-bottom">
          {{ obj.cont.title }}
        </div>
        <div
          class="flex margin-bottom-xl"
          v-for="(item, index) in obj.cont.liss"
          :key="index"
        >
          <img class="picImg" :src="item.c" />
          <div class="padding-top-xs">
            <p class="lin-height-18 fontSize-22">{{ item.a }}</p>
            <p class="lind"></p>
            <p class="fontSize-18">{{ item.b }}</p>
          </div>
        </div>
      </div>
      <div class="widSmall margin-bottom90">
        <div class="fontSize-32 text-center margin-bottom">
          {{ obj.raod.title }}
        </div>
        <div class="marlrAuto flex align-center justify-center quans">
          <div class="lineed">
            <div class="linCs linCs1">
              <p class="margin-right-sm"></p>
              <div>{{ obj.raod.p1 }}</div>
            </div>
            <div class="linCs linCs2">
              <div>{{ obj.raod.p1 }}</div>
              <p class="margin-left-sm"></p>
            </div>
            <div class="linCs linCs3">
              <p class="margin-right-sm"></p>
              <div>{{ obj.raod.p3 }}</div>
            </div>
            <div class="linCs linCs4">
              <div>{{ obj.raod.p4 }}</div>
              <p class="margin-left-sm"></p>
            </div>
          </div>
        </div>
      </div>
      <div class="margin-bottom90">
        <div class="fontSize-32 text-center margin-bottom90">
          {{ obj.proj.title }}
        </div>
        <div class="marlrAuto flex flex-direction justify-center pros">
          <p class="margin-bottom">{{ obj.proj.h1 }}</p>
          <p>{{ obj.proj.h2 }}</p>
        </div>
      </div>
      <div class="margin-bottom90">
        <div class="fontSize-32 text-center margin-bottom-xl">
          {{ obj.rol.title }}
        </div>
        <div class="widSmall rolCont">
          <p>{{ obj.rol.t1 }}</p>
          <p class="coloBls fontSize-14">{{ obj.rol.p1 }}</p>
          <p class="coloBls fontSize-14">{{ obj.rol.p2 }}</p>
          <p class="margin-top">{{ obj.rol.tt1 }}</p>
          <p class="coloBls fontSize-14">{{ obj.rol.pp1 }}</p>
          <p class="margin-top">{{ obj.rol.h1 }}</p>
          <el-table
            stripe
            :data="obj.rol.list"
            :header-cell-style="{ background: '#284b6f', color: '#ffffff' }"
            :row-class-name="tableRowClassName"
          >
            <el-table-column
              width="300px"
              prop="a1"
              label="CM-DCAM-01(100PPS)"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="a2"
              label="3 months after mainnet launch "
              align="center"
            ></el-table-column>
            <el-table-column
              prop="a3"
              label="3-6 months after mainnet launch "
              align="center"
            ></el-table-column>
            <el-table-column
              prop="a4"
              label="6-9 months after mainnet launch"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="a5"
              label="9-12 months after mainnet launch"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="a6"
              label="1 year after mainnet launch total"
              align="center"
            ></el-table-column>
          </el-table>
        </div>
      </div>
      <div class="text-center foots">
        <div class="fontSize-32 text-center margin-bottom-xl">
          {{ obj.foot1 }}
        </div>
        <p class="fontSize-14 coloBls">
          {{ obj.foot2 }}
        </p>
        <img
          class="pointer aleobg4"
          @click.stop="goLink(obj.foot2)"
          src="../assets/img-aleo-bg4@2x.png"
        />
      </div>
    </div>
    <div class="mobile">
      <div class="mob_aleTop">
        <h2 class="mob_biaoT" style="margin: 0px">
          {{ obj.title }}
          <p>{{ obj.title }}</p>
        </h2>
        <div class="text-center lin-height-18 fontSize-14 mobCont">
          <p>{{ obj.p1 }}{{ obj.p2 }}{{ obj.p3 }}{{ obj.p4 }}{{ obj.p5 }}</p>
        </div>
      </div>
      <div class="margin-tb-xl mobCont">
        <h2 class="fontSize-24 text-center margin-bottom">
          {{ obj.cont.title }}
        </h2>
        <div
          class="flex margin-bottom-xl"
          v-for="(item, index) in obj.cont.liss"
          :key="index"
        >
          <img
            class="flex0 margin-right-xs"
            style="width: 100px"
            :src="item.c"
          />
          <div class="padding-top-xs">
            <p class="lin-height-18">{{ item.a }}</p>
            <p class="lind"></p>
            <p>{{ item.b }}</p>
          </div>
        </div>
      </div>
      <div class="margin-tb">
        <h2 class="fontSize-24 text-center margin-bottom">
          {{ obj.raod.title }}
        </h2>
        <img
          style="width: 100%"
          src="../assets/mobile/img-aleo-road map@2x.png"
        />
      </div>

      <div class="margin-tb-xl mobCont">
        <h2 class="fontSize-24 text-center margin-bottom-xl">
          {{ obj.proj.title }}
        </h2>
        <div class="marlrAuto flex flex-direction justify-center mob_pros">
          <p class="margin-bottom-xs">{{ obj.proj.h1 }}</p>
          <p>{{ obj.proj.h2 }}</p>
        </div>
      </div>

      <div class="margin-tb-xl mobCont">
        <h2 class="fontSize-24 text-center margin-bottom">
          {{ obj.rol.title }}
        </h2>
        <div class="mob_rolCont">
          <p>{{ obj.rol.t1 }}</p>
          <p class="coloBls fontSize-14">{{ obj.rol.p1 }}</p>
          <p class="coloBls fontSize-14">{{ obj.rol.p2 }}</p>
          <p class="margin-top">{{ obj.rol.tt1 }}</p>
          <p class="coloBls fontSize-14">{{ obj.rol.pp1 }}</p>
          <p class="margin-top">{{ obj.rol.h1 }}</p>
        </div>
        <img src="../assets/mobile/img-biaoge@2x.png" style="width: 100%" />
      </div>

      <div class="padding-bottom positRe overHidd mobCont">
        <h2 class="fontSize-24 text-center margin-bottom">
          {{ obj.foot1 }}
        </h2>
        <p class="fontSize-14 coloBls">
          {{ obj.foot2 }}
        </p>
        <img
          @click="goLink(obj.foot2)"
          class="mob_aleobg4"
          src="../assets/img-aleo-bg4@2x.png"
        />
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
        title: 'Aleo',
        p1: 'Based on zero-knowledge proof, Aleo Network is committed to building a blockchain network with both privacy ',
        p2: 'capabilities and unlimited off-chain scalability.',
        p3: 'Aleo is the private version of ETH2.0, which is ETH2.0 + Zcash.',
        p4: 'Aleo is the most significant investment target for hardware mining in 2022, and it is also one of the projects ',
        p5: 'capable of undertaking a large number of miners after ETH2.0.',
        cont: {
          title: 'Strengths of Aleo',
          liss: [
            {
              a: 'Performance',
              b: `Using zero-knowledge cryptography, Aleo moves smart contract execution off-chain to enable a variety of 
decentralized applications that is completely private and scalable to thousands of transactions per second.`,
              c: require('../assets/img-aleo-pic1@2x.png'),
            },
            {
              a: 'Scalability',
              b: `Built on an open public blockchain, Aleo brings all the flexibility of Ethereum with a better scalability 
architecture, where miners don't need to rerun every transaction, just verifying its correctness would do.`,
              c: require('../assets/img-aleo-pic2@2x.png'),
            },
            {
              a: 'Programmability',
              b: `Aleo provides a full-stack solution for zero knowledge, making ZK programmable at every level of the 
application stack for practical use, enabling decentralized private computing at scale.`,
              c: require('../assets/img-aleo-pic3@2x.png'),
            },
            {
              a: 'Ease of use',
              b: `The Aleo platform provides end-to-end tools to support the development, deployment, and sustainability of 
privacy-preserving applications.`,
              c: require('../assets/img-aleo-pic4@2x.png'),
            },
            {
              a: 'Security',
              b: `Based on zero-knowledge cryptography, Aleo builds secure, compliant, and fair web standards, providing 
users with the option of "Optional Rollout Privacy", effectively mitigating the impact of data breaches.`,
              c: require('../assets/img-aleo-pic5@2x.png'),
            },
            {
              a: 'Privacy',
              b: `Aleo can solve information leakage caused by transaction transparency in cryptocurrency exchanges, such as 
transfer addresses, amounts, the source, and the destination of assets while proving the ownership of an asset.`,
              c: require('../assets/img-aleo-pic6@2x.png'),
            },
            {
              a: 'Economic Model',
              b: `Aleo has a stable token economy with predictable prices, providing the perfect foundation for enabling 
next-generation computing based on zero-knowledge cryptography.
`,
              c: require('../assets/img-aleo-pic7@2x.png'),
            },
          ],
        },
        raod: {
          title: 'Road Map',
          p1: '2022 Series B financing of $200 million',
          p2: '2021 Series A financing of $28 million',
          p3: 'The company was established in 2019',
          p4: 'The Aleo project was conceived in 2016',
        },
        proj: {
          title: 'Project Timeline',
          h1: 'It is expected to be launched in October-December 2022',
          h2: 'Testnet3 will be launched in September;',
        },
        rol: {
          title: 'ROI Analysis',
          t1: 'Assuming that after the mainnet goes online, the computing power level of the entire network',
          p1: ' * The computing power level of the entire network is 10 times the highest level of Testnet 2, that is, 500,000 PPS;',
          p2: ' *  The computing power level of the entire network increased by 50% in the first three months, and continued to increase at 10% every year.',
          tt1: 'The current valuation of Aleo is $1.5 billion, single Aleo at $1.5, And the public offering has not been opened. After the mainnet is launched, the Token price must start to rise for a period of time.',
          pp1: ' *  The estimated price of the listing is $20-$200',
          h1: 'In this case, the number of blocks in the one year after mainnet launch and the annual revenue forecast are as follows',
          list: [
            {
              a1: 'Token Amount  （Aleo)',
              a2: '4472',
              a3: '2808',
              a4: '2045',
              a5: '1490',
              a6: '10815/Aleo',
            },
            {
              a1: 'Token Price (USD)',
              a2: '20$',
              a3: '20$',
              a4: '25$',
              a5: '25$',
              a6: '10815/Aleo',
            },
            {
              a1: 'Revenue (USD)',
              a2: '89440$',
              a3: '56160$',
              a4: '51125$',
              a5: '37250$',
              a6: '233975$',
            },
          ],
        },
        foot1: 'Media Coverage',
        foot2:
          'https://hackernoon.com/announcement-the-zprize-competition-for-zero-knowledge-cryptography-by-aleo',
      },
    }
  },
  computed: {},
  methods: {
    tableRowClassName() {
      return 'success-row'
    },
  },
  created() {},
  mounted() {},
}
</script>
<style scoped>
@media screen and (max-width: 900px) {
  .mob_aleTop {
    width: 100vw;
    height: 84.5vw;
    background: url(../assets/mobile/img-aleo-bg1@2x.png) no-repeat;
    background-size: cover;
    margin-top: 76px;
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
  .mob_rolCont p {
    margin-bottom: 8px;
  }
  .mob_aleobg4 {
    width: 96vw;
    position: absolute;
    left: calc(50% - 43vw);
    bottom: 0px;
  }
}

.aleTop {
  margin-top: 120px;
}
.aleTop > img {
  position: absolute;
  width: 100%;
}
.topAbs {
  position: relative;
}
.aleoCont {
  margin-top: 120px;
  position: relative;
}
.picImg {
  width: 100px;
  margin-right: 60px;
}
.lind {
  width: 60px;
  height: 2px;
  background-color: #5491e4;
  margin-bottom: 14px;
}
.quans {
  background: url(../assets/img-aleo-bg2@2x.png) no-repeat;
  background-size: cover;
  width: 1200px;
  height: 475px;
}
.lineed {
  position: relative;
  width: 3px;
  height: 300px;
  background-color: #78b4f9;
}
.linCs {
  position: absolute;
  width: 300px;
  display: flex;
}
.linCs p {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #a5d0ff;
  flex-shrink: 0;
}
.linCs1 {
  left: -5px;
  top: 30px;
}
.linCs2 {
  right: -5px;
  top: 100px;
}
.linCs3 {
  left: -5px;
  top: 170px;
}
.linCs4 {
  right: -5px;
  top: 250px;
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
  background-color: rgba(255, 255, 255, 0.1);
}
.rolCont p {
  margin-bottom: 14px;
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
</style>
