import { createContext, useState } from "react";

export const MoviesContext = createContext();

const MoviesContextProvider = ({ children }) => {

    const publicKey  ='ce9e33ba2c3d3c490df6ef51c4e40050'
/*     const { nameCategory } = useParams();
    const [categ, setCateg] = useState("");

    const settingCateg = () => {
    if (nameCategory !== "Ultimos Lanzamientos") {
      let category = "upcoming";
      setCateg(category);
    } else {
      let category = "popular";
      setCateg(category);
    }
    //    setCateg(category);
  }
 */
  const data = {
    publicKey,
    //categ,
    //settingCateg
  };

  return <MoviesContext.Provider value={data}>{children}</MoviesContext.Provider>;
};

export default MoviesContextProvider;