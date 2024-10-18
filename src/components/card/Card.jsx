import React from "react";

const Card = (title, content) => {
  return (
    <div className="card mb-3 shadow border-0">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="overflow-y-auto">{content}</div>
      </div>
    </div>
  );
};

export default Card;
