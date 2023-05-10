import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Typography } from '@mui/material';

export default function Footer() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paperbl' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Home" />
        <Tab label="Ultimos Lanzmientos" />
        <Tab label="Mas Populares" />
        <Tab label="Buscar" />
      </Tabs>
      <Typography sx={{ textAlign: 'center'}}>
        Hecho por AgusGoi
      </Typography>
    </Box>
  );
}