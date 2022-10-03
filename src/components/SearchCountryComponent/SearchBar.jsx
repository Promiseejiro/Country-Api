import React from "react";

import { Grid, Container } from "@mui/material";
// input component
import InputBar from "./InputBar";
import SelectBar from "./SelectBar";

const SearchBar = ({ handleChange, filterByRegion }) => {
  return (
    <Container sx={{ my: 4 }}>
      <Grid
        container
        spacing={3}
        justifyContent="space-between"
        alignItems="center"
      direction={{
        lg:'row',
        md:'row',
        sm:"column"
      }}
      >
        <Grid item lg={10} md={9} sm={8} xs={11}>
          <InputBar handleChange={handleChange}></InputBar>
        </Grid>
        <Grid item lg={2} md={3} sm={3} xs={5}>
          <SelectBar filterByRegion={filterByRegion}></SelectBar>
        </Grid>
      </Grid>
    </Container>
  );
};
export default SearchBar;
