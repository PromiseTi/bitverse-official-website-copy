import Vue from 'vue'
import Alert from './alret.vue'
let AlertConstructor = Vue.extend(Alert)

let AlertModal = (o) => {
  let alertDom = new AlertConstructor({
    el: document.createElement('div'),
  })
  document.body.appendChild(alertDom.$el)
  alertDom.title = o.title || 'Error'
  alertDom.content = o.content || 'Request error'
  alertDom.doSave = o.doSave || 'Close'
  alertDom.routeName = o.routeName || ''
  alertDom.isAlret = o.isAlret || false
  alertDom.pcMa = o.pcMa || ''
}
export default AlertModal
