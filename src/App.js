import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import CharacterList from "./TaskIntern/src/components/CharacterList";
import CharacterFilter from './TaskIntern/src/components/CharacterFilter'
// import '/.i18n';

function App() {
  // const { t, i18n } = useTranslation();
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredCharacters, setFilteredCharacters] = useState([])
  const [language, setLanguage] = useState('en')
  async function fetchCharacterData() {
    try {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      return data.results || [];
    } catch (err) {
      console.error("Error fetching character data:", err);
      return [];
    }
  }
}
  useEffect(() => {
    const loadCharacters = async () => {
      const characterData = await fetchCharacterData();
      setCharacters(characterData);
      setFilteredCharacters(characterData);
      setLoading(false);
    };
    void loadCharacters();
  }, []);
  
  const handleFilterChange=({status, specie})=>{
    console.log("its calling ")
  const filteredCharacters = characters.filter((character)=>{
    const statusFiltered= status? character.status === status : true;
    const specieFiltered = specie? character.specie === specie :true;
    return statusFiltered && specieFiltered
  });

  console.log("filteredCharacters", filteredCharacters)
  setFilteredCharacters(filteredCharacters);

  }
  
  const isGermanLanguage = language==='de';

return (
    <div className="App">
      <h1>{isGermanLanguage? 'Rick und Morty Figuren' : 'Rick and Morty Characters'}</h1>
    
      <CharacterFilter onFilterChange={handleFilterChange} language={language}/>
      {loading ? (
        <p>{isGermanLanguage? 'Wird geladen...': 'Loading...'}</p>
      ) : (
        <CharacterList characters={filteredCharacters} language={language} />
      )}
      <footer>
        <button  onClick={() => setLanguage('en')}>{isGermanLanguage? 'Englisch': 'English'}</button>
        <button onClick={() =>setLanguage('de')}>{isGermanLanguage? 'Deutsch': 'German'}</button>
      </footer>
    </div>
 ) ;

export default App;

