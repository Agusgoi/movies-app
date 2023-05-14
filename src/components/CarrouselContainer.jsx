import { Container } from '@mui/material'
import React from 'react'
import axios from 'axios';

export default function CarrouselContainer() {
 // const publicKey = Process.env.VITE_APP_API_KEY
 /*  const publicKey  ='ce9e33ba2c3d3c490df6ef51c4e40050'

  axios(
    `https://api.themoviedb.org/3/certification/movie/list?api_key=${publicKey}`
    )
      .then((info) => {
        console.log (info)
     
      })
  
      .catch((error) => console.log(error));
   */

  return (
    <Container sx={{backgroundColor: 'green', height: 300}} >CONTENEDOR DE CARROUSEL</Container>
  )
}
