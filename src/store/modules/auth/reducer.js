// import { act } from "react";
import * as types from "../types";

const initialState = {
  isLoggedIn: false,
  token: "",
  user: {},
  isLoading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      return state;
    }

    case types.LOGIN_SUCCESS: {
      let newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      return newState;
    }

    case types.LOGIN_FAILURE: {
      let newState = { ...initialState };
      return newState;
    }

    default:
      return state;
  }
}
