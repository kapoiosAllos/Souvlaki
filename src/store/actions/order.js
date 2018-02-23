import * as actionTypes from './actionTypes';
import axios from '../../axiosOrders';

export const purchaseSouvlakiSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_SOUVLAKI_SUCCESS,
    orderId: id,
    orderData: orderData
  };
};

export const purchaseSouvlakiFail = (error) => {
  return {
    type: actionTypes.PURCHASE_SOUVLAKI_FAIL,
    error: error
  };
};

export const purchaseSouvlakiStart = (orderData) => {
  return dispatch => {
    axios.post('/orders.json', orderData)
    .then(response => {
      console.log(response.data);
      dispatch(purchaseSouvlakiSuccess(response.data, orderData));
    })
    .catch(error => {
      dispatch(purchaseSouvlakiFail(error));
    });
  }
};
