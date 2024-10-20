import React from "react";
import sampleWorkOrders from "../samples/sampleWorkOrders";

import MaintCard from "../components/card/MaintCard";

const Maintenance = () => {
  return (
    <div className="row row-cols-1 row-cols-md-3 mt-3">
      <div className="col">
        <h4>Low Priority</h4>
        <div>
          {sampleWorkOrders
            .filter((workOrder) => workOrder?.priority?.toLowerCase() === "low")
            .map((workOrder, index) => (
              <MaintCard
                title={workOrder.title}
                description={workOrder.description}
                index={index}
                status={workOrder.status}
                address={workOrder.address.streetAddress}
              />
            ))}
        </div>
      </div>
      <div className="col">
        <h4>Medium Priority</h4>
        <div>
          {sampleWorkOrders
            .filter(
              (workOrder) => workOrder?.priority?.toLowerCase() === "medium"
            )
            .map((workOrder, index) => (
              <MaintCard
                title={workOrder.title}
                description={workOrder.description}
                index={index}
                status={workOrder.status}
                address={workOrder.address.streetAddress}
              />
            ))}
        </div>
      </div>
      <div className="col">
        <h4>High Priority</h4>
        <div>
          {sampleWorkOrders
            .filter(
              (workOrder) => workOrder?.priority?.toLowerCase() === "high"
            )
            .map((workOrder, index) => (
              <MaintCard
                title={workOrder.title}
                description={workOrder.description}
                index={index}
                status={workOrder.status}
                address={workOrder.address.streetAddress}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
