import React from "react";

import { Button } from "@mui/material";
//icon
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const ThemeSwitcherBtn = ({ text, switchTheme }) => {
  return (
    <Button
      onClick={switchTheme}
      size="small"
      variant="text"
      startIcon={<DarkModeOutlinedIcon size="small" />}
    >
      {text}
    </Button>
  );
};

export default ThemeSwitcherBtn;
