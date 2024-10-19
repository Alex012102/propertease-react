import React from "react";

const MaintCard = ({ title, description, index, status, address }) => {
  const truncateText = (str = "", num) => {
    if (!str || str.length <= num) return str;
    return str.slice(0, num) + "...";
  };

  const statusStyles = {
    New: "bg-primary text-white rounded px-3",
    Pending: "bg-warning text-dark rounded px-3",
    Assigned: "bg-info text-white rounded px-3",
    Completed: "bg-success text-white rounded px-3",
    "In Progress": "bg-secondary text-white rounded px-3",
  };

  return (
    <div
      className="card card-hover shadow border-0 mb-3"
      //   style={{ maxWidth: "18rem" }}
      key={index}
    >
      <div className="position-absolute top-0 end-0 mt-2 me-2">
        <div className="dropdown">
          <button
            className="btn btn-link text-dark p-0"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div className="d-flex flex-column gap-1">
              <div
                className="bg-dark rounded-circle"
                style={{ width: "3px", height: "3px" }}
              ></div>
              <div
                className="bg-dark rounded-circle"
                style={{ width: "3px", height: "3px" }}
              ></div>
              <div
                className="bg-dark rounded-circle"
                style={{ width: "3px", height: "3px" }}
              ></div>
            </div>
          </button>
          <ul className="dropdown-menu">
            <li>
              <button className="dropdown-item">Action</button>
            </li>
            <li>
              <button className="dropdown-item">Another action</button>
            </li>
            <li>
              <button className="dropdown-item">Something else</button>
            </li>
          </ul>
        </div>
      </div>

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{truncateText(description, 100)}</p>
        <p className="card-text text-end text-secondary">{address}</p>
      </div>
      <div className="card-footer">
        <div className="d-flex flex-row justify-content-between align-items-center">
          <div
            className={`status-badge ${
              statusStyles[status] || "bg-light text-dark rounded-pill px-3"
            }`}
          >
            {status}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default MaintCard;
