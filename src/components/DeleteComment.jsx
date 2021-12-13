import React from "react";
import { useSelector } from "react-redux";
import { CardActions } from "@mui/material";

export const DeleteComment = () => {
  const { role } = useSelector((state) => state.account);

  console.log(role);
  return role == "admin" ? (
    <div>
      <CardActions
        onClick={() => console.log(true)}
        sx={{ display: "flex", justifyContent: "end" }}
      >
        ❌
      </CardActions>
    </div>
  ) : (
    <div></div>
  );
};
