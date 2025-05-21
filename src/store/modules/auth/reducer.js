import { act } from "react";
import * as types from "../types";
import { toast } from "react-toastify";

const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      console.log("REDUCER", action.payload);
      return state;
    }

    default:
      return state;
  }
}
