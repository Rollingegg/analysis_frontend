import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        copyright: `${new Date().getFullYear()} <a href="https://software.nju.edu.cn" target="_blank">NJUSE</a>`,
        currentSearchDate: '2020-04-01'
    },
    mutations: {
        set_currentSearchDate: (state, data) => {
            state.currentSearchDate = data
        }
    },
    actions: {},
    modules: {},
    getters
})
