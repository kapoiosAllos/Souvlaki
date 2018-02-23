import * as actionTypes from '../actions/actionTypes';

const initialState = {
  orders: [],
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
        order: state.orders.concat(newOrder)
      };
    case actionTypes.PURCHASE_SOUVLAKI_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
