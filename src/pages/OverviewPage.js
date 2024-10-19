import React from "react";

import Card from "../components/card/Card";
import Payments from "../dash-content/Payments";
import ServiceRequests from "../dash-content/ServiceRequest";
import Messages from "../dash-content/Messages";

const Overview = () => {
  return (
    <div className="row row-cols-1 row-cols-lg-2 mt-3">
      <div className="col col-lg-4">
        <Card title="Up Coming" />
        <Card title="Service Requests" content={<ServiceRequests />} />
        <Card title="Messages" content={<Messages />} />
      </div>
      <div className="col col-lg-8">
        <div className="row row-cols-1 row-cols-lg-3 gap-3">
          <Card title="Expenses" />
          <Card title="Notifications" />
          <Card title="Metrics" />
        </div>
        <div className="row row-cols-1 row-cols-lg-3 gap-3">
          <Card title="Vendors" />
          <Card title="Payments" content={<Payments />} />
          <Card title="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default Overview;
