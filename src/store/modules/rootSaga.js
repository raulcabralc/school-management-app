import { all } from "redux-saga/effects";

import button from "./button/sagas";

export default function* rootSaga() {
  return yield all([button]);
}
