import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import App from "./app/layouts/App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { configureStore } from "./app/store/configureStore";
import ScrollToTop from "./app/common/util/ScrollToTop";
import { loadEvents } from "./features/event/eventActions";

const store = configureStore();
store.dispatch(loadEvents());

const rootEl = document.getElementById("root");

let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <App />
        </ScrollToTop>{" "}
      </BrowserRouter>{" "}
    </Provider>,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept("./app/layouts/App", () => {
    setTimeout(render);
  });
}

render();

serviceWorker.unregister();
