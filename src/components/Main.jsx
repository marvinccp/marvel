import React from "react";

const Main = ({ name,  children }) => {
  return (
    <main className="main-container">
      <header className="main-header">
        <h4>Escoge tu personaje, para obtener su imagen</h4>
        <h1 className="text-name">{ name }</h1>
      </header>
      {children}
    </main>
  );
};

export  { Main };
