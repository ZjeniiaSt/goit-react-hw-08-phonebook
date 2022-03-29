import { createTheme } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    background: {
      paper: blueGrey[500],
    },
    primary: {
      main: blueGrey[600],
    },
  },
});

export default theme;
