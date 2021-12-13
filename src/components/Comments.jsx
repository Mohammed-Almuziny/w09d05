import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Grid, Card, Typography, Button } from "@mui/material";

export const Comments = ({ postComments, postId, render, setRender }) => {
  const { token } = useSelector((state) => state.account);

  const addComment = () => {
    try {
      let description = prompt("Please enter your comments");

      if (description) {
        axios
          .post(
            `${process.env.REACT_APP_BASE_URL}/comments/create`,
            {
              desc: description,
              ref: postId,
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

  return (
    <div>
      <Button onClick={() => addComment()} variant="contained">
        send comments
      </Button>

      <Grid container m={1} p={1}>
        {postComments.map((comment) => (
          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
            m={2}
            sx={{ border: "1px solid" }}
            key={comment._id}
          >
            <Card>
              <Typography variant="h6" p={1}>
                by {comment.creatorId.name}
              </Typography>
              <Typography variant="body" p={1}>
                {comment.desc}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
