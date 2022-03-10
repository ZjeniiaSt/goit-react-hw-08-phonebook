import { NavLink } from "react-router-dom";
import { Typographe } from "@mui/material";

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

const Navigation = () => (
  <nav>
    <NavLink to="/" style={styles.link} activestyle={styles.activeLink}>
      Home
    </NavLink>
    <NavLink to="/contacts" style={styles.link} activestyle={styles.activeLink}>
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
