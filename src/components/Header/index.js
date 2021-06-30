import React from "react";
import "./style.css";

export default () => {
  return (
    <div className="header">
      <div className="logo">AM</div>
      <nav className="nav-bar">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Loja</a>
          </li>
          <li>
            <a>Login</a>
          </li>
          <li>
            <a>Castrados</a>
          </li>
          <li>
            <a>Recentes</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
