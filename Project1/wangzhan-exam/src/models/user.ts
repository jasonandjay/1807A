import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import {login} from '@/services/index'
import {getToken, setToken, removeToken} from '@/utils/index'

export interface UserModelState {
  isLogin: boolean;
}

export interface UserModelType {
  namespace: 'user';
  state: UserModelState;
  effects: {
    login: Effect;
    logout: Effect;
  };
  reducers: {
    save: Reducer<UserModelState>;
  };
  subscriptions: { setup: Subscription };
}

const UserModel: UserModelType = {
  namespace: 'user',

  state: {
    isLogin: !!getToken(),
  },

  effects: {
    *login({ payload }, { call, put }) {
      let result = yield call(login, payload);
      if (result.code === 1){
        yield put({
          type: 'save',
          payload: {isLogin: true}
        })
        setToken(result.token, payload.remember);
      }
    },
    *logout({}, {put}){
      removeToken();
      yield put({
        type: 'save',
        payload: {isLogin: false}
      })
    }
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        // 判断有没有登录态
        if (!getToken()){
          history.replace(`/login?from=${encodeURIComponent(pathname)}`);
        }else{
          if (pathname === '/login'){
            history.goBack();
          }
        }
        if (pathname === '/') {
          history.replace('/main/addQuestion');
          // dispatch({
            // type: 'query',
          // })
        }
      });
    }
  }
};

export default UserModel;
