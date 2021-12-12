import React from "react";
import { Grid, Card, Typography } from "@mui/material";

export const Comments = ({ postComments }) => {
  console.log("post", postComments);
  return (
    <Grid container>
      {postComments.map((comment) => (
        <Grid item lg={12} md={12} sm={12} xs={12} key={comment._id}>
          <Card>
            <Typography variant="h6">by {comment.creatorId.name}</Typography>
            <Typography variant="body">{comment.desc}</Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
