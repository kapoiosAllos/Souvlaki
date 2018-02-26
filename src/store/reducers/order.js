import * as actionTypes from '../actions/actionTypes';

const initialState = {
  orders: [],
  loading: false,
  purchased: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT:
      return {
        ...state,
        purchased: false
      };
    case actionTypes.PURCHASE_SOUVLAKI_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.PURCHASE_SOUVLAKI_SUCCESS:
      const newOrder = {
        ...action.OrderData,
        id: action.orderId
      }
      return {
        ...state,
        loading: false,
        purchased: true,
        order: state.orders.concat(newOrder)
      };
    case actionTypes.PURCHASE_SOUVLAKI_FAIL:
      return {
        ...state,
        loading: false
      };
    case actionTypes.FETCH_ORDERS_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.orders,
        loading: false
      };
    case actionTypes.FETCH_ORDERS_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
