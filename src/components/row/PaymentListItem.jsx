import React from "react";

const PaymentListItem = ({ index, tenant }) => {
  return (
    <div
      className="list-group-item list-group-item-action d-flex flex-row lh-sm"
      key={index}
      aria-current="true"
    >
      <div
        className="d-flex flex-column w-100 align-items-start justify-content-between"
        // style={ minWidth: '150px'}
      >
        <strong className="mb-1">{tenant.tenantName}</strong>
        <small className="text-body-secondary">
          {tenant.tenantAddress.split(",").slice(0, -1).join(",").trim()}
        </small>
      </div>
      <div
        className="mx-3"
        style={{ width: "20px", backgroundColor: "#67b800" }}
      ></div>
      <div className="d-flex flex-column w-100 align-items-start justify-content-between">
        <span className="mb-1">${tenant.tenantBalance}</span>
        <small className="text-nowrap text-body-secondary">
          {tenant.leaseTerm.start} - {tenant.leaseTerm.end}
        </small>
      </div>
    </div>
  );
};

export default PaymentListItem;
