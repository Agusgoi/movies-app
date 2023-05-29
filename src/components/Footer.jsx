import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

export default function Footer() {
  const { mainDarkColor, whiteColor } = useContext(MoviesContext);

  return (
    <Box
      sx={{
        width: "100%",
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
        <Button
          sx={{
            my: 2,
            color: whiteColor,
            display: "block",
            fontFamily: "montserrat",
          }}
          href="/"
        >
          Home
        </Button>
        <Button
          sx={{
            my: 2,
            color: whiteColor,
            display: "block",
            fontFamily: "montserrat",
          }}
          href="/category/up-coming"
        >
          Up-Coming
        </Button>
        <Button
          sx={{
            my: 2,
            color: whiteColor,
            display: "block",
            fontFamily: "montserrat",
          }}
          href="/category/popular"
        >
          Popular
        </Button>
        <Button
          sx={{
            my: 2,
            color: whiteColor,
            display: "block",
            fontFamily: "montserrat",
          }}
          href="/search"
        >
          Search
        </Button>
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
