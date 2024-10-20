import React from "react";

import sampleTenantData from "../samples/sampleTenantData";
import Contact from "../components/Contact";

const Messages = () => {
  return (
    <div
      class="list-group list-group-flush overflow-y-auto"
      style={{ maxHeight: "18.9rem" }}
    >
      {sampleTenantData.map((contact, index) => (
        <Contact index={index} contact={contact} />
      ))}
    </div>
  );
};

export default Messages;
