import * as actionTypes from "../actionTypes/actionTypes";

/**
 * Action to store counter value to Result Array
 * @param  counter
 * @return
 */
export const store_result = counter => {
  return {
    type: actionTypes.STORE_RESULT,
    resultCounter: counter
  };
};

/**
 * Action to delete counter of an id from Result Array
 * @param  id
 * @return
 */
export const delete_result = id => {
  return {
    type: actionTypes.DELETE_RESULT,
    id: id
  };
};
