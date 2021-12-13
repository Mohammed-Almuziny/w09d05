import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Container,
  Box,
  FormGroup,
  TextField,
  Typography,
  Button,
} from "@mui/material";

import { login } from "./../reducers/account";

export const Login = ({ setUser, setRole, setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    try {
      e.preventDefault();

      axios
        .post(`${process.env.REACT_APP_BASE_URL}/login`, {
          nameOrEmail: email,
          password,
        })
        .then((response) => {
          const data = {
            user: response.data.result.email,
            userId: response.data.result._id,
            role: response.data.result.role.role,
            token: response.data.token,
          };

          dispatch(login({ ...data }));

          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h3" align="center" mb={2}>
        log in
      </Typography>
      <Box sx={{ bgcolor: "background.paper", p: 2 }}>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              id="userNameOrEmail"
              label="user name or email"
              placeholder="user name or email"
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
              log in
            </Button>
          </Typography>
        </form>
      </Box>
    </Container>
  );
};
