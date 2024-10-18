import React from "react";

const MetricsCard = ({title, value}) => {
  return (
    <div className="card col metrics border-0 shadow">
      <div className="card-body">
        <p className="m-0 text-start">{title}</p>
        <p className="card-text fs-5 text-start">{value}</p>
      </div>
    </div>
  )
}

export default MetricsCard;