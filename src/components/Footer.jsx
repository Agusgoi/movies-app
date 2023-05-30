import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import { Link } from "react-router-dom";

export default function Footer() {
  const { mainDarkColor, whiteColor } = useContext(MoviesContext);

  return (
    <Box
      sx={{
        width: "100vw",
        bgcolor: mainDarkColor,
        display: "flex",
        flexDirection: "column",
      }}
      bottom="0"
    >
      <Box
        sx={{
          width: "100%",
          bgcolor: mainDarkColor,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Link to={"/"} underline="none" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              my: 2,
              color: whiteColor,
              display: "block",
              fontFamily: "montserrat",
            }}
          
          >
            Home
          </Button>
        </Link>
        <Link to={"/category/upcoming"} underline="none" style={{ textDecoration: "none" }}>
        <Button
          sx={{
            my: 2,
            color: whiteColor,
            display: "block",
            fontFamily: "montserrat",
          }}
      
        >
          UpComing
        </Button>
        </Link>
        <Link to={"/category/popular"} underline="none" style={{ textDecoration: "none" }}>
        <Button
          sx={{
            my: 2,
            color: whiteColor,
            display: "block",
            fontFamily: "montserrat",
          }}
      
        >
          Popular
        </Button>
        </Link>
        <Link to={"/search"} underline="none" style={{ textDecoration: "none" }}>
        <Button
          sx={{
            my: 2,
            color: whiteColor,
            display: "block",
            fontFamily: "montserrat",
          }}
      
        >
          Search
        </Button>
        </Link>
      </Box>

      <Typography
        sx={{
          textAlign: "center",
          fontSize: "10px",
          fontFamily: "montserrat",
          color: whiteColor,
        }}
      >
        Made by AgusGoi
      </Typography>
    </Box>
  );
}
