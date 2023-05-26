import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Link } from "react-router-dom";

export default function MovieCard({ img,id}) {
  
  return (
    <Link to={`/detail/${id}`}>
    <Card sx={{ maxHeight: 300, maxWidth: 200 }}>
      <CardMedia
        component="img"
        alt=""
        height="300"
      image={`https://image.tmdb.org/t/p/w500/${img}`}
    
      />
     
    </Card>
    </Link>
  );
}

