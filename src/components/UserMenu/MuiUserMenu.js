import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "../../redux/auth/auth-selectors";
import { logOut } from "../../redux/auth/auth-operations";
import defaultAvatar from "./default-avatar.png";
import { Avatar, Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";

export default function MuiUserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  const avatar = defaultAvatar;
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography> Welcome, {name}</Typography>
      <Avatar
        alt="avatar"
        src={avatar}
        sx={{ width: 32, height: 32, marginLeft: 1, marginRight: 3 }}
      />
      <Button onClick={() => dispatch(logOut())} sx={{ color: "white" }}>
        <LogoutIcon />
      </Button>
    </Box>
  );
}
