import { useState, useEffect } from "react";

export default function Quotes({ quotes, characters, setSearchTerm, movies }) {
  const [liveQuote, setLiveQuote] = useState();
  const [liveQuoteChar, setLiveQuoteChar] = useState();
  const [liveQuoteMovie, setLiveQuoteMovie] = useState();

  useEffect(() => {
    let intervalId;

    if (quotes) {
      const getRandomQuote = (fQuotes) =>
        fQuotes[Math.floor(Math.random() * fQuotes.length)];

      const filteredQuotes = quotes.filter(
        (quote) =>
          quote.dialog.includes(" ") &&
          quote.dialog.length < 120 &&
          quote.dialog.length > 20
      );
      setLiveQuote(getRandomQuote(filteredQuotes));

      intervalId = window.setInterval(
        () => setLiveQuote(getRandomQuote(filteredQuotes)),
        14500
      );
    }
    return () => clearInterval(intervalId);
  }, [quotes]);

  useEffect(() => {
    if (characters && liveQuote) {
      setLiveQuoteChar(
        characters.filter(
          (character) => character._id === liveQuote.character
        )[0]
      );
    }
  }, [characters, liveQuote]);

  useEffect(() => {
    if (movies && liveQuote) {
      setLiveQuoteMovie(
        movies.filter((movie) => movie._id === liveQuote.movie)[0]
      );
    }
  }, [movies, liveQuote]);

  return (
    <div className="quote-scroll">
      <h4>"{liveQuote?.dialog}"</h4>
      {liveQuoteChar ? (
        <h6 onClick={() => setSearchTerm(liveQuoteChar.name)}>
          - {liveQuoteChar.name},{" "}
          <span style={{ fontStyle: "italic" }}>
            {liveQuoteMovie ? liveQuoteMovie.name : ""}
          </span>
        </h6>
      ) : (
        ""
      )}
    </div>
  );
}
