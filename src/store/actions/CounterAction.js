import * as actionTypes from "../actionTypes/actionTypes";

/**
 * Action to increment counter
 * @return
 */
export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  };
};

/**
 * Action to decrement counter 
 * @return
 */
export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  };
};

/**
 * Action to add counter value 
 * @param  counter
 * @return
 */
export const add_value = counter => {
  return {
    type: actionTypes.ADD_VALUE,
    value: counter
  };
};

/**
 * Action to subtract counter value 
 * @param  counter
 * @return
 */
export const sub_value = counter => {
  return {
    type: actionTypes.SUB_VALUE,
    value: counter
  };
};
