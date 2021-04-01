import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import {login} from '@/services/index'

export interface UserModelState {
  name: string;
}

export interface UserModelType {
  namespace: 'user';
  state: UserModelState;
  effects: {
    login: Effect;
  };
  reducers: {
    save: Reducer<UserModelState>;
  };
  subscriptions: { setup: Subscription };
}

const UserModel: UserModelType = {
  namespace: 'user',

  state: {
    name: '',
  },

  effects: {
    *login({ payload }, { call, put }) {
      let result = yield call(login, payload);
      debugger;
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    // 启用 immer 之后
    // save(state, action) {
    //   state.name = action.payload;
    // },
  },
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

export default UserModel;
