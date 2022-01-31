import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

interface CredentialsState {
  name: string;
  email: string;
  password: string;
  userAuthenticated: any;
}
const initialState: CredentialsState = {
  name: "",
  email: "",
  password: "",
  userAuthenticated: null,
};

export const userCredentialSlice = createSlice({
  name: "credentials",
  initialState,
  reducers: {
    addUsername: (state, { payload }) => {
      state.name = payload;
    },
    addEmail: (state, { payload }) => {
      state.email = payload;
    },
    addPassword: (state, { payload }) => {
      state.password = payload;
    },
  },
});

export const { addUsername, addEmail, addPassword } =
  userCredentialSlice.actions;

export const selectName = (state: RootState) => state.credentials.name;
export const selectEmail = (state: RootState) => state.credentials.email;
export const selectPassword = (state: RootState) => state.credentials.password;

export default userCredentialSlice.reducer;
