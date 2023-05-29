import * as React from 'react';
import { IconButton } from '@mui/material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export default function Pages({setPrev, setNext, setInit, setLast}) {
  return (
    

<div >
<IconButton  onClick={()=> setInit()} color='warning'>
  <KeyboardDoubleArrowLeftIcon />
</IconButton>
<IconButton  onClick={()=> setPrev()} color='warning'>
  <KeyboardArrowLeftIcon />
</IconButton>
<IconButton  onClick={()=> setNext()} color='warning'>
  <KeyboardArrowRightIcon />
</IconButton>
<IconButton onClick={()=> setLast()} color='warning'>
  <KeyboardDoubleArrowRightIcon />
</IconButton>
 
</div>
  );
}


