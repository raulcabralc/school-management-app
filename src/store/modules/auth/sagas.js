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

function* userRequest({ payload }) {
  const { email, password, name } = payload;

  try {
    yield call(axios.put, "/users", {
      email,
      name,
    });

    yield call(axios.post, "/token", { email, password });

    yield put(actions.loginFailure());

    const response = yield call(axios.post, "/token", { email, password });

    yield put(actions.loginSuccess({ ...response.data }));

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    yield put(actions.userSuccess(payload));
    toast.success("Usuário editado com sucesso.");
  } catch (e) {
    const errors = get(e, "response.data.errors", []);

    errors.forEach((error) => toast.error(error));

    yield put(actions.userFailure());
    console.log(e);
  }
}

// function* renewTokenRequest({ payload }) {
//   try {
//     const { email, password } = payload;

//     const response = yield call(axios.post, "/token", { email, password });

//     axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

//     yield put(
//       actions.loginSuccess({
//         token: response.data.token,
//         user: response.data.user,
//       })
//     );

//     toast.success("Renovou token");
//   } catch (e) {
//     toast.error("Não renovou token");
//     console.log(e);
//   }
// }

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.USER_REQUEST, userRequest),
  // takeLatest(types.RENEW_TOKEN_REQUEST, renewTokenRequest),
]);
