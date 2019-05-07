import * as actionTypes from "../actionTypes/actionTypes";

/**
 * increment Action
 * @return
 */
export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  };
};

/**
 * decrement Action
 * @return
 */
export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  };
};

/**
 * Add counter value Action
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
 * Subtract counter value Action
 * @param  counter
 * @return
 */
export const sub_value = counter => {
  return {
    type: actionTypes.SUB_VALUE,
    value: counter
  };
};
