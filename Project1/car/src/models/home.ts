import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import {IBrandItem, IMakeItem} from '@/utils/interface'
import {getBrandList, getMakeList} from '@/services'

export interface IndexModelState {
    name: string;
    brandList: IBrandItem [];
    makeList: IMakeItem [];
    letterList: string [];
}

export interface IndexModelType {
    namespace: 'home';
    state: IndexModelState;
    effects: {
        getMasterBrand: Effect;
        getMakeList: Effect;
    };
    reducers: {
        save: Reducer<IndexModelState>;
        // 启用 immer 之后
        // save: ImmerReducer<IndexModelState>;
    };
    subscriptions: { setup: Subscription };
}

const IndexModel: IndexModelType = {
    //  命名空间
    namespace: 'home',

    // 当前模块的状态
    state: {
        name: '1807A',
        brandList: [],
        makeList: [],
        letterList: []
    },

    // 异步action(ajax, setTimeout, Promise)
    effects: {
        *getMasterBrand({payload}, {call, put}){
            let result = yield call(getBrandList);
            if (result.code === 1){
                // 获取品牌字母列表
                let letterList: string[] = [];
                let arr = result.data.map((item:IBrandItem)=>{
                    return item.Spelling[0]
                });
                letterList = [...new Set(arr)] as string[];
                // 处理品牌列表
                let brandList:{[key:string]: IBrandItem[]}[] = [];
                result.data.forEach((item:IBrandItem) => {
                    let letter = item.Spelling[0];
                    let index = brandList.findIndex((value)=>Object.keys(value)[0]===letter);
                    if (index === -1){
                        brandList.push({
                            [letter]: [item]
                        })
                    }else{
                        brandList[index][letter].push(item);
                    }
                });
                yield put({
                    type: 'save',
                    payload: {
                        brandList,
                        letterList
                    }
                })
            }
        },
        *getMakeList({payload}, {call, put}){
            let result = yield call(getMakeList, payload.MasterID);
            if (result.code === 1){
                yield put({
                    type: 'save',
                    payload: {
                        makeList: result.data
                    }
                })
            }
        }
    },
    // 同步改变
    reducers: {
        save(state, action) {
            return {
                ...state,
                ...action.payload,
            };
        }
    },
    // 导航守卫功能
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname }) => {
                if (pathname === '/') {
                    dispatch({
                        type: 'query',
                    })
                }
            });
        }
    }
};

export default IndexModel;