import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import {IDetialInfo} from '@/utils/interface'
import {getInfoAndList} from '@/services'


export interface DetailModelState {
    info: IDetialInfo
}

export interface DetailModelType {
    namespace: 'detail';
    state: DetailModelState;
    effects: {
        getInfoAndList: Effect;
    };
    reducers: {
        save: Reducer<DetailModelState>;
    };
}

const DetailModel: DetailModelType = {
    //  命名空间
    namespace: 'detail',

    // 当前模块的状态
    state: {
        info: {} as IDetialInfo
    },

    // 异步action(ajax, setTimeout, Promise)
    effects: {
        *getInfoAndList({payload}, {call, put}){
            let result = yield call(getInfoAndList, payload.SerialID);
            if (result.code === 1){
                yield put({
                    type: 'save',
                    payload: {
                        info: result.data
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
    }
};

export default DetailModel;