import React from "react";

const VendorListItem = ({ index, vendor }) => {
  return (
    <div
      className="list-group-item list-group-item-action lh-sm"
      aria-current="true"
      key={index}
    >
      <div className="d-flex w-100 align-items-center justify-content-between">
        <strong>{vendor.name}</strong>
        {vendor.invoicePayable && (
          <small className="text-primary">Payable</small>
        )}
      </div>
      <div className="d-flex w-100 align-items-center justify-content-between">
        <small>{vendor.phone}</small>
        <span>{vendor.primaryService}</span>
      </div>
    </div>
  );
};

export default VendorListItem;
