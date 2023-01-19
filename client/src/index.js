import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store, saga } from "./app/store";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import userSaga from "./app/sagas/userSaga";

const container = document.getElementById("root");
const root = createRoot(container);
saga.run(userSaga)

const theme = createTheme()

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
