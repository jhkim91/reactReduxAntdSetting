import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

const alertDefaultState = {
  id: "",
  msg: "",
};

const alertReducer = (state = alertDefaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return payload;
    case REMOVE_ALERT:
      return alertDefaultState;
    default:
      return state;
  }
};

export default alertReducer;
