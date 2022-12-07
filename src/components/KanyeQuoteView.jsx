import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { favQuote, fetchQuote } from "../store/actions/quoteAction";

export default function KanyeQuoteView() {
  const dispatch = useDispatch();
  const { quote, fav } = useSelector((state) => state.quoteReducer);

  useEffect(() => {
    dispatch(fetchQuote());
  }, []);

  const generateQuote = () => {
    dispatch(fetchQuote());
  };

  const handleFavQuote = () => {
    dispatch(favQuote());
  };

  return (
    <section style={{ textAlign: "center" }}>
      <img
        src="https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg"
        alt="W3Schools.com"
        style={{ width: "300px" }}
      />
      <h1 style={{ fontSize: "40px", marginTop: "10px" }}>
        {quote ? quote : "Kanye-West Quote"}
      </h1>

      <button onClick={generateQuote}>Get Quote</button>
      <button onClick={handleFavQuote}>Add Favorite</button>
      <p>{fav}</p>
    </section>
  );
}
