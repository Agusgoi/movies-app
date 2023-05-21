import { createContext, useState } from "react";

export const MoviesContext = createContext();

const MoviesContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const publicKey = "ce9e33ba2c3d3c490df6ef51c4e40050";

  const data = {
    publicKey,
    movies,
    setMovies,
  };

  return (
    <MoviesContext.Provider value={data}>{children}</MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
