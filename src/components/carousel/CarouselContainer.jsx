 import { useContext } from 'react'
import { MoviesContext } from '../../context/MoviesContext'
import { Box } from '@mui/material'
import CarouselCont from './CarouselCont'



export default function CarouselContainer() {

  const {secondaryDarkColor} = useContext(MoviesContext)
  return (
    <Box sx={{backgroundColor: 'green', height: 400, minWidth:'100vw', paddingTop:'50px'}} >
    <CarouselCont />
    </Box>
  )
}
