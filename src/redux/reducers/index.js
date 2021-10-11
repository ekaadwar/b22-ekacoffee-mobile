import { combineReducers } from "redux";

const cartState = {
  data: [],
};

const rootReducer = combineReducers({
  cart: (state = cartState, action) => {
    switch (action.type) {
      case "CART_ADD_ITEM": {
        return {
          ...state,
          ...action.payload,
        };
      }
      default: {
        return state;
      }
    }
  },
});

export default rootReducer;
