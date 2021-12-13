import { React, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Box,
  FormGroup,
  TextField,
  Typography,
  Button,
} from "@mui/material";

export const ResetPass = () => {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const { token } = useParams();

  console.log(token);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    try {
      e.preventDefault();

      axios
        .post(`${process.env.REACT_APP_BASE_URL}/login`)
        .then(() => {
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
        Reset password
      </Typography>
      <Box sx={{ bgcolor: "background.paper", p: 2 }}>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <TextField
              onChange={(e) => setPassword1(e.target.value)}
              fullWidth
              type="password"
              id="newPass"
              label="new password"
              placeholder="new password"
              margin="normal"
              required
            />
            <TextField
              onChange={(e) => setPassword2(e.target.value)}
              fullWidth
              type="password"
              id="checkpassword"
              label="check password"
              placeholder="check password"
              margin="normal"
              required
            />
          </FormGroup>

          <Typography align="center" my={2}>
            <Button variant="contained" type="submit">
              submit
            </Button>
          </Typography>
        </form>
      </Box>
    </Container>
  );
};
