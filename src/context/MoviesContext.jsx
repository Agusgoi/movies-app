import { createContext, useState } from "react";
import { useParams } from "react-router-dom";

export const MoviesContext = createContext();

const MoviesContextProvider = ({ children }) => {

  const [movies, setMovies] = useState([]);
    const publicKey  ='ce9e33ba2c3d3c490df6ef51c4e40050'
   // const [categ, setCateg] = useState("");

    /* const settingCateg = () => {
      console.log (nameCategory)
    if (nameCategory === "Ultimos Lanzamientos") {
      let category = "upcoming";
      setCateg(category);
    } else {
      let category = "popular";
      setCateg(category);
    }
    //    setCateg(category);
  } */
 
  const data = {
    publicKey,
    movies,
    setMovies,
    //categ,
    //settingCateg
  };

  return <MoviesContext.Provider value={data}>{children}</MoviesContext.Provider>;
};

export default MoviesContextProvider;