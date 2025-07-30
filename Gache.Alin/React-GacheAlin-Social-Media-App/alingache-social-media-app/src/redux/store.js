import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
    serializableCheck: false,
  })
});
