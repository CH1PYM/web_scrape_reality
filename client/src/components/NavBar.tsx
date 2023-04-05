import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

export const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ marginBottom: "20px" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ marginLeft: "40px", flexGrow: 1 }}
          >
            Reality
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
