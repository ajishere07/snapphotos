import { createSlice, createStore } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
interface renderPage {
  renderSigninPage: boolean;
}

const initialState: renderPage = {
  renderSigninPage: true,
};

export const renderPage = createSlice({
  name: "render",
  initialState,
  reducers: {
    showSigninPage: (state, { payload }) => {
      state.renderSigninPage = true;
    },
    showSignupPage: (state, { payload }) => {
      state.renderSigninPage = false;
    },
  },
});
export const { showSigninPage, showSignupPage } = renderPage.actions;

export const selectLoadPage = (state: RootState) =>
  state.signinPage.renderSigninPage;

export default renderPage.reducer;
