import { useSelector } from "react-redux";
import MuiAuthNav from "./MuiAuthNav";
import MuiBottomNavigation from "./MuiBottomNavigation";
import MuiUserMenu from "./UserMenu/MuiUserMenu";
import { getIsLoggedIn } from "../redux/auth/auth-selectors";
import { AppBar, Toolbar } from "@mui/material";

export default function MuiAppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          p: 2,
          justifyContent: "space-between",
        }}
      >
        <MuiBottomNavigation />
        {isLoggedIn ? <MuiUserMenu /> : <MuiAuthNav />}
      </Toolbar>
    </AppBar>
  );
}
