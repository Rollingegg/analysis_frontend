import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AntD from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import request from '@/utils/request'

Vue.config.productionTip = false
Vue.use(AntD)

Vue.prototype.$post = request.post
Vue.prototype.$get = request.get
Vue.prototype.$postJson = request.postJson

Vue.directive('title', {
    inserted: function (el, binding) {
        document.title = el.dataset.title
    }
})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
