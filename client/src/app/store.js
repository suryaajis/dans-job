import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga"
import userReducer from './reducers/userSlice';
import jobReducer from "./reducers/jobSlice"

export const saga = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    users: userReducer,
    jobs: jobReducer
  },
  middleware: [saga]
});
