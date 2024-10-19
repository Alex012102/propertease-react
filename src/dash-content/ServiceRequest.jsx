import React from "react";

const ServiceRequests = (workOrders) => {
  return (
    <div className="d-flex justify-content-around px-4">
      <div className="d-flex flex-column align-items-center">
        <div className="fs-3 fw-bold text-info m-0">#</div>
        <p className="fw-medium m-0">New</p>
      </div>

      <div className="d-flex flex-column align-items-center">
        <div className="fs-3 fw-bold text-info m-0">#</div>
        <p className="fw-medium m-0">Scheduled</p>
      </div>

      <div className="d-flex flex-column align-items-center">
        <div className="fs-3 fw-bold text-info m-0">#</div>
        <p className="fw-medium m-0">Waiting</p>
      </div>

      <div className="d-flex flex-column align-items-center">
        <div className="fs-3 fw-bold text-info m-0">#</div>
        <p className="fw-medium m-0">Assigned</p>
      </div>
    </div>
  );
};

export default ServiceRequests;
