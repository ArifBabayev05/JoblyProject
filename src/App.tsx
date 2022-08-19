import React from 'react';
import Home from './Pages/Home'
import About from './Pages/About'
import Job from "./Pages/Jobs";
import Header from './Layouts/Header/index'

import {Footer} from './Layouts/Footer/index'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='job/:id' element={<Job/>}/>

          


          
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
