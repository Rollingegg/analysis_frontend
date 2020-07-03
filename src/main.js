import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AntD from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import request from '@/utils/request'
import echarts from 'echarts'
import 'echarts/map/js/china.js' // 引入中国地图数据

// eslint-disable-next-line no-unused-vars
// import mock from './mock' // 引入假数据

Vue.use(AntD)
Vue.config.productionTip = false

Vue.prototype.$echarts = echarts
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
