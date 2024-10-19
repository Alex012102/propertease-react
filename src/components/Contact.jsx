import React from "react";

const Contact = ({ index, contact }) => {
  return (
    <div className="list-group-item list-group-item-action lh-sm" key={index}>
      <div className="row row-cols-2">
        <div className="col-2"></div>
        <div className="col w-100">
          <div className="d-flex w-100 align-items-center justify-content-between">
            <strong className="mb-1">{contact.tenantName}</strong>
            <small className="text-body-secondary">{contact.timeSent}</small>
          </div>
          <div className="small">{contact.mostRecentMessage}</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
