import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
export default function reducers(reducers) {
  const persistedReducers = persistReducer(
    {
      key: "NOME-APP",
      storage: storage,
      whitelist: ["buttonReducer"],
    },
    reducers
  );

  return persistedReducers;
}
