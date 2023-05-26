import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { Button, CardActions, CardContent, CardMedia } from "@mui/material";

import axios from "axios";
import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

import PlayArrowIcon from '@mui/icons-material/PlayArrow';


export default function MovieDetail() {
  const [movie, setMovie] = useState({
    genres: [],
    production_countries: [],
    spoken_languages: [],
  });
  const { id } = useParams();
  const { whiteColor, orangeColor } = useContext(MoviesContext);

  const publicKey = "ce9e33ba2c3d3c490df6ef51c4e40050";
  // console.log(id);
  console.log(movie);

  let genresMap = [];
  let countryMap = [];
  let languagesMap = [];

  movie.genres.map((genre) => {
    genresMap.push(genre.name);
  });

  movie.production_countries.map((country) => {
    countryMap.push(country.name);
  });
  movie.spoken_languages.map((language) => {
    languagesMap.push(language.english_name);
  });

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${publicKey}&language=en-US`
    )
      .then((info) => {
        let movieSelected = info.data;
        setMovie(movieSelected);
       console.log(movie)
      })

      .catch((error) => console.log(error));
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundImage: `url('https://image.tmdb.org/t/p/w500/${movie.backdrop_path}')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Card
        sx={{
          margin: "80px 150px 0px 150px",
          height: "60%",
          backgroundColor: "black",
          opacity: "90%",
          padding: "30px",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <CardMedia
          component="img"
          sx={{ height: "100%", width: "400px" }}
          image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt=""
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              color={orangeColor}
              fontFamily="monospace"
              fontWeight="bold"
              fontSize="30px"
              paddingBottom="15px"
            >
              {movie.title}
            </Typography>
            <Typography
              color={whiteColor}
              fontFamily="monospace"
              fontSize="12px"
              paddingBottom="20px"
            >
              {genresMap.join(" / ")}
            </Typography>
            <Typography
              variant="body2"
              color={whiteColor}
              fontFamily="monospace"
              fontSize="14px"
              paddingBottom="20px"
            >
              {movie.overview}
            </Typography>
            <Typography
              variant="body2"
              color={whiteColor}
              fontFamily="monospace"
              fontSize="10px"
              paddingBottom="8px"
            >
              Production Country: {countryMap.join(" / ")}
            </Typography>
            <Typography
              variant="body2"
              color={whiteColor}
              fontFamily="monospace"
              fontSize="10px"
            >
              Spoken Languages: {languagesMap.join(" / ")}
            </Typography>
          </CardContent>
          
          <CardActions sx={{ alignItems: "baseline" }}>
            <Button endIcon={<PlayArrowIcon />} color="warning" href={`/trailer/${id}`}>
              Trailer
            </Button>
          </CardActions>
         
        </Box>
      </Card>
    </Box>
  );
}
