<!--
* ----
* @author （cgt）
* @date 2020/7/30
-->
<template>
  <div class="padding-xs">
    <div class="fontSize-20 margin-bottom-xs">{{ obj.agreementName }}</div>
    <div v-html="obj.content"></div>
  </div>
</template>

<script>
import api from '@/api/index'
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      obj: {},
    }
  },
  computed: {},
  methods: {
    init() {
      api.$getUserAgreementList({ langId: 2 }).then((res) => {
        this.obj = res.data[0] || {}
      })
    },
  },
  created() {
    this.init()
  },
  mounted() {},
}
</script>
<style scoped></style>
