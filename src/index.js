import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/configureStore";
import ScrollToTop from "react-scroll-to-top";
import "./../src/assets/scrollToTop/scrollToTop.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop
        smooth
        component={<i className="fa-solid fa-chevron-up text-white"></i>}
      />
      <App />
    </BrowserRouter>
  </Provider>
);
