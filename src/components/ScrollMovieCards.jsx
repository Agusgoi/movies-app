import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import { WrapText } from "@mui/icons-material";

export default function ScrollMovieCards({ id, title, img }) {
  const {secondaryDarkColor, whiteColor, mainDarkColor} = useContext(MoviesContext)
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w300/${img}`}
        key={id}
        alt="title"
        loading="lazy"
        height="200"
        
      />
      <Link to={`/detail/${id}`}>
        <ImageListItemBar position="below"  sx={{whiteSpace: 'normal', backgroundColor: secondaryDarkColor, width: '150px', height: '30px', textDecoration:'none', color: whiteColor, padding: '5px', textAlign:'center', fontFamily: "monospace", border: 1, borderColor: mainDarkColor}}
subtitle = {title}
         /*  actionIcon={
            <IconButton
              sx={{ color: "rgba(255, 255, 255, 0.54)" }}
              aria-label={`info about ${title}`}
             
            >
              <InfoIcon />
            </IconButton>
          } */
        />
      </Link>
    </>
  );
}
