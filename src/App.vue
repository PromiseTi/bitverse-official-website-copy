<template>
  <div id="app">
    <div class="content" @scroll="handleScroll" ref="content">
      <TopBar :colos="colos" v-if="$route.name != 'protocol'" />
      <router-view />
    </div>
  </div>
</template>
<script>
import TopBar from './components/topBar'
export default {
  components: { TopBar },
  data() {
    return {
      colos: '0',
    }
  },
  watch: {
    $route() {
      this.$refs.content.scrollTop = 0
    },
  },
  methods: {
    handleScroll(e) {
      let top = e.srcElement.scrollTop || e.target.scrollTop
      let colos = (top / 300).toFixed(1)
      colos >= 1 ? (this.colos = '1') : (this.colos = colos)
    },
  },
}
</script>

<style>
html,
body {
  height: 100%;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
#app .content {
  flex: 1;
  overflow: auto;
}
</style>
