import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Academic from './pages/Academic';
import Travel from './pages/Travel';
import TravelDetail from './pages/TravelDetail';
import CustomPage from './pages/CustomPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background font-sans text-primary">
        <Navbar />
        
        <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/academic" element={<Academic />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/travel/:id" element={<TravelDetail />} />
            <Route path="/custom" element={<CustomPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
