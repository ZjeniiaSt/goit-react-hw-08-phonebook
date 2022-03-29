import PropTypes from "prop-types";
import { Container, Typography, Box } from "@mui/material";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";

function MuiLayout({ title, children }) {
  return (
    <Container maxWidth="md">
      <Box paddingY={3}>
        <Typography variant="h4" component="h1" align="center">
          <MobileFriendlyIcon /> {title}
        </Typography>
      </Box>
      {children}
    </Container>
  );
}

export default MuiLayout;
MuiLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
