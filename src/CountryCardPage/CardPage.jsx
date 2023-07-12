import React from "react";
import { Link, useParams } from "react-router-dom";
// css file
import "./countryCardpage.css";
import { useState, useEffect } from "react";
import { Container, Box, Button, Grid, Typography, Stack } from "@mui/material";
import CountryInfo from "./CountryInfo";
import LoaderCard from "../components/loader/DetailsLoder";
// utils
const CardPage = () => {
  // state
  const [country, setCountry] = useState({});
  const [tld, setTld] = useState([]);
  const [singleCountry, setSingleCountry] = useState({});
  const [borderCountries, setBorderCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { countryId } = useParams();

  // variables
  const arr = [];

  // functions
  const fetchSingleCountry = async () => {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${countryId}?fullText=true`
    );
    const data = await res.json();
    const [newSingleCountry] = await data;
    const {
      name,
      flags,
      population,
      languages,
      tld,
      region,
      subregion,
      currencies,
      borders,
      capital,
    } = await newSingleCountry;

    setSingleCountry(newSingleCountry);
    if (tld !== undefined) {
      setTld(
        tld.map((domain) => {
          return domain;
        }) || null
      );
    }
    if (newSingleCountry.borders !== undefined) {
      await newSingleCountry.borders.map(async (borderCountriesCode) => {
        const borderCountriesResponse = await fetch(
          `https://restcountries.com/v3.1/alpha/${borderCountriesCode}`
        );
        const borderCountriesData = await borderCountriesResponse.json();
        const [newBorderCountries] = await borderCountriesData;
        await arr.push(newBorderCountries.name.common);
        setBorderCountries(arr);
      });
    }
    setCountry({
      name: name.common,
      flag: flags.svg,
      population: population,
      region: region,
      subregion: subregion,
      borders: borders ? borderCountries : null,
      tld: tld,
      currency: Object.values(currencies).map((currency) => {
        return currency.name;
      }),
      capital:
        capital.map((cap) => {
          return cap;
        }) || null,
      language: Object.values(languages),
    });

    setIsLoading(false);
  };

  // useState
  useEffect(() => {
    fetchSingleCountry();
  }, [countryId]);

  const func = async () => {};

  useEffect(() => {
    func();
  }, [borderCountries]);

  return (
    <Box mt={4}>
      <Container>
        <Box>
          <Link to="/" className="link">
            <Button variant="contained">Back</Button>
          </Link>
          {isLoading ? (
            <LoaderCard></LoaderCard>
          ) : (
            <Stack
              my={5}
              direction={{ sm: "column", md: "row", lg: "row" }}
              spacing={5}
            >
              <img src={country.flag} alt="COUNTRY FLAG" />
              <Grid container alignItems="center">
                <Grid
                  item
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  my={{ xs: "1rem", sm: "1rem" }}
                >
                  <Typography variant="h4" mb={{ lg: "-5rem" }}>
                    {country.name}
                  </Typography>
                </Grid>

                <Grid item lg={6} md={6} sm={12} xs={12} my={3}>
                  <CountryInfo
                    details="Native Name:"
                    answer={country.name}
                  ></CountryInfo>

                  <CountryInfo
                    details="Population:"
                    answer={country.population}
                  ></CountryInfo>

                  <CountryInfo
                    details="Region:"
                    answer={country.region}
                  ></CountryInfo>

                  <CountryInfo
                    details="Sub Region:"
                    answer={country.subregion}
                  ></CountryInfo>
                  <CountryInfo
                    details="capital:"
                    answer={country.capital}
                  ></CountryInfo>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <CountryInfo
                    details="top Lev Domain:"
                    answer={country.tld}
                  ></CountryInfo>
                  <CountryInfo
                    details="Currencies:"
                    answer={country.currency}
                  ></CountryInfo>
                  <Stack direction="row">
                    <Typography variant="h5"> Languages :</Typography>
                    {country.language}
                  </Stack>
                </Grid>

                <Grid
                  item
                  my={3}
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  mt={{ lg: "-2rem" }}
                >
                  <Stack direction="row" spacing={0}>
                    <Typography variant="='h5"> Border country:</Typography>
                    <Grid container spacing={2}>
                      {borderCountries.map((borderCountry, index) => (
                        <Grid key={index} item xs={2}>
                          <Link
                            to={`/country/${borderCountry}`}
                            className="link"
                          >
                            <Button>{borderCountry}</Button>
                          </Link>
                        </Grid>
                      ))}
                    </Grid>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default CardPage;
