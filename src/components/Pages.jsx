import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

export default function Pages({setPrev, setNext, setInit, setLast}) {
  return (
    

<div >
<IconButton aria-label="delete" onClick={()=> setInit()}>
  <eyboardDoubleArrowLeftIcon />
</IconButton>
  <Button onClick={()=> setPrev()}>2</Button>
  <Button onClick={()=> setNext()}>3</Button>
  <Button onClick={()=> setLast()}>4</Button>
 
</div>
  );
}


{/* <Stack spacing={2}>
 
 <Pagination count={5} color="warning"  />
 
</Stack> */}