import { Box, Stack, Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import Scroll from "./Scroll";

import axios from "axios";
import SearchInput from "./SearchInput";
import { useState } from "react";
import MovieDetailContainer from "./MovieDetailContainer";

export default function SearchContainer() {
  const publicKey = "ce9e33ba2c3d3c490df6ef51c4e40050";
  const [moviesSearched, setMoviesSearched] = useState([]);

  /*  const inputChange = (e) => {
    setInputSearch(e.target.value);
  }; */

  const change = (inputSearch) => {
    console.log(inputSearch);
    axios(
      `https://api.themoviedb.org/3/search/movie?api_key=${publicKey}&language=es-US&query=${inputSearch}&page=1`
    )
      .then((info) => {
        let moviesArray = info.data.results;
        console.log(moviesArray);
        setMoviesSearched(moviesArray);
      })

      .catch((error) => console.log(error));
  };

  return (
    <>
      <Box sx={{ backgroundColor: "yellow", padding: "30px 20px" }}>
        <SearchInput onChange={change} />
      </Box>
      <Grid
        sx={{ backgroundColor: "primary.dark" }}
        container
        justifyContent="center"
        spacing={5}
        padding="50px"
        direction="row"
      >
        {moviesSearched &&
          moviesSearched.map((movie) => (
            <Grid item key={movie.id}>
              <MovieDetailContainer
                key={movie.id}
                title={movie.original_title}
                img={movie.poster_path}
                id={movie.id}
              />
            </Grid>
          ))}
      </Grid>
    </>
  );
}
