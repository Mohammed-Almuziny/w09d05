import React from "react";
import { AppBar, Typography, Box, Toolbar } from "@mui/material";

import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";

export const Header = () => {
  return (
    <header className="App">
      <Box sx={{ flexGrow: 1, pb: 4 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" mr={2}>
              socialSite
            </Typography>

            <LeftSide />

            <Typography sx={{ flexGrow: 1 }}></Typography>

            <RightSide />
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
};
