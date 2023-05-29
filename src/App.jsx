import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import ContainCards from "./components/ContainCards";
import MovieDetail from "./components/MovieDetail";
import MoviesContextProvider from "./context/MoviesContext";
import TrailerContainer from "./components/TrailerContainer";
import SearchContainer from "./components/search/SearchContainer";

export default function App() {
  return (
    <BrowserRouter>
      <MoviesContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/detail/:id" element={<MovieDetail />} />
          <Route path="/category/:nameCategory" element={<ContainCards />} />
          <Route path="/search" element={<SearchContainer />} />
          <Route path="/trailer/:id" element={<TrailerContainer />} />
        </Routes>
        <Footer />
      </MoviesContextProvider>
    </BrowserRouter>
  );
}
