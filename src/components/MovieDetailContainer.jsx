import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

export default function MovieDetailContainer({ img,id}) {
  
  return (
    <Link to={`/detail/${id}`}>
    <Card sx={{ maxHeight: 300, maxWidth: 200 }}>
      <CardMedia
        component="img"
        alt=""
        height="300"
        image={`https://image.tmdb.org/t/p/w300/${img}`}
    
      />
     
    </Card>
    </Link>
  );
}

