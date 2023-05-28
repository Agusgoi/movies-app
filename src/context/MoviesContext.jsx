import { createContext } from "react";

export const MoviesContext = createContext();

const MoviesContextProvider = ({ children }) => {
  const mainDarkColor = "#212121";
  const secondaryDarkColor = "#263238";
  const whiteColor = "#f5f5f5";
  const orangeColor = "#ff6d00";

  const data = {
    mainDarkColor,
    secondaryDarkColor,
    whiteColor,
    orangeColor,
  };

  return (
    <MoviesContext.Provider value={data}>{children}</MoviesContext.Provider>
  );
};

export default MoviesContextProvider;

//.env api key
//paginado
//mejorar cards
