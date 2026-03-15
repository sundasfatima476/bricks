import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
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
import './App.css'

function App() {


  return (
    <>
    
    <Navbar/>
    <HeroSection/>
    <Companies/>
    <HowItWorks/>
    <FeaturedCategories/>
    <RecentProperties/>
    <WhyWorkWithUs/>
    <TestimonialSection/>
    <Companies1/>
    <PropertiesByArea/>
    <RecentArticles/>
    </>
  )
}

export default App
