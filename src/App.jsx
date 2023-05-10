import * as React from 'react';
import NavBar from "./components/NavBar"
import Home from './components/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';


export default function App() {

  return (
    <BrowserRouter>
<NavBar />
<Routes>
    <Route path="/" element={<Home />}></Route>
    </Routes>
    <Footer />
</BrowserRouter>
  )
}

