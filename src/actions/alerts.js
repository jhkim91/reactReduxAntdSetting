import { SET_ALERT, REMOVE_ALERT } from "./types";

export const setAlertAction = (alert) => (dispatch) => {
  dispatch({
    type: SET_ALERT,
    payload: alert,
  });

  setTimeout(() => {
    dispatch(
      removeAlertAction({
        type: REMOVE_ALERT,
      })
    );
  });
};

export const removeAlertAction = (id) => ({
  type: REMOVE_ALERT,
  payload: { id: id },
});
