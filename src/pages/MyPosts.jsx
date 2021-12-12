import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Container, Box, Grid, Typography } from "@mui/material";

import { AddPost } from "./../components/AddPost";
import { PostsCard } from "./../components/PostsCard";

export const MyPosts = () => {
  const [render, setRender] = useState(0);
  const [posts, setPosts] = useState([]);

  const { user, token } = useSelector((state) => state.account);

  const dispatch = useDispatch();

  const getPosts = () => {
    try {
      axios
        .get(`${process.env.REACT_APP_BASE_URL}/posts/userposts/`, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((result) => {
          setPosts(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (token) getPosts();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, [render]);

  return user ? (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <AddPost render={render} setRender={setRender} />
      </Box>
      <Grid container>
        {
          posts.map((post) => (
            <PostsCard post={post} key={post._id} />
          ))
          // <TodoCard
          //   todo={todo}
          //   render={render}
          //   setRender={setRender}
          //   key={todo._id}
          // />
        }
      </Grid>
    </Container>
  ) : (
    <Typography>you have to log in</Typography>
  );
};
