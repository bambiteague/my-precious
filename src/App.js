import "./App.css";   
import { useEffect, useState } from "react";
import Characters from "./components/Characters/Characters";
import SearchBar from "./components/SearchBar";
import Quotes from "./components/Quotes";
import Seal from "./components/Seal/Seal";

function App() {
  const [characters, setCharacters] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const auth = { Authorization: "Bearer nndOSrec9JYyI2q1j9hc" };

  useEffect(() => {
    fetch(`https://the-one-api.dev/v2/character`, {
      headers: auth,
    })
      .then((res) => res.json())
      .then((res) => setCharacters([...res.docs]));
  }, []);

  useEffect(() => {
    fetch(`https://the-one-api.dev/v2/quote`, {
      headers: auth,
    })
      .then((res) => res.json())
      .then((res) => setQuotes([...res.docs]));
  }, []);

  useEffect(() => {
    fetch(`https://the-one-api.dev/v2/movie`, {
      headers: auth,
    })
      .then((res) => res.json())
      .then((res) => setMovies([...res.docs]));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">LOTR Characters</h1>
        <Seal />
        <div className="Search-n-Quote">
          <Quotes
            quotes={quotes}
            movies={movies}
            characters={characters}
            setSearchTerm={setSearchTerm}
          />
          <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
        </div>
        <Characters characters={characters} searchTerm={searchTerm} />
      </header>
    </div>
  );
}

export default App;
