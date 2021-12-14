import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { CardActions } from "@mui/material";

export const DeleteComment = ({ creatorId, commentId, render, setRender }) => {
  const { userId, role, token } = useSelector((state) => state.account);

  const handleDelete = (postId) => {
    try {
      axios
        .delete(`${process.env.REACT_APP_BASE_URL}/comments//${commentId}`, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((result) => {
          setRender(render + 1);
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return role === "admin" || userId === creatorId ? (
    <div>
      <CardActions
        onClick={() => handleDelete()}
        sx={{ display: "flex", justifyContent: "end" }}
        className="pointer"
      >
        ❌
      </CardActions>
    </div>
  ) : (
    <div></div>
  );
};
