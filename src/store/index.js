import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        copyright: `${new Date().getFullYear()} <a href="https://software.nju.edu.cn" target="_blank">NJUSE</a>`
    },
    mutations: {},
    actions: {},
    modules: {
    }
})
