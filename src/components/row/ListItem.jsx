import React from "react";

const ListItem = ({ strong, small }) => {
  return (
    <div className="list-group-item list-group-item-action row lh-sm">
      <div className="col align-items-start">
        <strong className="mb-1">{strong}</strong>
        <small className="text-body-secondary">{small}</small>
      </div>
    </div>
  );
};

export default ListItem;
