import React from 'react';
import { useLazyQuery  } from '@apollo/client';
import CharacterCard from './CharacterCard';
import { useTranslation } from 'react-i18next';


function CharacterList({characters, language}){
    const{ t } = useTranslation();

    if (characters.length === 0){
        return <p>{('No character found.')}</p>
    }
      return (
        <div className="character-list">
            {characters.map((character) =>(
                <CharacterCard key={character.id} character={character} language={language} /> 
            ))} 
        </div>
    )

}
export default CharacterList;