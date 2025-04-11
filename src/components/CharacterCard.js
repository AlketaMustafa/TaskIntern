import React from 'react';

function CharacterCard({ character, language }) {
  const lang = language || 'en';

  const statusMap = {
    Alive: { en: 'Alive', de: 'Lebendig' },
    Dead: { en: 'Dead', de: 'Tot' },
    unknown: { en: 'Unknown', de: 'Unbekannt' },
  };

  const speciesMap = {
    Human: { en: 'Human', de: 'Mensch' },
    Alien: { en: 'Alien', de: 'Außerirdischer' },
    Robot: { en: 'Robot', de: 'Roboter' },
  };

  const genderMap = {
    Male: { en: 'Male', de: 'Männlich' },
    Female: { en: 'Female', de: 'Weiblich' },
    unknown: { en: 'Unknown', de: 'Unbekannt' },
  };

  const originMap = {
    unknown: { en: 'Unknown', de: 'Unbekannt' },
    Earth: { en: 'Earth', de: 'Erde'},
  };

  return (
    <div className="character-card">
      <h3>{character.name}</h3>
      <p>
        <strong>Status: </strong>
        {statusMap[character.status]?.[lang] || character.status}
      </p>
      <p>
        <strong>Species: </strong>
        {speciesMap[character.species]?.[lang] || character.species}
      </p>
      <p>
        <strong>Gender: </strong>
        {genderMap[character.gender]?.[lang] || character.gender}
      </p>
      <p>
        <strong>Origin: </strong>
        {originMap[character.origin.name]?.[lang] || character.origin}
      </p>
    </div>
  );
}
export default CharacterCard;
