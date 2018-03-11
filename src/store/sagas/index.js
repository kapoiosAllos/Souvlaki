import { takeEvery, all, takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {
  logoutSaga,
  checkAuthTimeoutSaga,
  authUserSaga,
  authCheckStateSaga
} from './auth';
import {
  initIngredientsSaga
} from './souvlakiBuilder';
import {
  purchaseSouvlakiSaga,
  fetchOrdersSaga
} from './order';


export function* watchAuth() {
  yield all([
     takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
     takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
     takeEvery(actionTypes.AUTH_USER, authUserSaga),
     takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga)
  ]);
}

export function* watchBurgerBuilder() {
  yield takeEvery(actionTypes.AUTH_CHECK_STATE, initIngredientsSaga);
}

export function* watchOrder() {
  yield takeLatest(actionTypes.PURCHASE_SOUVLAKI, purchaseSouvlakiSaga);
  yield takeEvery(actionTypes.FETCH_ORDERS, fetchOrdersSaga);
}
