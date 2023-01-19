// import React, {useState, useEffect} from "react";



const Select = ({
  marvel_retro,
  formData,
  stateCharacter,
  handleChange,
}) => {
  return (
    <div className="select-container">
      <select
        className="select-caharacters"
        onChange={handleChange}
        value={formData.marvelCharacters}
      >
        {<option value={marvel_retro}> Choose your character </option>}
        {stateCharacter.map((person, i) => (
          <option
            key={person.id}
            value={`${person.thumbnail.path}.${person.thumbnail.extension}`}
            index={i}
          >
            {`${i + 1}. ${person.name}`}
          </option>
        ))}
      </select>
    </div>
  );
};

export  { Select };
