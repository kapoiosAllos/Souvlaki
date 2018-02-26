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

export const purchaseSouvlakiStart = () => {
  return {
    type: actionTypes.PURCHASE_SOUVLAKI_START
  };
};

export const purchaseSouvlaki = (orderData) => {
  return dispatch => {
    dispatch(purchaseSouvlakiStart());
    axios.post('/orders.json', orderData)
    .then(response => {
      console.log(response.data);
      dispatch(purchaseSouvlakiSuccess(response.data.name, orderData));
    })
    .catch(error => {
      dispatch(purchaseSouvlakiFail(error));
    });
  }
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  };
};
