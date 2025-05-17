// src/App.js
import './App.css';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Download from './components/Download';
import Faq from './components/Faq';
import Feature from './components/Feature';
import Home from './components/Home';
import Header from './components/shared/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/download" element={<Download />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </Router>
  );
}

export default App;
