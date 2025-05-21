import { call, put, all, takeLatest } from "redux-saga/effects";
import * as actions from "./actions";
import * as types from "../types";

function* loginRequest(payload) {
  yield console.log("SAGAS", payload);
}

export default all([takeLatest(types.LOGIN_REQUEST, loginRequest)]);
