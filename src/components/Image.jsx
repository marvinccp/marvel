import React from "react";


const Image = ({ formData }) => {

  return (
    <div className="image-container">
      <img src={ formData } className="character-image" alt="card-img" />
    </div>
  );
};

export  { Image };
