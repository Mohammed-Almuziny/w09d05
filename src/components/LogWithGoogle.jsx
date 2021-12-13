import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import popupTools from "popup-tools";
import { Typography, Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

import { login } from "./../reducers/account";

export const LogWithGoogle = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logGoogle = () => {
    console.log("google");
    popupTools.popup(
      `${process.env.REACT_APP_BASE_URL}/auth/google`,
      "Google Login",
      { width: 400, height: 600 },
      (err, response) => {
        if (response) {
          const { result, token } = response;
          const data = {
            user: result.name,
            userId: result._id,
            role: result.role.role,
            token: token,
          };
          dispatch(login({ ...data }));

          navigate("/");
        } else {
          console.log(err);
        }
      }
    );
  };

  return (
    <Typography align="center" my={2}>
      <Button onClick={() => logGoogle()} variant="contained">
        <GoogleIcon />
        <Typography> log with Google</Typography>
      </Button>
    </Typography>
  );
};
