/* 
  import * as React from 'react';
  import Box from '@mui/material/Box';
  import TextField from '@mui/material/TextField';
  import Input from '@mui/material/Input';
  
  export default function SearchInput({inputChange}) {
    return (
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
      
          <TextField label="Search" id="outlined-size-normal" defaultValue="Type" />
          <Input value={'chau'}>Hola</Input>
          {console.log(Input.target)}
        </div>
       

      </Box>
    );
  } */
 
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
//import Autocomplete from '@mui/material/Autocomplete';
import { Input } from '@mui/icons-material';

export default function SearchInput({onChange}) {

//onClick={console.log('entre')} badgeContent={getTotalProducts()} 
//onClick={()=> deleteProduct(id)}>
  return (
 
      <TextField onChange={()=> onChange('God')} value={'HOLAA'}></TextField>
    
 
  )
}

{/* <Autocomplete
        id="free-solo-demo"
       // freeSolo
       // options={top100Films.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label="freeSolo" />}
      /> */}

      //<TextField onChange={()=> onChange('God')}></TextField>
    