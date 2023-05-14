import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Box from "@mui/material/Box";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Scroll({ titulo, category }) {
  const publicKey = "ce9e33ba2c3d3c490df6ef51c4e40050";

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/${category}?api_key=${publicKey}&language=en-US&page=1`
    )
      .then((info) => {
        let moviesArray = info.data.results;
        console.log(moviesArray);
        setMovies(moviesArray);
      })

      .catch((error) => console.log(error));
  }, []);
  console.log(movies);

  return (
    <Box sx={{ height: 450, width: 650, overflowY: "scroll" }}>
      <ListSubheader component="div">{titulo}</ListSubheader>
      <ImageList>
        {movies &&
          movies.map((item) => (
            <ImageListItem key={item.original_title}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                alt={item.original_title}
                loading="lazy"
              />
              <Link to={'/detail/:id'}>
                <ImageListItemBar
                  title={item.original_title}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item.original_title}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </Link>
            </ImageListItem>
          ))}
      </ImageList>
    </Box>
  );
}
