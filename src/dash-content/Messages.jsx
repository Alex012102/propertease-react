import React from "react";

import tenantsData from "./tenantsData";
import Contact from "../components/Contact";

const Messages = () => {
  return (
    <div
      class="list-group list-group-flush overflow-y-auto"
      style={{ maxHeight: "16rem" }}
    >
      {tenantsData.map((contact, index) => (
        <Contact index={index} contact={contact} />
      ))}
    </div>
  );
};

export default Messages;
