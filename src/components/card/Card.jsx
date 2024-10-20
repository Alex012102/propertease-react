import React from "react";

const Card = ({ title, content, size, titleAlign }) => {
  return (
    <div className={`col-${size} mt-3`}>
      <div className="card shadow border-0">
        <div className="card-body p-2">
          <h5 className={`card-title text-${titleAlign}`}>{title}</h5>
          {content}
        </div>
      </div>
    </div>
  );
};

export default Card;
