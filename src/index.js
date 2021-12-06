import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MouseContextProvider from "./context/mouse-context";
import Header from "./components/Header";
import LeftSideBar from "./components/LeftSideBar";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <LeftSideBar />
    <MouseContextProvider>
      <App />
    </MouseContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
