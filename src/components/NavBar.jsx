import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

const pages = ["Up-Coming", "Popular"];

export default function NavBar() {
  const { mainDarkColor, whiteColor, orangeColor } = useContext(MoviesContext);

  return (
    <AppBar position="fixed" sx={{ backgroundColor: mainDarkColor }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "bebas neue",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: orangeColor,
              textDecoration: "none",
              fontSize: "30px",
            }}
          >
            MOVIES
          </Typography>

          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 5 }}
          >
            <Button
              sx={{
                my: 2,
                color: whiteColor,
                display: "block",
                fontFamily: "montserrat ",
              }}
              href="/"
            >
              Home
            </Button>

            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  my: 2,
                  color: whiteColor,
                  display: "block",
                  fontFamily: "montserrat ",
                }}
                href={`/category/${page}`}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Link to={"/search"}>
              <Tooltip>
                <IconButton sx={{ color: whiteColor }}>
                  <SearchIcon />
                </IconButton>
              </Tooltip>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
