import React from "react";
import "./Card.scss";

const Card = ({ children }) => {
  return (
    <div className="card">
      <div className="containers">{children}</div>
    </div>
  );
};

export default Card;
