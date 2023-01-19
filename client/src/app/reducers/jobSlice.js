import { createSlice } from "@reduxjs/toolkit";

export const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    listJobs: [],
    job: null,
    isLoading: false,
    isError: false,
  },
  reducers: {
    setLoading: (state) => {
      state.isLoading = true
    },
    setError: (state) => {
      state.isError = true
      state.isLoading = false
    },
    getDetailJob: (state, action) => {
      state.job = action.payload
      state.isLoading = false
    },
    getListJobs: (state, action) => {
      state.listJobs = action.payload
      state.isLoading = false
    }
  },
});

export const { setLoading, setError, getDetailJob, getListJobs } = jobSlice.actions;

export default jobSlice.reducer;
