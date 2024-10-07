import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import ThirukkuralSectionsPage from './Pages/ThirukkuralSections';
import Repositories from './Pages/Repositories';
import Aram from './Pages/Aram';
import Porul from './Pages/Porul';
import Inbam from './Pages/Inbam';
import Features from './Pages/Features';

const AppRoutes = () => {
  const location = useLocation();
  
  return (
    <div className="App flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/repositories" element={<Repositories />} />
          <Route path="/section1" element={<Aram />} />
          <Route path="/section2" element={<Porul />} />
          <Route path="/section3" element={<Inbam />} />
          <Route path="/aram" element={<Aram />} />
          <Route path="/porul" element={<Porul />} />
          <Route path="/inbam" element={<Inbam />} />
          <Route path="/sections" element={<ThirukkuralSectionsPage />} />
          <Route path="/features" element={<Features />} />
        </Routes>
        
        {location.pathname === '/' && <ThirukkuralSectionsPage />}
      </main>
      
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <LanguageProvider>
        <AppRoutes />
      </LanguageProvider>
    </Router>
  );
}

export default App;