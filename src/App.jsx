import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing Router components
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing UI Components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Companies from './components/Companies';
import Companies1 from './components/Companies1';
import HowItWorks from './components/HowItWork';
import FeaturedCategories from './components/FeaturedCategories';
import RecentProperties from './components/RecentProperties.jsx';
import WhyWorkWithUs from './components/WhyWorkWithUs.jsx';
import TestimonialSection from './components/TestimonialSection.jsx';
import PropertiesByArea from './components/PropertiesByArea.jsx';
import RecentArticles from './components/RecentArticles.jsx';
import FooterSection from './components/footer.jsx';
import FindHomeCTA from './components/FindHomeCTA.jsx';

// Styling
import './App.css';

/**
 * Placeholder component for the City Details page.
 * This is what users see after clicking a city like "New York".
 */
const CityDetailPage = () => {
  return (
    <div className="container py-5 mt-5 text-center" style={{ minHeight: '50vh' }}>
      <h2 style={{ color: '#2d6a4f', fontWeight: 'bold' }}>Properties in this Area</h2>
      <p className="text-muted">Showing all available listings for the selected location.</p>
      {/* You can map specific property cards here later */}
    </div>
  );
};

function App() {
  return (
    // Wrap the entire app in Router to enable navigation functionality
    <Router>
      <div className="App">
        {/* Navbar stays at the top on all pages */}
        <Navbar />

        <Routes>
          {/* Main Home Route: Contains all your sections */}
          <Route 
            path="/" 
            element={
              <>
                <HeroSection />
                <Companies />
                <HowItWorks />
                <FeaturedCategories />
                <RecentProperties />
                <WhyWorkWithUs />
                <TestimonialSection />
                <Companies1 />
                {/* This section now contains the click logic */}
                <PropertiesByArea />
                <RecentArticles />
                <FindHomeCTA />
              </>
            } 
          />

          {/* Dynamic Route: Displays when a user clicks a city from PropertiesByArea */}
          {/* ":slug" acts as a variable (e.g., /properties/new-york) */}
          <Route path="/properties/:slug" element={<CityDetailPage />} />
        </Routes>

        {/* Footer stays at the bottom on all pages */}
        <FooterSection />
      </div>
    </Router>
  );
}

export default App;