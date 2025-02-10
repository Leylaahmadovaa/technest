import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLogged: false, access: "", refresh: "" };

const authStore = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLogged = true;
      state.access = action.payload.access;
      state.refresh=action.payload.refresh
    },
    logout: (state) => {
      state.isLogged = false;
      state.access=""
      state.refresh=""
    },
  },
});
export default authStore.reducer;
export const authAction = authStore.actions;
