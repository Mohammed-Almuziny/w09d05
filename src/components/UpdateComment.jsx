import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { CardActions, Typography } from "@mui/material";

export const UpdateComment = ({ creatorId, commentId, render, setRender }) => {
  const { userId, role, token } = useSelector((state) => state.account);

  const handleUpdate = () => {
    try {
      console.log("true");
      let description = prompt("Please enter your comment new description");

      if (description) {
        axios
          .put(
            `${process.env.REACT_APP_BASE_URL}/comments`,
            {
              commentId,
              newDesc: description,
            },
            {
              headers: { Authorization: "Bearer " + token },
            }
          )
          .then((result) => {
            setRender(render + 1);
            console.log(result);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return role === "admin" || userId === creatorId ? (
    <div>
      <CardActions
        onClick={() => handleUpdate()}
        sx={{ display: "flex", justifyContent: "end" }}
        className="pointer"
      >
        <Typography className="pointer">update</Typography>
      </CardActions>
    </div>
  ) : (
    <div></div>
  );
};
