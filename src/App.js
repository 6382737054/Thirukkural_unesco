import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import ThirukkuralSectionsPage from './Pages/ThirukkuralSections';
import Repositories from './Pages/Repositories';

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