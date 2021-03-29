import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import { IDetialInfo, IListCarItem, ICarItem, IYearListCarItem } from '@/utils/interface'
import { getInfoAndList } from '@/services'


export interface DetailModelState {
    info: IDetialInfo,
    years: string[],
    curYear: string,
    yearListCars: IYearListCarItem[],
    curYearListCars: IListCarItem[]
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
        info: {} as IDetialInfo,
        years: [],
        curYear: '全部',
        yearListCars: [],
        curYearListCars: []
    },

    // 异步action(ajax, setTimeout, Promise)
    effects: {
        *getInfoAndList({ payload }, { call, put }) {
            let result = yield call(getInfoAndList, payload.SerialID);
            if (result.code === 1) {
                // 处理数据
                let years = [],
                    listCar: IListCarItem[] = [],
                    yearListCars: IYearListCarItem[] = [],
                    curYearListCars = [];
                // 1. 去重年份
                years = [...new Set((result.data as IDetialInfo).list.map(item => item.market_attribute.year))];
                // 2. 排序
                let list = sort(result.data.list);
                console.log('years...', years, list);

                // 3. 按照年份聚合数据
                list.forEach(item=>{
                    let index = yearListCars.findIndex(value=>value.year === item.market_attribute.year);
                    if (index === -1){
                        yearListCars.push({
                            year: item.market_attribute.year,
                            list: [item]
                        })
                    }else{
                        yearListCars[index].list.push(item);
                    }
                })
                // 4. 按照年份过滤数据
                let curList:ICarItem[] = [];
                yearListCars.forEach(item=>{
                    curList = curList.concat(item.list);
                })
                curYearListCars = merge(curList);

                yield put({
                    type: 'save',
                    payload: {
                        info: result.data,
                        years,
                        yearListCars,
                        curYearListCars
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

function sort(arr: ICarItem[]) {
    let tempArr = [...arr];
    // 排序规则，排量升序，功率升序，吸气方式：涡轮增压>自然吸气
    tempArr.sort((a, b) => {
        if (a.exhaust_str === b.exhaust_str) {
            if (a.max_power_str === b.max_power_str) {
                return a.inhale_type < b.inhale_type ? -1 : 1;
            } else {
                return a.max_power_str < b.max_power_str ? -1 : 1;
            }
        } else {
            return a.exhaust_str < b.exhaust_str ? -1 : 1;
        }
    })
    return tempArr;
}

// 通过排量，功率，吸气方式聚合数据
function merge(arr: ICarItem[]){
    let tempArr = [...arr];
    let listCar: IListCarItem[] = [];
    tempArr.forEach(item=>{
        let key = `${item.exhaust_str}/${item.max_power_str} ${item.inhale_type}`;
        let index = listCar.findIndex(item=>item.type === key );
        if (index === -1){
            listCar.push({
                type: key,
                list: [item]
            })
        }else{
            listCar[index].list.push(item);
        }
    })
    return listCar;
}   


export default DetailModel;