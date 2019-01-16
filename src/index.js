import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import { store } from "./store/configureStore";
import { Router, Route, hashHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";

import Page from "./containers/Page";

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path={"/:itemId"} component={Page} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
