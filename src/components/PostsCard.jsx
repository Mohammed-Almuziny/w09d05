import { React, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import {
  Grid,
  Card,
  CardActions,
  IconButton,
  Collapse,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

import { Comments } from "./Comments";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const PostsCard = ({ post, render, setRender }) => {
  console.log(post);
  const [expanded, setExpanded] = useState(false);

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

  const handleUpdate = (postId) => {
    try {
      let description = prompt("Please enter your post new description");

      if (description) {
        axios
          .put(
            `${process.env.REACT_APP_BASE_URL}/posts/update`,
            {
              postId,
              desc: description,
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

  const handleExpandClick = () => {
    setExpanded(!expanded);
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
        <Typography variant="h6">by {post.createrID.name}</Typography>
        <p>{post.desc}</p>
        <CardActions
          onClick={() => handleUpdate(post._id)}
          sx={{ display: "flex", justifyContent: "end" }}
        >
          update
        </CardActions>
        comments:
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Comments
            postComments={post.comments}
            postId={post._id}
            render={render}
            setRender={setRender}
          />
        </Collapse>
      </Card>
    </Grid>
  );
};
