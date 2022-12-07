import axios from "axios";
import { ADD_QUOTE, FAV_QUOTE, GET_QUOTE } from "../actionType";

export const fetchQuote = () => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios("https://api.kanye.rest");

      dispatch({
        type: GET_QUOTE,
        payload: data.quote,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const favQuote = () => {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const { quote, fav } = state.quoteReducer;

      if (!fav.includes(quote)) {
        fav.push(quote);

        dispatch({
          type: FAV_QUOTE,
          payload: fav,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addQuote = (payload) => {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const { myQuote } = state.quoteReducer;

      if (!myQuote.includes(payload)) {
        myQuote.push(payload);

        dispatch({
          type: ADD_QUOTE,
          payload: myQuote,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
