import { GET_QUOTE, FAV_QUOTE, ADD_QUOTE } from "../actionType";

const initialState = { quote: "", fav: "", myQuote: "" };

export default function quoteReducer(state = initialState, action) {
  switch (action.type) {
    case GET_QUOTE:
      return { ...state, quote: action.payload };
    case FAV_QUOTE:
      return { ...state, fav: action.payload };
    case ADD_QUOTE:
      return { ...state, myQuote: action.payload };
    default:
      return state;
  }
}
