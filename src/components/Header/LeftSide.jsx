import React from "react";
import { useSelector } from "react-redux";
import { Link } from "@mui/material";

export const LeftSide = () => {
  const { role } = useSelector((state) => state.account);

  return role === "admin" ? (
    <>
      <Link color="inherit" underline="none" href="/" mr={2}>
        home
      </Link>
    </>
  ) : (
    <>
      <Link color="inherit" underline="none" href="/" mr={2}>
        home
      </Link>
    </>
  );
};
