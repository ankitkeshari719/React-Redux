import * as actionTypes from "../actionTypes/actionTypes";

const initialState = {
  counter: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    case actionTypes.ADD_VALUE:
      return {
        ...state,
        counter: state.counter + action.value
      };
    case actionTypes.SUB_VALUE:
      return {
        ...state,
        counter: state.counter - action.value
      };
    default:
      return state;
  }
};

export default counterReducer;
