import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import MainSection from './Components/MainSection';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Section1st from './Components/Section1st';
import Section2nd from './Components/Section2nd';
import Section3rd from './Components/Section3rd';
import Footer from './Components/Footer';



function App() {
  return (
    <div className='mainCover' id='home' >
      <BrowserRouter>
        <Header />
        <MainSection />
        <Skills />
        <Routes>
          <Route path='/' element={<Projects />}>
            <Route path='section1' element={<Section1st />} />
            <Route path='section2' element={<Section2nd />} />
            <Route path='section3' element={<Section3rd />} />
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;