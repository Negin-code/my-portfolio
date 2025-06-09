import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AnimatedCursor from 'react-animated-cursor';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import CrimsonPlate from './Pages/CrimsonPlate';
import AlzCare from './Pages/AlzCare';
import ListeningLab from './Pages/ListeningLab';
import CultureCafe from './Pages/CultureCafe';
import Guardian from './Pages/Guardian';
import GoodReads from './Pages/GoodReads';
import './App.css';

function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={10}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: '#493B32'
        }}
        outerStyle={{
          border: '1px solid #493B32'
        }}
      />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/crimson-plate" element={<CrimsonPlate />} />
          <Route path="/projects/alzcare" element={<AlzCare />} />
          <Route path="/projects/listening-lab" element={<ListeningLab />} />
          <Route path="/projects/culture-cafe" element={<CultureCafe />} />
          <Route path="/projects/guardian" element={<Guardian />} />
          <Route path="/projects/goodreads" element={<GoodReads />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
