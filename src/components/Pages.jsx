import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Pages({page, setPage, totalPages}) {
  return (
    <Stack spacing={2}>
 
      <Pagination count={5} color="warning"  />
      
    </Stack>
  );
}