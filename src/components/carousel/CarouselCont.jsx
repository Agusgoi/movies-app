import { useState, useEffect } from "react";
import axios from "axios";

import { Box, Typography, Button, CardMedia } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useParams } from "react-router-dom";

export default function CarouselCont() {
  const publicKey = "ce9e33ba2c3d3c490df6ef51c4e40050";
  const [topRated, setTopRated] = useState([]);
  const { whiteColor } = useContext(MoviesContext);
  const { id } = useParams();

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${publicKey}&language=es-ES`
    ).then((info) => {
      let moviesArray = info.data.results;
      setTopRated(moviesArray);
      console.log(topRated);
    });
  }, []);

  return (
    <Box>
      <Carousel
        autoPlay
        interval={4000}
        transitionTime={1000}
        infiniteLoop
        showArrows={true}
        showStatus={false}
        showThumbs={false}
      >
        {topRated.map((movie) => {
          return (
            <Box
              key={movie.title}
              sx={{
                width: "100vw",
                height: 400,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <Box
                sx={{
                  width: "60%",
                  backgroundColor: "black",
                  opacity: "90%",
                  padding: 2,
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    padding: 2,
                    color: whiteColor,
                    fontFamily: "bebas neue",
                    fontSize: "30px",
                    letterSpacing: ".2rem",
                  }}
                >
                  {movie.title}
                </Typography>

                <Typography
                  sx={{
                    p: 2,
                    color: whiteColor,
                    fontSize: "15px",

                    fontFamily: "montserrat",
                  }}
                >
                  {movie.overview}
                </Typography>

                <Button
                  endIcon={<PlayArrowIcon />}
                  color="warning"
                  href={`/detail/${movie.id}`}
                >
                  More
                </Button>
              </Box>
            </Box>
          );
        })}
      </Carousel>
    </Box>
  );
}
