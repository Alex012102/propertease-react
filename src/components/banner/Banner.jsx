import React from "react";
import "../../assets/css/banner.css";
import metricObjects from "../card/metricObject";

import MetricsCard from "../card/MetricsCard";

const Banner = () => {
  return (
    <div className="row">
      <div className="col col-4">
        <div className="row row-cols-2">
          <div className="col col-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-person-circle"
              viewBox="0 0 16 16"
              id="userPFP"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"></path>
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              ></path>
            </svg>
          </div>
          <div className="col col-8">
            <h3 className="mb-0">Account Dashboard</h3>
            <p className="m-0">Weclcome, John</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="row gap-3 justify-content-end">
          {metricObjects.map((item, index) => (
            <MetricsCard key={index} title={item.title} value={item.value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
