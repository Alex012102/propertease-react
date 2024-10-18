import React from "react";
import ListItem from "../components/row/ListItem";
import tenantsData from "./tenantsData";

const Payments = () => {
  return (
    <div className="list-group list-group-flush">
      {tenantsData.map((row, index) => (
        <ListItem strong={row.tenantName} small={row.tenantAddress} />
      ))}
    </div>
  );
};

export default Payments;
