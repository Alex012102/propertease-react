import React from "react";
import NavItem from "./NavItem";
import navItems from "./navObject";
import "../../assets/css/nav.css";

const Navbar = () => {
  return (
    <div>
      <ul
        className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 gap-3"
        id="navigation"
      >
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            href={item.href}
            icon={item.icon}
            label={item.label}
          />
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
