<!--
* ----
* @author （cgt）
* @date 2020/7/30
-->
<template>
  <div>
    <el-dialog title="" center :visible.sync="isAlret" width="400px">
      <div slot="title" class="backTop" :class="title == 'Error' && 'coloRed'">
        {{ title }}
      </div>
      <div class="text-center" v-if="pcMa">
        <img class="erImg" src="../../assets/erweima1.png" />
      </div>

      <div class="padding-sm fontSize-14 text-center">
        <p>{{ content }}</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button
          style="width: 320px"
          type="primary"
          class="disBlock marlrAuto"
          @click="goClose"
          >{{ doSave }}</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
// https://www.jb51.net/article/195339.htm
// https://www.cnblogs.com/yangguoe/p/10643729.html
import context from '@/main.js'
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      isAlret: false,
      title: '',
      content: '',
      doSave: '',
      routeName: '',
      pcMa: '',
    }
  },
  watch: {
    isAlret() {
      if (!this.isAlret) {
        delete window.alertIsShow
      }
    },
  },
  computed: {},
  methods: {
    goClose() {
      this.isAlret = false
      let name = this.routeName
      if (name) {
        context.$router.push({ name })
      }
    },
  },
  created() {},
  mounted() {},
}
</script>
<style scoped>
@media screen and (max-width: 900px) {
  ::v-deep .el-dialog {
    width: 90vw !important;
  }
}
.erImg {
  width: 200px;
}
.backTop {
  background: url(../../assets/img-zhanghu-bg.png) no-repeat;
  height: 80px;
  text-align: center;
  line-height: 80px;
  font-weight: bold;
}
.inIeWid {
  width: 100px;
  display: inline-block;
}
.coloRed {
  color: red;
}
</style>
