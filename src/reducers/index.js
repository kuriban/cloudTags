import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import { mainReducer } from "./main";

export const rootReducer = combineReducers({
  routing: routerReducer,
  main: mainReducer
});
