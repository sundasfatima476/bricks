import React, { useState } from 'react';
import { FaHome, FaBuilding, FaBriefcase, FaUsers } from 'react-icons/fa';

const FeaturedCategories = () => {
  // State for active highlight
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    { id: 1, name: 'Modern Villa', count: '10 Properties', icon: <FaHome /> },
    { id: 2, name: 'Apartment', count: '2 Properties', icon: <FaBuilding /> },
    { id: 3, name: 'Office', count: '3 Properties', icon: <FaBriefcase /> },
    { id: 4, name: 'Single Family', count: '5 Properties', icon: <FaUsers /> },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#E9E9E9' }}>
      <div className="container text-center">
        <div className="mb-5">
          <h2 className="fw-bold" style={{ color: '#1A1A1A', fontSize: '2rem' }}>
            Featured Categories
          </h2>
          <p className="text-muted" style={{ fontSize: '1rem' }}>Lorem ipsum dolor sit amet</p>
        </div>

        {/* Categories Grid - Static Positions */}
        <div className="row g-3 mt-2">
          {categories.map((item, index) => (
            <div key={item.id} className="col-6 col-md-3">
              <div 
                className="d-flex align-items-center p-3"
                onClick={() => setActiveIndex(index)}
                style={{
                  cursor: 'pointer',
                  
                  border: index === activeIndex ? '2px solid #1A1A1A' : '1px solid #e0e0e0',
                  borderRadius: '8px',
                  backgroundColor: '#fff',
                  minHeight: '70px',
                  transform: index === activeIndex ? 'scale(1.05)' : 'scale(1)',
                  transition: '0.4s ease-in-out',
                  boxShadow: index === activeIndex ? '0 4px 12px rgba(0,0,0,0.08)' : 'none'
                }}
              >
                <div 
                  style={{ 
                    color: index === activeIndex ? '#1A1A1A' : '#ccc', 
                    fontSize: '22px', 
                    minWidth: '30px',
                    transition: '0.3s'
                  }} 
                  className="me-3"
                >
                  {item.icon}
                </div>
                <div className="text-start">
                  <div style={{ color: '#000', fontSize: '15px', fontWeight: '500', lineHeight: '1.3' }}>
                    {item.name}
                  </div>
                  <div style={{ color: '#888', fontSize: '13px' }}>{item.count}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicators (Dots) - Click to Change Highlight */}
        <div className="mt-5 d-flex justify-content-center gap-2 align-items-center">
          {categories.map((_, index) => (
            <div 
              key={index} 
              onClick={() => setActiveIndex(index)} 
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '26px', height: '26px' }}
            >
              {index === activeIndex ? (
                <div style={{ 
                  width: '24px', height: '24px', borderRadius: '50%', 
                  border: '1px solid #333', display: 'flex', 
                  alignItems: 'center', justifyContent: 'center' 
                }}>
                  <span style={{ width: '8px', height: '8px', backgroundColor: '#1A1A1A', borderRadius: '50%' }}></span>
                </div>
              ) : (
                <span 
                  style={{ 
                    width: '8px', height: '8px', backgroundColor: '#D9D9D9', 
                    borderRadius: '50%' 
                  }}
                ></span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;