import axios from '../../axiosOrders';
import { put } from 'redux-saga/effects';

import * as actions from '../actions/index';

export function* purchaseSouvlakiSaga (action) {
  yield put(actions.purchaseSouvlakiStart());
  const response =  yield axios.post('/orders.json?auth=' + action.token, action.orderData)
  try {
    yield put(actions.purchaseSouvlakiSuccess(response.data.name, action.orderData));
  } catch (error) {
    yield put(actions.purchaseSouvlakiFail(error));
  }
}

export function* fetchOrdersSaga (action) {
  yield put(actions.fetchOrdersStart());
  const queryParams = yield '?auth=' + action.token + '&orderBy="userId"&equalTo="' + action.userId + '"';
  const response = yield axios.get('/orders.json' + queryParams)
  try {
    const fetcedOrders = [];
    for (let key in response.data) {
      fetcedOrders.push({
        ...response.data[key],
        id: key
      });
    };
    yield put(actions.fetchOrdersSuccess(fetcedOrders));
  } catch (error) {
    yield put(actions.fetchOrdersFail(error));
  }
}
