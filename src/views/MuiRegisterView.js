import { Box, TextField, Button, Card, CardContent, Grid } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/auth/auth-operations";

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Box padding={5}>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} direction="column" alignItems="stretch">
              <Grid xs={10} sm={5} item>
                <TextField
                  fullWidth
                  required
                  label="Name"
                  variant="outlined"
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid xs={10} sm={5} item>
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
              <Grid xs={10} sm={5} item>
                <TextField
                  fullWidth
                  required
                  label="Password"
                  variant="outlined"
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid xs={10} item margin="auto">
                <Button type="submit" variant="contained">
                  Register
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
