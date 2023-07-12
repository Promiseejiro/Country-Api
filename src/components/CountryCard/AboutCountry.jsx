import React from "react";
import { Box, Typography } from "@mui/material";

const AboutCountry = ({ detail, answer }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography mr={1} component="h5"  variant="h5">
        {detail}:
      </Typography>
      <Typography component="h6" variant="h6">
        {answer}
      </Typography>
    </Box>
  );
};

export default AboutCountry;
