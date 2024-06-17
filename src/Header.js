/* eslint-disable prettier/prettier */
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundImage: 'linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%)' }}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
            Delicious Food
          </Typography>
          <Button color="inherit" sx={{ marginLeft: 'auto'}}>LOGIN</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
