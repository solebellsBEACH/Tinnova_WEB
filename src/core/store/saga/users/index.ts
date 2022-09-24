import { all, fork, put, call, takeLatest } from 'redux-saga/effects';
import { api } from '../../../services/api';
import { Types as UsersTypes, Creators as UserCreators } from '../../ducks/users'

function* getUsers(params: any):any {
  try {
    const response = yield call(api.get, `users`);
    if (response.status === 200) {
      yield put(UserCreators.UsersSuccess(response.data));
    } else {
      yield put(UserCreators.UsersFail());
    }
  } catch (error) {
    yield put(UserCreators.UsersFail());
  }
}

function* getUsersWatcher() {
  yield takeLatest(UsersTypes.USERS_REQUEST, getUsers);
}


export default function* rootSagas() {
  yield all([
    fork(getUsersWatcher),
  ]);
}
