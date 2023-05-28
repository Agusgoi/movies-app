import Container from "@mui/material/Container";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { Button, Card, getTypographyUtilityClass } from "@mui/material";
import ReactPlayer from "react-player/youtube";
import { useState } from "react";

export default function TrailerContainer() {
  const { id } = useParams();
  const publicKey = "ce9e33ba2c3d3c490df6ef51c4e40050";

  const [trailerList, setTrailerList] = useState({ results: [] });

  console.log(id);

  console.log(trailerList.results);

  const video = trailerList.results.find((video) =>
    video.name.includes("Trailer")
  );

  console.log(video);

  let videosMap = [];

  trailerList.results.map((video) => {
    if (video.name.includes("Trailer")) {
      videosMap.push(video.key)
    }else if (video.name.includes("trailer")){
      videosMap.push(video.key)
    }
  });

  console.log(videosMap)

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
        <Button sx={{ alignItems: "baseline" }} href={`/detail/${id}`}></Button>
      </Card>
    </Container>
  );
}
