import React, { useState } from "react";
import "./style.css";
import typecat from "../../img/typecat.jpg";
import typedog from "../../img/typedog.jpg";
import typehamster from "../../img/typehamster.jpg";
import typeave from "../../img/typeave.jpg";
import arrowleft from "../../Icons/arrow-left.svg";
import arrowright from "../../Icons/arrow-right.svg";
export default () => {
  const [scrollX, setScrollX] = useState(0);
  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);

    console.log(window.innerWidth);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };
  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = 1500;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 200;
    }
    setScrollX(x);
  };
  return (
    <div>
      <div className=" card-left" onClick={handleLeftArrow}>
        <img src={arrowleft} />
      </div>
      <div className=" card-right" onClick={handleRightArrow}>
        <img src={arrowright} />
      </div>
      <div className="list-cards">
        <div
          className="container-card"
          style={{
            marginLeft: scrollX,
            width: 30 * 150,
          }}
        >
          <div className="card">
            <div className="img-pet">
              <img src={typecat} />
            </div>
            <div className="type">
              <button className="btn-type">Gato</button>
            </div>
          </div>
          <div className="card">
            <div className="img-pet">
              <img src={typedog} />
            </div>
            <div className="type">
              <button className="btn-type">Cachorro</button>
            </div>
          </div>
          <div className="card">
            <div className="img-pet">
              <img src={typehamster} />
            </div>
            <div className="type">
              <button className="btn-type">Hamster</button>
            </div>
          </div>
          <div className="card">
            <div className="img-pet">
              <img src={typeave} />
            </div>
            <div className="type">
              <button className="btn-type">Aves</button>
            </div>
          </div>
          <div className="card">
            <div className="img-pet">
              <img src={typehamster} />
            </div>
            <div className="type">
              <button className="btn-type">Outros</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
