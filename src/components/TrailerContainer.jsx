import Container from "@mui/material/Container";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { Button, Card } from "@mui/material";
import ReactPlayer from "react-player/youtube";
import { useState } from "react";

export default function TrailerContainer() {
  const publicKey = import.meta.env.VITE_APP_API_KEY;
  const { id } = useParams();
  const [trailerList, setTrailerList] = useState({ results: [] });

  let videosMap = [];

  trailerList.results.map((video) => {
    if (video.name.includes("Trailer")) {
      videosMap.push(video.key);
    } else if (video.name.includes("trailer")) {
      videosMap.push(video.key);
    }
  });

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${publicKey}&language=en-US`
    )
      .then((info) => {
        let allData = info.data;
        setTrailerList(allData);
      })

      .catch((error) => console.log(error));
  }, []);

  return (
    <Container
      sx={{
        bgcolor: "black",
        height: "100vh",
        minWidth: "100%",
        padding: "200px",
      }}
    >
      <Card
        sx={{
          bgcolor: "black",
          height: "100%",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videosMap}`}
          sx={{ height: "500px" }}
        />
        <Link to={`/detail/${id}`}   underline="none"
                style={{ textDecoration: "none" }}>
        <Button sx={{ alignItems: "baseline" }} >
          Close
        </Button>
        </Link>
      </Card>
    </Container>
  );
}
