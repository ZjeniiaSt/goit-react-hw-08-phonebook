import { NavLink } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import { useState } from "react";

const MuiBottomNavigation = () => {
  const [value, setValue] = useState(0);
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
        <BottomNavigationAction
          component={NavLink}
          to="/contacts"
          label="Contacts"
          icon={<PeopleIcon />}
        />
      </BottomNavigation>
    </nav>
  );
};

export default MuiBottomNavigation;
