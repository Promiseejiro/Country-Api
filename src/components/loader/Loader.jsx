import React from "react";

import { Container, Typography } from "@mui/material";

const Loader = () => {
  return (
    <Container
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h3">Loading...</Typography>
    </Container>
  );
};

export default Loader;
