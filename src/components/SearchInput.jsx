import TextField from '@mui/material/TextField';

export default function SearchInput({onChange}) {


  return (
 
      <TextField onChange={(e)=> onChange(e.target.value)} margin="normal" fullWidth sx={{color: 'red'}} label="Movie Title Search"
        color="warning"
        focused></TextField>
    
 
  )
}

