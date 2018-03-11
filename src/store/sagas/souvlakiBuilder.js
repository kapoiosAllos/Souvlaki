import axios from '../../axiosOrders';
import { put } from 'redux-saga/effects';

import * as actions from '../actions/index';

export function* initIngredientsSaga (action) {
  const response = yield axios.get('https://souvlaki-builder.firebaseio.com/ingredients.json')
  try {
    yield put(actions.setIngredients(response.data));
  } catch (error) {
    yield put(actions.fetchIngredientsFailed());
  }
}
