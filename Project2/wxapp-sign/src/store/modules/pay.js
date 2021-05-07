import {pay} from "@/services/index";

const state = {
    payInfo: {}
}
const getters = {}
const mutations = {
    updateState(state, payload){
        state.payInfo = payload;
    }
}
const actions = {
    async getPayInfo({commit}, payload){
        let result = await pay(payload);
        // debugger;
        // commit('pay2/updateState', result.data, {root: true});
        commit('updateState', result.data);

        // this.payInfo = result.data;
        // let {timeStamp, nonceStr, paySign} = result.data;
        // console.log('result...', result);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}