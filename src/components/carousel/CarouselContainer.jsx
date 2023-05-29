import { Box } from '@mui/material'
import CarouselMovies from './CarouselMovies'



export default function CarouselContainer() {

  return (
    <Box sx={{ height: 400, minWidth:'100vw', paddingTop:'50px'}} >
    <CarouselMovies />
    </Box>
  )
}
