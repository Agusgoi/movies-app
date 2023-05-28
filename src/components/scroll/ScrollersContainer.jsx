import {  Grid } from '@mui/material'
import { useContext } from 'react'
import { MoviesContext } from '../../context/MoviesContext'
import Scroll from './Scroll'


export default function ScrollersContainer() {
 
  const {mainDarkColor} = useContext(MoviesContext)

  return (
    <Grid sx={{backgroundColor: mainDarkColor}}
    container columns={2} justifyContent='center'gap={0}>
       <Scroll title={'POPULAR Movies'} category={'popular'}/>
       <Scroll title={'TOP-RATED Movies'} category={'top_rated'}/>
    </Grid>
    )}

