import actionsTypes from "./constants";
const ALLOWED_PASSWORD = "123";

const logIn = user => ({
  type: actionsTypes.LOG_IN,
  user
});

const logOut = () => ({
  type: actionsTypes.LOG_OUT
});

const badPassword = () => ({
  type: actionsTypes.BAD_PASSWORD
});

export const logInAction = (user, password) => {
  return dispatch => {
    if (ALLOWED_PASSWORD !== password) {
      dispatch(badPassword());
    } else {
      dispatch(logIn(user));
    }
  };
};

export const logOutAction = () => {
  return dispatch => {
    dispatch(logOut());
  };
};
