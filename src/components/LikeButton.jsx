import { React, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import axios from "axios";

export const LikeButton = ({ postId, likes, render, setRender }) => {
  const [isLiked, setIsLiked] = useState(false);

  const { token } = useSelector((state) => state.account);

  const checkLike = () => {
    try {
      axios
        .post(
          `http://localhost:5000/posts/checkLike`,
          { postId },
          {
            headers: { Authorization: "Bearer " + token },
          }
        )
        .then((result) => {
          setRender(render + 1);
          setIsLiked(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleLike = () => {
    try {
      axios
        .post(
          `${process.env.REACT_APP_BASE_URL}/posts/like`,
          {
            postId,
          },
          {
            headers: { Authorization: "Bearer " + token },
          }
        )
        .then((result) => {
          setRender(render + 1);
          setIsLiked(!isLiked);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    checkLike();
    // eslint-disable-next-line
  }, []);

  return isLiked ? (
    <Box sx={{ display: "flex" }}>
      <Typography>{likes.length}</Typography>
      <Typography onClick={() => handleLike()} attribute="button">
        ❤️
      </Typography>
    </Box>
  ) : (
    <Box sx={{ display: "flex" }}>
      <Typography>{likes.length}</Typography>
      <Typography onClick={() => handleLike()} attribute="button">
        🤍
      </Typography>
    </Box>
  );
};
