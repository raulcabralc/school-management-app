import { toast } from "react-toastify";

import { call, put, all, takeLatest } from "redux-saga/effects";

import { get } from "lodash";

import * as actions from "./actions";
import * as types from "../types";
import axios from "../../../services/axios";

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, "/token", payload);

    yield put(actions.loginSuccess({ ...response.data }));

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    window.location.pathname = "/loggedin";
  } catch (e) {
    toast.error("Email ou senha inválidos.");

    yield put(actions.loginFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, "auth.token", "");
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
