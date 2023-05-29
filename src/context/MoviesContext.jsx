import { useState } from "react";
import { createContext } from "react";

export const MoviesContext = createContext();

const MoviesContextProvider = ({ children }) => {
  const mainDarkColor = "#212121";
  const secondaryDarkColor = "#263238";
  const whiteColor = "#f5f5f5";
  const orangeColor = "#ff6d00";
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const initPage = () => {
    setPage(1);
  };

  const lastPage = () => {
    setPage(totalPages);
  };

  const data = {
    mainDarkColor,
    secondaryDarkColor,
    whiteColor,
    orangeColor,
    prevPage,
    nextPage,
    initPage,
    lastPage,
    page,
    setPage,
    totalPages,
    setTotalPages,
  };

  return (
    <MoviesContext.Provider value={data}>{children}</MoviesContext.Provider>
  );
};

export default MoviesContextProvider;


