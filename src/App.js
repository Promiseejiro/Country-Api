// css file
import "./App.css";

import React from "react";

import { useState, useEffect } from "react";

// theme
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import theme from "./Theme";
import CssBaseline from "@mui/material/CssBaseline";
import { Typogrphy, Box } from "@mui/material";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

//component
import CountryCards from "./components/CountryCard/CountryCards";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchCountryComponent/SearchBar";
import Loader from "./components/loader/Loader";
import Paginate from "./components/pagination/Pagination";
import CardPage from "./CountryCardPage/CardPage";
function App() {
  // states
  const [darkMode, setDarkMode] = useState("dark");
  const [isLoading, setIsLoading] = useState(true);
  const [themeText, setTheme] = useState("Dark mode");
  const [mode, setMode] = useState(true);
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(12);
  const [indexOfFirstPost, setIndexOfFirstPage] = useState(0);
  const [indexOfLastPost, setIndexOfLastPage] = useState(12);
  const [count, setCount] = useState(0);
  const [filteredCountries, setFilteredCountries] = useState([]);

  const theme = createTheme({
    palette: {
      mode: darkMode,
      primary: {
        main: mode ? "#fff" : "hsl(209, 23%, 22%)",
        light: "hsl(200, 15%, 8%)",
        dark: " hsl(0, 0%, 100%)",
        input: "#000",
        contrastText: "#111517",
      },
    },
    typography: {
      fontFamily: " Nunito Sans, sans-serif",
      button: {
        boxShadow: 1,
        px: 1,
        py: 0.5,
        fontWeight: 600,
        textTransform: "capitalize",
      },
      h4: {
        fontSize: "20px",
        fontWeight: "800",
      },
      h5: {
        fontWeight: "600",
        fontSize: "16px",
      },
      h6: {
        fontWeight: "600",
        fontSize: "14px",
      },
    },
  });

  const paginateHandler = (event, value) => {
    setCurrentPage(value);
    setIndexOfFirstPage(postPerPage * value);
    setIndexOfLastPage(postPerPage * value + 12);
    setFilteredCountries(countries.slice(indexOfFirstPost, indexOfLastPost));
  };

  const switchTheme = () => {
    if (darkMode === "dark") {
      setDarkMode("light");
      setMode(true);
    } else {
      setDarkMode("dark");
      setMode(false);
    }
  };
  const getData = async (url) => {
    const data = await fetch(url);
    const items = await data.json();
    setCountries(items);
    setFilteredCountries(items.slice(indexOfFirstPost, indexOfLastPost));
    setCount(Math.ceil(items.length / postPerPage));
    setIsLoading(false);
    // console.log(countries);
  };

  const handleChange = (inputField) => {
    if (!inputField) {
      getData("https://restcountries.com/v3.1/all");
    } else {
      setCountries(
        countries.filter((country) => {
          if (country.name.common.toLowerCase().includes(inputField)) {
            return country;
          }
        })
      );
      setCount(Math.ceil(setCountries.length / postPerPage));
    }
    setFilteredCountries(countries.slice(indexOfFirstPost, indexOfLastPost));
  };

  const filterByRegion = async (region) => {
    if (region === "All") {
      getData("https://restcountries.com/v3.1/all");
    }
    if (region !== "All") {
      getData(`https://restcountries.com/v3.1/region/${region}`);
    }
  };

  useEffect(() => {
    getData("https://restcountries.com/v3.1/all");
  }, []);

  useEffect(() => {
    setFilteredCountries(countries.slice(indexOfFirstPost, indexOfLastPost));
  }, [currentPage]);

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        {isLoading ? (
          <Loader></Loader>
        ) : (
          <Router>
            <Header switchTheme={switchTheme} text={themeText}></Header>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Box>
                    <SearchBar
                      handleChange={handleChange}
                      filterByRegion={filterByRegion}
                    ></SearchBar>

                    <CountryCards countries={filteredCountries}></CountryCards>
                    <Paginate
                      page={currentPage}
                      count={count}
                      paginationHandler={paginateHandler}
                    ></Paginate>
                  </Box>
                }
              ></Route>
              <Route
                path="/country/:countryId"
                element={<CardPage></CardPage>}
              ></Route>
            </Routes>
            <CssBaseline />
          </Router>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;
