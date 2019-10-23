import './components/drag-resize-forvue.css'

import DragResizeForvue from './components/drag-resize-forvue'

export function install (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('DragResizeForvue', DragResizeForvue)
}

const plugin = {
  install
}

let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

export default DragResizeForvue
