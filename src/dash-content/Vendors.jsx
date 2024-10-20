import React from "react";
import sampleVendorList from "../samples/sampleVendorList";

import VendorListItem from "../components/row/VendorListItem";

const Vendors = () => {
  return (
    <div
      className="list-group list-group-flush overflow-y-auto"
      style={{ maxHeight: "18rem" }}
    >
      {sampleVendorList.map((vendor, index) => (
        <VendorListItem index={index} vendor={vendor} />
      ))}
    </div>
  );
};

export default Vendors;
