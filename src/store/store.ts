import { configureStore } from "@reduxjs/toolkit";
import credentialReducer from "../features/Authentications/userCredentialsSlice";
import renderPageReducer from "../features/Authentications/renderPage";
export const store = configureStore({
  reducer: {
    credentials: credentialReducer,
    signinPage: renderPageReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
