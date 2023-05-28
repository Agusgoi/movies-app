import { Button } from '@mui/base';
import { CardActions, CardContent, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { MoviesContext } from '../context/MoviesContext';

export default function MovieCard({ img,id, title, vote}) {
  const {  whiteColor, mainDarkColor } =
  useContext(MoviesContext);
  return (
 

<Link to={`/detail/${id}`} underline="none" style={{ textDecoration: 'none' }}>
<Card sx={{ width: 250, height:480, backgroundColor:mainDarkColor }}>
      <CardMedia
        sx={{ height: 370 }}
        image={`https://image.tmdb.org/t/p/w500/${img}`}
        
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div"  fontFamily= "bebas neue" fontSize='20px' letterSpacing= ".05rem" color={whiteColor}>
          {title}
        </Typography>
        <Typography variant="body2" color={whiteColor} fontFamily= "montserrat" fontSize='12px'>
          Vote Average: {vote}
        </Typography>
      </CardContent>
    </Card>
    </Link>
  );
}

