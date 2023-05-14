import { Box, Stack, Grid } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import Scroll from './Scroll'

import axios from 'axios';
import { MoviesContext } from '../context/MoviesContext';


export default function HomeScrollers() {
 
  return (
    <Grid sx={{backgroundColor: 'primary.dark'}}
    container columns={2} justifyContent='center'gap={5}>
       <Scroll titulo={'Most Popular'} category={'popular'}/>
       <Scroll titulo={'Top Rated'} category={'top_rated'}/>
    </Grid>
    )}

