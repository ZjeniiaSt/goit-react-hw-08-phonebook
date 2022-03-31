import { NavLink } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../redux/auth/auth-selectors";

const MuiBottomNavigation = () => {
  const [value, setValue] = useState(0);
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <nav>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          component={NavLink}
          to="/"
          label="Home"
          icon={<HomeIcon />}
        ></BottomNavigationAction>

        {isLoggedIn && (
          <BottomNavigationAction
            component={NavLink}
            to="/contacts"
            label="Contacts"
            icon={<PeopleIcon />}
          />
        )}
      </BottomNavigation>
    </nav>
  );
};

export default MuiBottomNavigation;
