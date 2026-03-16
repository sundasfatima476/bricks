import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Layout Components
import Navbar from './components/Navbar';
import FooterSection from './components/footer.jsx';

// Home Page Sections
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
import FindHomeCTA from './components/FindHomeCTA.jsx';

// Detail Page Component
import CityDetailPage from './components/CityDetailPage';

// Global Styles
import './App.css';

function App() {
  return (
    /* The Router component enables navigation throughout the app.
      It must wrap the entire application structure.
    */
    <Router>
      <div className="App">
        {/* Navbar is placed outside Routes so it appears on every page */}
        <Navbar />

        <Routes>
          {/* Main Route: Displays the landing page content.
            The path "/" represents the home page.
          */}
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
                <PropertiesByArea />
                <RecentArticles />
                <FindHomeCTA />
              </>
            } 
          />

          {/* Dynamic Route: Displays when a user clicks a specific city card.
            The ":slug" is a dynamic parameter that captures the city name (e.g., /properties/new-york).
          */}
          <Route path="/properties/:slug" element={<CityDetailPage />} />
        </Routes>

        {/* Footer is placed outside Routes so it remains visible on all pages */}
        <FooterSection />
      </div>
    </Router>
  );
}

export default App;