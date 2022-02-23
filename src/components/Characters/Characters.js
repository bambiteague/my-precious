import CharacterCard from "./CharacterCard";
import "./Characters.css";

export default function Characters({ characters, searchTerm }) {
  return (
    <div className="ulContainer">
      <ul>
        {characters
          .filter((character) =>
            character.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((character, key) => {
            return <CharacterCard character={character} key={key} />;
          })}
      </ul>
    </div>
  );
}
