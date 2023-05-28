import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ListSubheader from "@mui/material/ListSubheader";
import Box from "@mui/material/Box";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ScrollMovieCards from "./ScrollMovieCards";
import ImageListItem from "@mui/material/ImageListItem";
import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

export default function Scroll({ title, category }) {
    const publicKey = import.meta.env.VITE_APP_API_KEY;
  const [movies, setMovies] = useState([]);
  const {mainDarkColor, whiteColor, orangeColor} = useContext(MoviesContext)

  useEffect(() => {
  
    axios(
      `https://api.themoviedb.org/3/movie/${category}?api_key=${publicKey}&language=en-US&page=1`
    )
      .then((info) => {
        let moviesArray = info.data.results;
        setMovies(moviesArray);
      })

      .catch((error) => console.log(error));
  }, []);

  return (
    <Box sx={{ width: "100%", overflowY: "none",backgroundColor: mainDarkColor }}>
      <ListSubheader component="div"sx={{backgroundColor: mainDarkColor, color: whiteColor, height: '50px', fontFamily: "bebas neue", fontSize:'20px', letterSpacing: ".2rem", scrollbarColor:orangeColor}}>{title} </ListSubheader>
      <ImageList sx={{ overflowX:"auto", display: "flex", flexDirection: "row"}} rowHeight={300} >
      
          {movies.map((movie) => {
            return (
              <ImageListItem sx={{ display: "flex", flexDirection: "column" }} key={movie.id}>
              <ScrollMovieCards
                 
                  key={movie.id}
                  title={movie.title}
                  img={movie.poster_path}
                  id={movie.id}
                />
          </ImageListItem>
            );
          })}
       
      
     
      </ImageList>
     
       
    </Box>
  );
}
