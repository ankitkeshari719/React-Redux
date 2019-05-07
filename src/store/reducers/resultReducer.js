import * as actionTypes from "../actionTypes/actionTypes";

const initialState = {
  results: []
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: +new Date(), val: action.resultCounter })
      };
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter(
        result => +result.id !== +action.id
      );
      return {
        ...state,
        results: updatedArray
      };
    default:
      return state;
  }
};

export default resultReducer;
