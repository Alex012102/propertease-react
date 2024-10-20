import React from "react";
import ListItem from "../components/row/ListItem";
import sampleTenantData from "../samples/sampleTenantData";
import PaymentListItem from "../components/row/PaymentListItem";

const Payments = () => {
  return (
    <div
      className="list-group list-group-flush overflow-y-auto"
      style={{ maxHeight: "18rem" }}
    >
      {sampleTenantData.map((tenant, index) => (
        <PaymentListItem tenant={tenant} index={index} />
      ))}
    </div>
  );
};

export default Payments;
