import { all, AllEffect } from 'redux-saga/effects';

import usersSagas from './users';

export default function* rootSaga(): Generator<AllEffect<any>, any, unknown> {
  return yield all([
    usersSagas(),
  ]);
}
