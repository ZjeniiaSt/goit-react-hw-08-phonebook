import { NavLink } from "react-router-dom";
import React from "react";
const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
    fontWeight: 700,
    color: "#000000",
  },
  activeLink: {
    color: "#FFFFFF",
  },
};
export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Register
      </NavLink>
      <NavLink to="/login" style={styles.link} activeStyle={styles.activeLink}>
        Login
      </NavLink>
    </div>
  );
}
