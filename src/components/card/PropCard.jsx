import React from "react";

const PropCard = ({ property }) => {
  return (
    <div className="card p-0 shadow border-0">
      <img
        src={property.photo}
        className="card-img-top"
        alt={property.streetAddress}
      />
      <div className="card-body">
        <h5 className="card-title m-0">{property.streetAddress}</h5>
        <p className="text-secondary m-0">
          {property.city}, {property.state} {property.zipCode}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          {property.bedrooms} <span className="text-secondary">bds</span> |{" "}
          {property.bathrooms}
          <span className="text-secondary"> ba</span> | {property.sqft}
          <span className="text-secondary"> sqft</span>
        </li>
        <li className="list-group-item">
          ${property.rentValue} <span className="text-secondary">/month</span>
        </li>
        <li
          className={`list-group-item fw-semibold ${
            property.occupied ? "text-success" : "text-danger"
          }`}
        >
          {property.occupied ? "Occupied" : "Vacant"}
        </li>
      </ul>
    </div>
  );
};

export default PropCard;
