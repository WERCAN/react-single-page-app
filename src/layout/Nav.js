import React from "react";
import { NavLink } from "react-router-dom";

const navs = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/contact", name: "Contact" },
];

const Nav = () => (
  <nav>
    <ul>
      {navs.map((navItem) => (
        <li>
          <NavLink exact to={navItem.path} activeClassName="selected">
            {navItem.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
