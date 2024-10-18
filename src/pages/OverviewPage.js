import React from "react";

import Card from "../components/card/Card";

const Overview = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2 mt-3">
      <div className="col col-4">
        <Card title="Up Coming" />
        <Card title="Service Requests" />
        <Card title="Messages" />
      </div>
      <div className="col col-8">

      </div>
    </div>
  );
};

export default Overview;