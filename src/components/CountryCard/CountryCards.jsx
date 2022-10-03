import React from "react";
import { Link } from "react-router-dom";
import CountryCard from "./CountryCard";
import { Grid, Container } from "@mui/material";
const CountryCards = ({ countries }) => {
  return (
    <Container>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={3}
        color={"text.primary"}
      >
        {countries.map((country, index) => (
          <CountryCard key={index} country={country}></CountryCard>
        ))}
      </Grid>
    </Container>
  );
};

export default CountryCards;
