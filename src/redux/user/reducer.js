import {
  LOGOUT_USER,
  USER_FETCH_START,
  USER_FETCH_SUCCESS,
  USER_FETCH_FAIL,
} from "./actions";

const DEFAULT_STATE = {
  loading: false,
  error: null,
  data: {},
};

export function userReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case USER_FETCH_START: {
      return { ...state, loading: true };
    }
    case USER_FETCH_SUCCESS: {
      const { payload } = action;
      localStorage.setItem("id", payload.id);
      return { ...state, loading: false, error: null, data: payload };
    }
    case USER_FETCH_FAIL: {
      const { payload } = action;
      localStorage.setItem("id", "");
      return { ...state, loading: false, error: payload };
    }
    case LOGOUT_USER: {
      localStorage.setItem("id", "");
      return { ...state, data: {} };
    }
    default:
      return state;
  }
}
