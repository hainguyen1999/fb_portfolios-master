import React from "react";
import './styles/global.scss';
/*import Header from './Components/Header'; // Header
import Footer from './Components/Footer';*/
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
// PIMPORT Pages 
import Setup from "./pages/Setup";
import TemplatePreview from "./pages/TemplatePreview";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='deep-height'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path="/setup" element={<Setup />} />
        <Route path="/preview" element={<TemplatePreview />} />
      </Routes>
    </div>
  );
}

export default App;
