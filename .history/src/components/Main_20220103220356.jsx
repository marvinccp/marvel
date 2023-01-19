import React from "react";

const Main = ({ name,  formData }) => {
  return (
    <main className="main-container">
      <header className="main-header">
        <h4>Escoge tu personaje, para obtener su imagen</h4>
        <h1 className="text-name">{name}</h1>
      </header>
      <figure className="image-container-main-miniature">
        <img className="miniature-main-image" src={formData} alt="" />
      </figure>
    </main>
  );
};

export default Main;
