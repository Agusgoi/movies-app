import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Button, CardActions, CardContent } from "@mui/material";
import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import axios from "axios";

export default function MovieDetail() {
  // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

  const [movie, setMovie] = useState({});
  const { id } = useParams();
  //const {movies, setMovies} = useContext(MoviesContext)
  const publicKey = "ce9e33ba2c3d3c490df6ef51c4e40050";
 // console.log(id);

  let genres = movie.genres;

  let array = [
    {id: 18, name: 'Drama'},

    {id: 80, name: 'Crime'}
  ] 
 // console.log(array[0].name);

/*   for (let i = 0; i < array.length; i++) {
    console.log(array[i].name);
  } */
  //console.log(genres.length);


  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${publicKey}&language=en-US`
    )
      .then((info) => {
        let movieSelected = info.data;
        setMovie(movieSelected);
console.log(movie)
        //console.log(genres.length);


        /* for (let i = 0; i < genres.length; i++) {
          console.log(genres[i]);
        } */
      })

      .catch((error) => console.log(error));
  }, []);

  return (
    <Box
      sx={{
        height: "85vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        backgroundImage: `url('https://image.tmdb.org/t/p/w500/${movie.backdrop_path}')`,
        backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",

      }}

    >

<Card sx={{ width: "100wh", height: "25%", backgroundColor: "black", opacity:'70%', paddingRight:'50px', display: 'flex' }}>
        <CardContent sx= {{padding:' 20px 30px'}}>
          {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {movie.title}
        </Typography> */}
          <Typography variant="h5" component="div" color="white">
            {movie.title}
          </Typography>
            <Typography sx={{ mb: 1.5 }} color="white">
          Genre:
        </Typography> 
          <Typography variant="body2" color="white" fontSize='10px'>{movie.overview}  </Typography>
        </CardContent>
        <CardActions sx={{alignItems: 'baseline',padding:'20px 0px'}}>
          <Button size="small">VER</Button>
        </CardActions>
      </Card>
      
    </Box>
  );
}
