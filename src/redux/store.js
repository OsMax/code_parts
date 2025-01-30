import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authReducer } from "./Auth/authSlice";
import { listReduser } from "./List/listSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token"],
};

const persistRed = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistRed,
    list: listReduser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
