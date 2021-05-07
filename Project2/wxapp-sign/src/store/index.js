import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import Vue from 'vue'
// 引入子模块
import pay from './modules/pay'


Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        pay
    },
    state: {},
    getters: {}, 
    mutations: {},
    actions: {},
    plugins: [createLogger()]
})

export default store;