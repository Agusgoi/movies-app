import { React, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";

import axios from "axios";
import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import MovieDetailContainer from "./MovieDetailContainer";

export default function ContainCards() {
  const { nameCategory } = useParams();
  const [movies, setMovies] = useState([]);

  //console.log(nameCategory);
  const publicKey = "ce9e33ba2c3d3c490df6ef51c4e40050";

  useEffect(() => {
    let category = "";
    if (nameCategory === "Ultimos Lanzamientos") {
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
      style={{ padding: "50px", justifyContent: "center" }}
    >
      {movies &&
        movies.map((movie) => (
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
  );
}
