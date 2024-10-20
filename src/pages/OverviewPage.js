import React from "react";

import Card from "../components/card/Card";
import Payments from "../dash-content/Payments";
import ServiceRequests from "../dash-content/ServiceRequest";
import Messages from "../dash-content/Messages";
import Event from "../components/Event";
import UpComing from "../dash-content/UpComing";
import Vendors from "../dash-content/Vendors";
import ContactUs from "../dash-content/ContactUs";

const Overview = () => {
  return (
    <div className="row row-cols-1 row-cols-lg-2">
      {/* Left Side Column */}
      <div className="col-lg-3 pe-1">
        <Card title="Up Coming" content={<UpComing />} />
        <Card title="Service Requests" content={<ServiceRequests />} />
        <Card title="Messages" content={<Messages />} />
      </div>
      {/* Right Side Column */}
      <div className="col-lg-9 px-1">
        <div className="row row-cols-1 row-cols-lg-3 g-3">
          {" "}
          {/* Use 'g-3' for consistent gap */}
          <Card title="Expenses" size="lg-6" />
          <Card title="Notifications" size="lg-4" />
          <Card title="Metrics" size="lg-2" titleAlign="center" />
          <Card title="Vendors" content={<Vendors />} size="lg-4" />
          <Card title="Payments" content={<Payments />} size="lg-6" />
          <Card
            title="Contact Us"
            content={<ContactUs />}
            size="lg-2"
            titleAlign="center"
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
