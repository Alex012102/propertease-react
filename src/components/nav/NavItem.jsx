import React from "react";

const NavItem = ({ href, icon, label }) => {
  return (
    <li>
      <a href={href} class="nav-link px-2 d-flex align-items-center">
        {icon}
        {label}
      </a>
    </li>
  );
};

export default NavItem;
