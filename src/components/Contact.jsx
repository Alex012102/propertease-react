import React from "react";

const Contact = ({ index, contact }) => {
  const getInitials = (name) => {
    const names = name.split(" ");
    return names.length > 1 ? names[0][0] + names[1][0] : names[0][0];
  };

  return (
    <div className="list-group-item list-group-item-action lh-sm px-2" key={index}>
      <div className="row row-cols-2 w-100">
        <div className="col-2 p-0 d-flex align-items-center justify-content-center">
          {contact.imgURL ? (
            <img
              src={contact.imgURL}
              alt={contact.tenantName}
              className="img-fluid rounded-circle"
            />
          ) : (
            <div className="circle-placeholder bg-primary-subtle rounded-circle">
              <p className="text-center m-0 fs-4">
                {getInitials(contact.tenantName)}
              </p>
            </div>
          )}
        </div>

        <div className="col-10">
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
