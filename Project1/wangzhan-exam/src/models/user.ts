import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import { getUserInfo, getViewAuthority, login } from '@/services/index'
import { getToken, setToken, removeToken } from '@/utils/index'
import { IMenuItem, IUserInfo } from '@/utils/interface';
import Menus from '@/utils/menu'

let hasUserInfo = false;
var myView: string[] = [],
  forbiddenView: string[] = [];
export interface UserModelState {
  isLogin: boolean;
  userInfo: IUserInfo;
  myMenu: IMenuItem[];
}

export interface UserModelType {
  namespace: 'user';
  state: UserModelState;
  effects: {
    login: Effect;
    getUserInfo: Effect;
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
    userInfo: {} as IUserInfo,
    myMenu: []
  },

  effects: {
    *login({ payload }, { call, put }) {
      let result = yield call(login, payload);
      if (result.code === 1) {
        yield put({
          type: 'save',
          payload: { isLogin: true }
        })
        setToken(result.token, payload.remember);
      }
    },
    *getUserInfo({ }, { call, put }) {
      // 获取当前用户信息
      let result = yield call(getUserInfo);
      if (result.code === 1) {
        hasUserInfo = true;
        yield put({
          type: 'save',
          payload: { userInfo: result.data }
        })
      }
      // 获取试图权限数据
      let viewAuthority = yield call(getViewAuthority);
      if (viewAuthority.code === 1) {
        let myMenu: IMenuItem[] = [];
        myView = [];
        forbiddenView = [];
        (Menus as unknown as IMenuItem[]).forEach(item => {
          // 计算用户拥有的视图权限
          let filter = item.children?.filter(value => {
            return viewAuthority.data.findIndex(((view: any) => view.view_id === value.meta.view_id)) !== -1
          })
          if (filter?.length) {
            myMenu.push({ ...item, children: filter })
          }
          myView.push(...filter?.map(item => item.path)!);
          // 过滤拥有没有的视图权限
          let forbidden = item.children?.filter(value => {
            return viewAuthority.data.findIndex(((view: any) => view.view_id === value.meta.view_id)) === -1
          }).map(item => item.path);
          forbiddenView.push(...forbidden!);
        })
        yield put({
          type: 'save',
          payload: { myMenu }
        })
      }
    },
    *logout({ }, { put }) {
      removeToken();
      yield put({
        type: 'save',
        payload: { isLogin: false }
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
        console.log(myView, forbiddenView)

        // 判断有没有登录态
        if (!getToken()) {
          history.replace(`/login?from=${encodeURIComponent(pathname)}`);
        } else {
          // 获取用户信息
          if (!hasUserInfo) {
            dispatch({
              type: 'getUserInfo'
            })
          }
          if (pathname === '/login') {
            history.goBack();
          }
        }
        console.log(pathname, forbiddenView, forbiddenView.length && forbiddenView.indexOf(pathname) !== -1);
        if (pathname === '/') {
          history.replace('/main/addQuestion');
        } else if(pathname === '/403' || pathname === '/404'){

        } else if (forbiddenView.length && forbiddenView.indexOf(pathname) !== -1) {
          history.replace('/403');
        } else if (myView.length && myView.indexOf(pathname) === -1) {
          history.replace('/404');
        }
      });
    }
  }
};

export default UserModel;
