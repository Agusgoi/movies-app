import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Button, CardActions, CardContent } from '@mui/material';
import { useContext } from 'react';
import { MoviesContext } from '../context/MoviesContext';
import axios from "axios";

export default function MovieDetail() {
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

  const [movie, setMovie] = useState({});
  const {id} = useParams()
  //const {movies, setMovies} = useContext(MoviesContext)
  const publicKey = "ce9e33ba2c3d3c490df6ef51c4e40050";
  console.log (id)

  let genres = movie.genres
  console.log (genres)

  //genres.forEach((genre) => console.log(genre))



  useEffect (() => {
    axios(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${publicKey}&language=en-US`
    )
      .then((info) => {
    
       let movieSelected = info.data
       setMovie(movieSelected)

       
/*   for(let i=0; i< genres.length; i++){
    console.log(genres[i])
  } */

      })

      .catch((error) => console.log(error));

 
  }, []);
 


  return (
    <Box sx={{height:'100vh', display: "flex", flexDirection: 'column', justifyContent:'flex-end', backgroundImage:`url('https://image.tmdb.org/t/p/w500/${movie.backdrop_path}')`, backgroundRepeat: `no-repeat`, backgroundSize: `100%`}}>
      
    <Card sx={{ width: '100wh', height:'30%', backgroundColor: 'pink'}}>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {movie.title}
        </Typography> */}
        <Typography variant="h5" component="div">
        {movie.title}
        </Typography>
      {/*   <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Genre:
        </Typography> */}
        <Typography variant="body2">
          {movie.overview}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver Trailer</Button>
      </CardActions>
    </Card>
    </Box>
  );
}