import { useState } from "react";
import "./Characters.css";

export default function CharacterCard({ character }) {
  const [isCardClicked, setIsCardClicked] = useState(false);

  return (
    <li>
      <div className="character-card">
        <h3 onClick={() => setIsCardClicked(!isCardClicked)}>
          {character.name}
        </h3>
        {isCardClicked ? (
          <>
            {character.race ? <div>Race: {character.race}</div> : ""}
            {character.realm ? <div>Realm: {character.realm}</div> : ""}
            {character.spouse ? <div>Spouse: {character.spouse}</div> : ""}
            {character.wikiUrl ? (
              <div>
                <a
                  href={character.wikiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  alt={character.name + "wiki" + character.wikiUrl}
                >
                  Wiki Link
                </a>
              </div>
            ) : (
              ""
            )}
          </>
        ) : (
          ""
        )}
      </div>
    </li>
  );
}
