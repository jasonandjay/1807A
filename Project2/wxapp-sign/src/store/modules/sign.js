import {getSignList, getSignDetail} from "@/services/index";

const state = {
    signList: [],
    signDetail:{},
    page: 1,
    pageSize: 10,
    status: -1, //不传表示全部，-1表示未开始，0表示已打卡，1表示已放弃
}
const getters = {}
const mutations = {
    // payload = {key: '', value: ''}
    updateState(state, payload){
       state[payload.key] = payload.value
    }
}
const actions = {
    async getSignList({state, commit}) {
        let {page, pageSize, status} = state;
        let params = {page, pageSize};
        if([-1, 0, 1].includes(status)){
            params.status = status;
        }
        let result = await getSignList(params);
        let signList = result.data.map(item=>{
            return {...item, address: JSON.parse(item.address)}
        })
        if (page === 1){
            commit('updateState', {key: 'signList', value: signList})
        }else{
            commit('updateState', {key: 'signList', value: [...state.signList, ...signList]})
        }
    },
    async getSignDetail({dispatch, commit, state}, payload){
        let result = await getSignDetail(payload);
        if (result.data){
            commit('updateState', {key: 'signDetail', value: result.data})
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}