import { NavLink } from "@remix-run/react";

import styles from "./MainNavigation.css";

export default function MainNavigation() {
  return (
    <div id="main-navigation">
      <ul className="nav">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/urls"
          >
            My URLS
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}
