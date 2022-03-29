import { useDispatch } from "react-redux";
import { useState } from "react";
import { logIn } from "../redux/auth/auth-operations";
import { TextField, Button, Box, Card, CardContent, Grid } from "@mui/material";

function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <Box padding={5}>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit} autoComplete="off">
            <Grid container spacing={2} direction="column" alignItems="stretch">
              <Grid xs={12} sm={6} item>
                <TextField
                  fullWidth
                  required
                  label="Email"
                  variant="outlined"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  fullWidth
                  required
                  label="Password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid xs={12} item margin="auto">
                <Button type="submit" variant="contained">
                  Log In
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}

export default LoginView;
