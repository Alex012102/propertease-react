import React from "react";

const ListItem = ({ index, href, A1, A2, B1, B2 }) => {
  return (
    <a
      href={href}
      class="list-group-item list-group-item-action lh-sm"
      aria-current="true"
      key={index}
    >
      <div class="d-flex w-100 align-items-center justify-content-between">
        <strong class="mb-1">{A1}</strong>
        <small class="text-primary">{B1}</small>
      </div>
      <div class="d-flex w-100 align-items-center justify-content-between">
        <small class="">{A2}</small>
        <span class="mb-1">{B2}</span>
      </div>
    </a>
  );
};

export default ListItem;
