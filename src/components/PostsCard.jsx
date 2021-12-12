import React from "react";
import { Grid, Card } from "@mui/material";

export const PostsCard = ({ post }) => {
  return (
    <Grid item lg={12} md={12} sm={12} xs={12}>
      <Card>
        <p>{post.desc}</p>
      </Card>
    </Grid>
  );
};
