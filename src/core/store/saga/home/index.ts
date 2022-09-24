import { all, fork, put, call, takeLatest } from 'redux-saga/effects';
import { Types as HomeTypes } from '../../ducks/home'

function* getHome(params: any) {

}

function* getHomeWatcher() {
  yield takeLatest(HomeTypes.HOME_REQUEST, getHome);
}


export default function* rootSagas() {
  yield all([
    fork(getHomeWatcher),
  ]);
}
