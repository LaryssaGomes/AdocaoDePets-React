import React from "react";
import "./style.css";
import dog from "../img/doghome.png";
export default () => {
  return (
    <div>
      <div className="circle"></div>
      <div className="home">
        <div>
          <img className="img-dog" src={dog} />
        </div>
        <div>
          <h1>
            Venha Adotar um <br></br>melzito 🎔
          </h1>
        </div>
      </div>
    </div>
  );
};
