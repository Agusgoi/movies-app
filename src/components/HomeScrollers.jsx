import { Box, Stack, Grid } from '@mui/material'
import React from 'react'
import PopularScroll from './PopularScroll'
import TopRatedScroll from './TopRatedScroll'


export default function HomeScrollers() {
  return (
    <Grid sx={{backgroundColor: 'primary.dark'}}
    container columns={2} justifyContent='center'gap={5}>
       <PopularScroll />
       <TopRatedScroll /> 
    </Grid>
  )
}
