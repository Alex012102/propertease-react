import React from "react";
import PropCard from "../components/card/PropCard";
import samplePropInfo from "../samples/samplePropInfo.js"

const Properties = () => {
  return (
    <div
    class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3"
    id="properties"
  >
      {samplePropInfo.map((property, index) => (
        <div className="col" key={index}>
          <PropCard property={property} />
        </div>
      ))}
    </div>
  );
};

export default Properties;