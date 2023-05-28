import { React, useEffect, useState } from "react";
import { Grid, Pagination } from "@mui/material";
import { useParams } from "react-router-dom";

import axios from "axios";
import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

import MovieCard from "./MovieCard";

export default function ContainCards() {
  const publicKey = import.meta.env.VITE_APP_API_KEY;
  const { nameCategory } = useParams();
  const [movies, setMovies] = useState([]);
  const {secondaryDarkColor} = useContext(MoviesContext)

  

  useEffect(() => {
    let category = "";
    if (nameCategory === "Up-Coming") {
      category = "upcoming";
    } else {
      category = "popular";
    }

    axios(
      `https://api.themoviedb.org/3/movie/${category}?api_key=${publicKey}&language=en-US&page=1`
    )
      .then((info) => {
        let moviesArray = info.data.results;
        console.log(moviesArray);
        setMovies(moviesArray);
        console.log(movies);
      })

      .catch((error) => console.log(error));
  }, [nameCategory]);

  return (
    <Grid
      container
      spacing={5}
      direction="row"
      style={{ padding: "100px 50px", justifyContent: "center", backgroundColor: secondaryDarkColor }}
    >
      {movies &&
        movies.map((movie) => (
          <Grid item key={movie.id}>
            <MovieCard
              key={movie.id}
              title={movie.original_title}
              img={movie.poster_path}
              id={movie.id}
            />
          </Grid>
        ))}

        <Pagination />
    </Grid>
  );
}
