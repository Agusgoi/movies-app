import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";

export default function ScrollMovieCards({ id, title, img }) {
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w300/${img}`}
        alt={title}
        loading="lazy"
      />
      <Link to={`/detail/${id}`}>
        <ImageListItemBar
          title={title}
          actionIcon={
            <IconButton
              sx={{ color: "rgba(255, 255, 255, 0.54)" }}
              aria-label={`info about ${title}`}
            >
              <InfoIcon />
            </IconButton>
          }
        />
      </Link>
    </>
  );
}
