import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    user: null,
    isLoading: false,
    isError: false,
    token: null
  },
  reducers: {
    setLoading: (state) => {
      state.isLoading = true
    },
    setError: (state) => {
      state.isError = true
      state.isLoading = false
    },
    getUserFetch: (state, action) => {
      state.user = action.payload
      state.isLoading = false
    },
    loginUser: (state, action) => {
      state.token = action.payload
      state.isLoading = false
    }
  },
});

export const { setLoading, setError, getUserFetch, loginUser } = userSlice.actions;

export default userSlice.reducer;
