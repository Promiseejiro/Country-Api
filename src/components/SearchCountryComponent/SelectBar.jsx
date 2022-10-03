import React from "react";

// hook
import { useState, useEffect } from "react";

import {
  Typography,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";

const SelectBar = ({ filterByRegion }) => {
  const regions = ["All", "Africa", "Americas", "asia", "Europe", "Oceania"];
  // state
  const [region, setRegion] = useState("All");

  const handleChange = (e) => {
    setRegion(e.target.value);
    filterByRegion(e.target.value);
  };
  return (
    <FormControl
      sx={{
        minWidth: 15,
        // maxWidth: 160,
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <InputLabel
        id="demo-simple-select-label"
        sx={{
          fontWeight: "600",
        }}
      >
        Filter By Region
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Where in the world"
        onChange={handleChange}
        value={region}
      >
        {regions.map((region, index) => (
          <MenuItem
            sx={{
              // fontFamily: " Nunito Sans, sans-serif",
              fontWeight: "600",
            }}
            value={region}
            key={index}
          >
            {region}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectBar;
