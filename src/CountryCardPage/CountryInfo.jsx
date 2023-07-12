import React from "react";
import { Box, Typography } from "@mui/material";
const CountryInfo = ({ details, answer }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" mr={1}>
        {details}
      </Typography>
      <Typography variant="h6">{answer}</Typography>
    </Box>
  );
};

export default CountryInfo;
