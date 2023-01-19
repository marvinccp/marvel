import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Image from "./components/Image";
import marvel_retro from "./marvel-retro.jpg";
import { getApiInfo } from "./components/helpers/getApiInfo";
import Select from "./components/Select";

function App() {
  const [stateCharacter, setStateCharacter] = React.useState([]);
  const [name, setName] = React.useState("Retro Characters");
  const [formData, setFormData] = React.useState(`${marvel_retro}`);

  React.useEffect(() => {
    getApiInfo().then((marvelCharacters) => {
      setStateCharacter(marvelCharacters);
    });
  }, []);

  const handleChange = (e) => {
    const character = e.target.value;
    setFormData(character);
    changeName(character);
  };

  const changeName = (character) =>
    setName(
      stateCharacter.map((person) => {

        let imageURL = `${person.thumbnail.path}.${person.thumbnail.extension}`;
        let imageIncludes = imageURL.includes("image_not_available");
        (imageURL === character && !imageIncludes) ? person.name;
         
        
      })
    );
  

  return (
    <>
      <Header />

      <Main name={name}>
        <Select
          stateCharacter={stateCharacter}
          formData={formData}
          name={name}
          handleChange={handleChange}
          marvel_retro={marvel_retro}
        />
        <Image formData={formData} />
      </Main>
    </>
  );
}

export default App;
