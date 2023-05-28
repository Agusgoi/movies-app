import { Box, Grid } from "@mui/material";
import React, { useContext } from "react";
import axios from "axios";
import SearchInput from "./SearchInput";
import { useState } from "react";
import { MoviesContext } from "../context/MoviesContext";
import MovieCard from "./MovieCard";

export default function SearchContainer() {
  const publicKey = import.meta.env.VITE_APP_API_KEY;
  const [moviesSearched, setMoviesSearched] = useState([]);
  const { secondaryDarkColor } = useContext(MoviesContext);

  const change = (inputSearch) => {
    console.log(inputSearch);
    axios(
      `https://api.themoviedb.org/3/search/movie?api_key=${publicKey}&language=es-US&query=${inputSearch}&page=1`
    )
      .then((info) => {
        let moviesArray = info.data.results;
        console.log(info)
        setMoviesSearched(moviesArray);
      })

      .catch((error) => console.log(error));
  };

  return (
    <>
      <Box sx={{ backgroundColor: secondaryDarkColor, padding: "100px 100px" }}>
        <SearchInput onChange={change} />
      </Box>
      <Grid
        sx={{ backgroundColor: secondaryDarkColor }}
        container
        justifyContent="center"
        spacing={5}
        padding="0px 50px 50px 50px"
        direction="row"
        minHeight="58vh"
      >
        {moviesSearched &&
          moviesSearched.map((movie) => (
            <Grid item key={movie.id}>
              <MovieCard
                key={movie.id}
                title={movie.original_title}
                img={movie.poster_path}
                id={movie.id}
                vote={movie.vote_average}
              />
            </Grid>
          ))}
      </Grid>
    </>
  );
}
