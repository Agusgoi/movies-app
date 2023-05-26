import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
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
        }}
      >
        <Button
          sx={{
            my: 2,
            color: whiteColor,
            display: "block",
            fontFamily: "monospace",
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
            fontFamily: "monospace",
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
            fontFamily: "monospace",
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
            fontFamily: "monospace",
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
          fontFamily: "monospace",
          color: whiteColor,
        }}
      >
        Made by AgusGoi
      </Typography>
    </Box>
  );
}
