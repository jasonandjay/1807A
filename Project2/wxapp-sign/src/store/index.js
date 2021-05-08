import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import Vue from 'vue'
// 引入子模块
import pay from './modules/pay'
import sign from './modules/sign'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        pay,
        sign
    },
    state: {},
    getters: {}, 
    mutations: {},
    actions: {},
    plugins: process.env.NODE_ENV !== 'production'?[createLogger()]:[]
})

export default store;