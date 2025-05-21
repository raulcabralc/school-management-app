import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
export default function reducers(reducers) {
  const persistedReducers = persistReducer(
    {
      key: "SCHOOL-MANAGEMENT",
      storage: storage,
      whitelist: ["auth"],
    },
    reducers
  );

  return persistedReducers;
}
