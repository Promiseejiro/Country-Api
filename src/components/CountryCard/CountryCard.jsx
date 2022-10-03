import React from "react";

// css file
import "./card.css";
import { Grid, Card, Box, Typography } from "@mui/material";
//  router
import { Link } from "react-router-dom";
// component
import AboutCountry from "./AboutCountry";

const CountryCard = ({ country }) => {
  return (
    <Grid item xs={12} sm={6} lg={3} md={4}>
      <Link to={`/country/${country.name.common}`} className="link">
        <Card elevation={2}>
          {/* contry flag */}
          <img src={country.flags.png} alt="" className="country-flag-image" />

          {/* country name */}
          <Box ml={3} mb={3}>
            <Typography component="h3" variant="subtitle" my={1.5}>
              {country.name.common}
            </Typography>
            {/* other country details */}
            <AboutCountry
              detail="Population"
              answer={country.population}
            ></AboutCountry>
            <AboutCountry
              detail="Region"
              answer={country.region}
            ></AboutCountry>

            <AboutCountry
              detail="capital"
              answer={country.capital || "Null"}
            ></AboutCountry>
          </Box>
        </Card>
      </Link>
    </Grid>
  );
};

export default CountryCard;
