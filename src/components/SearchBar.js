import "../App.css";

export default function SearchBar({ setSearchTerm, searchTerm }) {
  return (
    <div className="SearchBar">
      <h3>Search:</h3>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => setSearchTerm("")}>clear</button>
    </div>
  );
}
