import { NavLink } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LoginIcon from "@mui/icons-material/Login";

const MuiAuthNav = () => {
  const [value, setValue] = useState(0);
  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          component={NavLink}
          to="/register"
          label="Sign up"
          icon={<ExitToAppIcon />}
        ></BottomNavigationAction>
        <BottomNavigationAction
          component={NavLink}
          to="/login"
          label="Log in"
          icon={<LoginIcon />}
        />
      </BottomNavigation>
    </Box>
  );
};

export default MuiAuthNav;
