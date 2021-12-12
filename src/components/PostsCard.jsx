import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Grid, Card, CardActions } from "@mui/material";

export const PostsCard = ({ post, render, setRender }) => {
  const { token } = useSelector((state) => state.account);

  const handleDelete = (postId) => {
    try {
      axios
        .delete(`${process.env.REACT_APP_BASE_URL}/posts/${postId}`, {
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

  return (
    <Grid item lg={12} md={12} sm={12} xs={12}>
      <Card>
        <CardActions
          onClick={() => handleDelete(post._id)}
          sx={{ display: "flex", justifyContent: "end" }}
        >
          ❌
        </CardActions>
        <p>{post.desc}</p>
      </Card>
    </Grid>
  );
};
