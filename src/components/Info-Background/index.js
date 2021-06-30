import React from "react";
import "./style.css";
import pets from "../img/pets1.png";
export default () => {
  return (
    <div className="hello">
      <div className="hello-info">
        <div className="orange-bar">
          <div className="circular-bar bar-1"></div>
          <div className="circular-bar bar-2"></div>
          <div className="circular-bar bar-3"></div>
          <div className="circular-bar bar-4"></div>
          <div className="circular-bar bar-5"></div>
          <div className="circular-bar bar-6"></div>
          <div className="circular-bar bar-7"></div>
          <div className="circular-bar bar-8"></div>
        </div>
        <div className="img-pets">
          <img src={pets} />
        </div>
      </div>
      <div className="text-info">
        <h3>
          Olá ,venha conhecer nossos
          <br /> Melzitos para adoção.
        </h3>
        <a className="btn-adoption">Adoção</a>
      </div>
    </div>
  );
};
