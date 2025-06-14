import * as types from "../types";
import axios from "../../../services/axios";

const initialState = {
  isLoggedIn: false,
  token: "",
  user: {},
  isLoading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    case types.LOGIN_SUCCESS: {
      let newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      newState.isLoading = false;
      return newState;
    }

    case types.LOGIN_FAILURE: {
      delete axios.defaults.headers.Authorization;
      let newState = { ...initialState };
      return newState;
    }

    case types.USER_REQUEST: {
      let newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    case types.USER_SUCCESS: {
      let newState = { ...state };
      newState.user.name = action.payload.name;
      newState.user.email = action.payload.email;
      newState.isLoading = false;
      return newState;
    }

    case types.USER_FAILURE: {
      let newState = { ...state };
      newState.isLoading = false;
      return newState;
    }

    case types.RENEW_TOKEN_REQUEST: {
      let newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    default:
      return state;
  }
}
