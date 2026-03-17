import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Bootstrap Icons import

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

// Contact Page Component
import Contact from './components/Contact.jsx';

// Detail Page Components
import CityDetailPage from './components/CityDetailPage';
import PropertyDetail from './components/PropertyDetail'; 

// Global Styles
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar is placed outside Routes so it appears on every page */}
        <Navbar />

        <Routes>
          {/* Main Route: Displays the landing page content */}
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

          {/* City Detail Route: Displays properties in a specific city */}
          <Route path="/properties/:slug" element={<CityDetailPage />} />
          
          {/* Property Detail Route: Displays details of a specific property */}
          <Route path="/properties/:citySlug/:propertySlug" element={<PropertyDetail />} />
          
          {/* Contact Page Route: Displays the contact page */}
          <Route path="/contact" element={<Contact />} />
          
        </Routes>

        {/* Footer is placed outside Routes so it remains visible on all pages */}
        <FooterSection />
      </div>
    </Router>
  );
}

export default App;