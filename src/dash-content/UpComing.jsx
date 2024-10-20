import React from "react";
import sampleCalendarEvents from "../samples/sampleCalendarEvents";

import Event from "../components/Event";

const UpComing = () => {
  return (
    <div
      className="list-group list-group-flush overflow-y-auto"
      style={{ maxHeight: "15.5rem" }}
    >
      {sampleCalendarEvents.map((event, index) => (
        <Event
          key={index} // It's important to include a unique key for each element
          index={index}
          title={event.title}
          description={event.description}
        />
      ))}
    </div>
  );
};

export default UpComing;
