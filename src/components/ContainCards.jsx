import { React, useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import MovieCard from "./MovieCard";
import Pages from "./Pages";
import BarLoader from "react-spinners/BarLoader";

export default function ContainCards() {
  const publicKey = import.meta.env.VITE_APP_API_KEY;
  const { nameCategory } = useParams();
  const [movies, setMovies] = useState([]);
  const {
    secondaryDarkColor,
    orangeColor,
    prevPage,
    nextPage,
    initPage,
    lastPage,
    page,
    setTotalPages,
  } = useContext(MoviesContext);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    let category = "";
    if (nameCategory === "upcoming") {
      category = "upcoming";
    } else {
      category = "popular";
    }

    axios(
      `https://api.themoviedb.org/3/movie/${category}?api_key=${publicKey}&language=en-US&page=${page}`
    )
      .then((info) => {
        let moviesArray = info.data.results;
        let allPages = info.data.total_pages;
        setTotalPages(allPages);
        setMovies(moviesArray);
        setLoading(false);
      })

      .catch((error) => console.log(error));
  }, [nameCategory, page]);

  return (
    <>
      <Grid
        container
        spacing={5}
        direction="row"
        style={{
          padding: "100px 50px",
          justifyContent: "center",
          backgroundColor: secondaryDarkColor,
        }}
      >
        {movies &&
          movies.map((movie) => (
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
      <Box
        sx={{
          backgroundColor: secondaryDarkColor,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
        }}
      >
        <BarLoader
          color={orangeColor}
          height={10}
          speedMultiplier={1}
          width={200}
          loading={loading}
        />
        <Pages
          setPrev={prevPage}
          setNext={nextPage}
          setInit={initPage}
          setLast={lastPage}
        />
      </Box>
    </>
  );
}
