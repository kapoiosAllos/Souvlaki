import * as actionTypes from './actionTypes';

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

export const purchaseSouvlaki = (orderData, token) => {
  return {
    type: actionTypes.PURCHASE_SOUVLAKI,
    orderData: orderData,
    token: token
  }
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  };
};

export const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders
  };
};

export const fetchOrdersFail = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  };
};

export const fetchOrders = (token, userId) => {
  return  {
    type: actionTypes.FETCH_ORDERS,
    token: token,
    userId: userId
  }
}
