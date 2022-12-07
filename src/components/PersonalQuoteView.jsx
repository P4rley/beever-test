import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuote } from "../store/actions/quoteAction";

export default function PersonalQuoteView() {
  const [quote, setQuote] = useState("");
  const dispatch = useDispatch();

  const { myQuote } = useSelector((state) => state.quoteReducer);

  const handleQuote = (e) => {
    setQuote(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addQuote(quote));
    setQuote("");
  };

  return (
    <section style={{ textAlign: "center", marginTop: "60px" }}>
      <hr style={{ maxWidth: "30%" }} />
      <h2>My Quotes</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={quote} onChange={handleQuote} />
        <button type="submit">Submit</button>
      </form>
      <p>{myQuote}</p>
    </section>
  );
}
