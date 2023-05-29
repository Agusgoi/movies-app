import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import { Box } from "@mui/material";

export default function ScrollMovieCards({ id, title, img }) {
  const { secondaryDarkColor, whiteColor, mainDarkColor } =
    useContext(MoviesContext);
  return (
    <Box
      sx={{
        width: "170px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w300/${img}`}
        key={id}
        alt="title"
        loading="lazy"
        height="250px"
        width="170px"
      />
      <Link
        to={`/detail/${id}`}
        underline="none"
        style={{ textDecoration: "none" }}
      >
        <ImageListItemBar
          position="below"
          sx={{
            whiteSpace: "normal",
            backgroundColor: secondaryDarkColor,
            width: "160px",
            height: "30px",
            textDecoration: "none",
            color: whiteColor,
            padding: "5px",
            textAlign: "center",
            fontFamily: "montserrat",
            border: 1,
            borderColor: mainDarkColor,
          }}
          subtitle={title}
        />
      </Link>
    </Box>
  );
}
