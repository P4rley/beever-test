import { combineReducers } from "redux";
import quoteReducer from "./quoteReducer";

const reducer = combineReducers({
  quoteReducer,
});

export default reducer;
