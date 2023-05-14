import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

export default function MovieCard({ img,id}) {
  
  return (
    <Link to={`/detail/${id}`}>
    <Card sx={{ minWidth: 300 }}>
      <CardMedia
        component="img"
        alt=""
        height="500"
        image={`https://image.tmdb.org/t/p/w500/${img}`}
    
      />
     
    </Card>
    </Link>
  );
}

