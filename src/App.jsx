import * as React from 'react';
import NavBar from "./components/NavBar"
import Home from './components/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import ContainCards from './components/ContainCards';
import MovieDetail from './components/MovieDetail';
import MoviesContextProvider from './context/MoviesContext';


export default function App() {

 

  return (
    <BrowserRouter>
     <MoviesContextProvider>
<NavBar />
<Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/detail/:id" element={<MovieDetail />} />
    <Route path="/category/:nameCategory" element={<ContainCards />} />
    </Routes>
    <Footer />
    </MoviesContextProvider>
</BrowserRouter>
  )
}


//hay que hacer un axios en cada componente donde necesitamos obtener datos?
//donde tengo que usar useEffects??
