import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { WOW } from 'wowjs'
import ElementUI from 'element-ui'
import vueClipboard from 'vue-clipboard2'
Vue.prototype.wow = WOW
import 'animate.css/animate.compat.css'
import 'element-ui/lib/theme-chalk/index.css'
import alert from './components/alert'
// mixins
import publicMixins from './mixins/public'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)
Vue.mixin(publicMixins)
Vue.use(vueClipboard)
Vue.use(ElementUI)
Vue.prototype.$alert = alert
Vue.config.productionTip = false
import './style/public.css'
import './plugins'

var vue = new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
export default vue
