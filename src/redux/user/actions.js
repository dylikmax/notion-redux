import API from "../../data/api";

export const LOGOUT_USER = "LOGOUT_USER";
export const USER_FETCH_START = "USER_FETCH_START";
export const USER_FETCH_SUCCESS = "USER_FETCH_SUCCESS";
export const USER_FETCH_FAIL = "USER_FETCH_FAIL";

export const fetchRegisterUser =
  (email, password, time) => async (dispatch) => {
    dispatch({ type: USER_FETCH_START });
    try {
      const isExsist = await API.isExsistUser(email);
      if (isExsist) {
        throw new Error("User with this email is already registered.");
      }
      const user = await API.register(email, password, time);
      dispatch({ type: USER_FETCH_SUCCESS, payload: user });
    } catch (error) {
      dispatch({ type: USER_FETCH_FAIL, payload: error });
    }
  };

export const fetchLoginUser = (email, password) => async (dispatch) => {
  dispatch({ type: USER_FETCH_START });
  try {
    const user = await API.login(email, password);
    dispatch({ type: USER_FETCH_SUCCESS, payload: user });
  } catch (error) {
    dispatch({ type: USER_FETCH_FAIL, payload: error });
  }
};

export const fetchUserById = (id) => async (dispatch) => {
  dispatch({ type: USER_FETCH_START });
  try {
    const user = await API.getUser(id);
    dispatch({ type: USER_FETCH_SUCCESS, payload: user });
  } catch (error) {
    dispatch({ type: USER_FETCH_FAIL, payload: error });
  }
};
