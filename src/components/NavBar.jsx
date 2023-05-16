import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import AdbIcon from "@mui/icons-material/Adb";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

const pages = ["Ultimos Lanzamientos", "Populares"];

export default function NavBar() {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MOVIES
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to={'/'}>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Home
            </Button >
            </Link>
            {pages.map((page) => (
              <Link key={page} to={`/category/${page}`}>
                <Button
                  key={page}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
