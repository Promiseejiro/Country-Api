import React from "react";
import { Stack, Container, Box, Grid, Typography, Button } from "@mui/material";
import "./skelecton.css";

// components
import  SkelectonInfo from './skelectonInfo'

const LoaderCard = () => {
  return (
    <Stack
      my={5}
      direction={{ sm: "column", md: "row", lg: "row" }}
      spacing={5}
      justifyContent="space-between"
    >
      <div className="skelecton-img"></div>
      <Grid container alignItems="center" spacing={3}>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          my={{ xs: "1rem", sm: "1rem" }}
        >
          <Typography variant="h4" mb={{ lg: "-5rem" }}></Typography>
        </Grid>

        <Grid item lg={6} md={6} sm={12} xs={12} my={3}>
          <SkelectonInfo></SkelectonInfo>
          <SkelectonInfo></SkelectonInfo>
          <SkelectonInfo></SkelectonInfo>
          <SkelectonInfo></SkelectonInfo>
          <SkelectonInfo></SkelectonInfo>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <SkelectonInfo></SkelectonInfo>
          <SkelectonInfo></SkelectonInfo>
          <SkelectonInfo></SkelectonInfo>
        </Grid>

        <Grid item my={3} lg={12} md={12} sm={12} xs={12} mt={{ lg: "-2rem" }}>
          <Stack direction="row" spacing={0}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <button className="sk-btn"></button>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default LoaderCard;
