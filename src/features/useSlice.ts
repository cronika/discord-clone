import { createSlice } from "@reduxjs/toolkit";
import { InitialUserState } from "../types";

const initialState: InitialUserState = {
  user: null,
};

export const useSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});
// console.log(useSlice);

export const { login, logout } = useSlice.actions;
export default useSlice.reducer;
