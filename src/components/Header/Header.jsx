import React from "react";
import { Typography, Container, AppBar, Stack } from "@mui/material";

// component
import ThemeSwitcherBtn from "./SwitchThemeBtn";

const Header = ({ text, switchTheme }) => {
  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: 1,
      }}
    >
      <Container>
        <Stack
          justifyContent="space-between"
          alignItems="center"
          flexDirection="row"
          sx={{ py: 2 }}
        >
          <Typography variant="h4">where in the world?</Typography>
          <ThemeSwitcherBtn switchTheme={switchTheme} text={text}></ThemeSwitcherBtn>
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Header;
