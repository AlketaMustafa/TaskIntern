import React, {useState} from "react";

const CharacterFilter = ({ onFilterChange, language}) => {
    const[status, setStatus] = useState('');
    const[specie, setSpecie] = useState('');

    const handleFilterChange = () => {
        console.log("status",status, specie)
     onFilterChange({status, specie})
    };

    return (
        <div className="filter-container">
            <label>
                {language==='de'? 'Status:' : 'Status:'}
                <select value={status} onChange={(e) => setStatus(e.target.value)} style={{width: '100px'}}>
                    <option value="">All</option>
                    <option value="Alive">Alive</option>
                    <option value="Dead">Dead</option>
                    <option value="Unknown">Unknown</option>
                </select>
            </label>

            <label>
               {language==='de'? 'Spezies:' : 'Species:'}
                <select value={specie} onChange={(e) => setSpecie(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Human">Human</option>
                    <option value="Alien">Alien</option>
                    <option value="Robot">Robot</option>
                </select>
            </label>
            <button onClick={handleFilterChange}>{isGermanLanguage? 'Filter anwenden': 'Apply Filters'}</button>
        </div>
    );
};
export default CharacterFilter;
