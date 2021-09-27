import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import style from "./style/style.css";
import WheatherContextProvider from "./context/WheatherContext";
ReactDOM.render(
  <React.StrictMode>
    <WheatherContextProvider>
      <App />
    </WheatherContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

