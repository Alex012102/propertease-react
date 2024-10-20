import React from "react";

const Event = ({ index, title, description }) => {
  return (
    <div className="list-group-item list-group-item-action" key={index}>
      <div className="d-flex">
        <div className="d-flex flex-column align-items-center justify-content-center lh-1">
          <small className="text-primary fw-semibold">OCT</small>
          <small className="text-primary fw-semibold fs-5">3</small>
        </div>
        <div className="d-flex flex-column w-100 lh-1 ps-3">
          <h5 className="mb-1 fs-6">{title}</h5>
          <p className="mb-1 fs-7">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Event;
