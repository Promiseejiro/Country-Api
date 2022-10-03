import React from "react";
import { TextField, Stack, InputAdornment, useTheme } from "@mui/material";
// icon
import SearchIcon from "@mui/icons-material/Search";

const InputBar = ({ handleChange }) => {
  const handleInput = (e) => {
    handleChange(e.target.value);
  };
  return (
    <Stack direction="row" alignItems="center">
      <TextField
        sx={{
          fontWeight: "600",
          minWidth: "5rem",
         maxWidth:'150rem'
        }}
        id="outlined"
        placeholder="Search for a country..."
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={handleInput}
      />
    </Stack>
  );
};

export default InputBar;
