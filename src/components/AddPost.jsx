import { React, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { TextField, Button } from "@mui/material";

export const AddPost = ({ render, setRender }) => {
  const [addMore, setAddMore] = useState(false);
  const [description, setDescription] = useState();

  const { token } = useSelector((state) => state.account);

  const handleSubmit = (e) => {
    try {
      e.preventDefault();

      axios
        .post(
          `${process.env.REACT_APP_BASE_URL}/posts/create`,
          {
            desc: description,
          },
          {
            headers: { Authorization: "Bearer " + token },
          }
        )
        .then((result) => {
          setAddMore(false);
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

  return addMore ? (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setDescription(e.target.value)}
          id="description"
          label="post description"
          placeholder="post description"
          margin="normal"
          required
        />
        <Button type="submit"> add </Button>
        <Button onClick={() => setAddMore(false)}> cancel</Button>
      </form>
    </div>
  ) : (
    <Button onClick={() => setAddMore(true)} variant="contained">
      Add More
    </Button>
  );
};
