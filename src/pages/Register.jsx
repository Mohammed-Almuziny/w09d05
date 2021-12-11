import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Box,
  FormGroup,
  TextField,
  Typography,
  Button,
} from "@mui/material";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/register`, { email, password })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/logIn");
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h3" align="center" mb={2}>
        register
      </Typography>
      <Box sx={{ bgcolor: "background.paper", p: 2 }}>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              type="email"
              id="email"
              label="email"
              placeholder="Email"
              margin="normal"
              required
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              type="password"
              id="password"
              label="password"
              placeholder="password"
              margin="normal"
              required
            />
          </FormGroup>
          <Typography align="center" my={2}>
            <Button variant="contained" type="submit">
              register
            </Button>
          </Typography>
        </form>
      </Box>
    </Container>
  );
};
