import React from 'react';
import { FaHome, FaBuilding, FaBriefcase, FaUsers } from 'react-icons/fa';

const FeaturedCategories = () => {
  // Updated categories to match the image exactly: names and property counts
  const categories = [
    { id: 1, name: 'Modern Villa', count: '10 Properties', icon: <FaHome /> },
    { id: 2, name: 'Apartment', count: '2 Properties', icon: <FaBuilding /> }, // Fixed count to 2
    { id: 3, name: 'Office', count: '3 Properties', icon: <FaBriefcase /> },
    { id: 4, name: 'Single Family', count: '5 Properties', icon: <FaUsers /> },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#E9E9E9' }}>
      <div className="container text-center">
        {/* Section Heading - exactly as per image */}
        <div className="mb-5">
          <h2 className="fw-bold" style={{ color: '#1A1A1A', fontSize: '2rem' }}>
            Featured Categories
          </h2>
          <p className="text-muted" style={{ fontSize: '1rem' }}>Lorem ipsum dolor sit amet</p>
        </div>

         {/* Categories Grid */}
        <div className="row g-3 mt-2">
          {categories.map((item) => (
            <div key={item.id} className="col-6 col-md-3">
              <div 
                className="d-flex align-items-center p-3"
                style={{
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  backgroundColor: '#fff',
                  minHeight: '70px'
                }}
              >
                {/* Icon */}
                <div 
                  className="d-flex align-items-center justify-content-center me-3"
                  style={{ 
                    color: '#ccc',
                    fontSize: '22px',
                    minWidth: '30px'
                  }}
                >
                  {item.icon}
                </div>
                
                {/* Text Content */}
                <div>
                  <div style={{ color: '#000', fontSize: '15px', fontWeight: '500', lineHeight: '1.3' }}>
                    {item.name}
                  </div>
                  <div style={{ color: '#888', fontSize: '13px' }}>
                    {item.count}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots - exactly as in the image: first dot dark, others light */}
        <div className="mt-5 d-flex justify-content-center gap-2">
          <div style={{ 
            width: '26px', 
            height: '26px', 
            borderRadius: '50%', 
            border: '1px solid #333', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            <span style={{ width: '8px', height: '8px', backgroundColor: '#1A1A1A', borderRadius: '50%' }}></span>
          </div>
          <span style={{ width: '8px', height: '8px', backgroundColor: '#D9D9D9', borderRadius: '50%', alignSelf: 'center' }}></span>
          <span style={{ width: '8px', height: '8px', backgroundColor: '#D9D9D9', borderRadius: '50%', alignSelf: 'center' }}></span>
          <span style={{ width: '8px', height: '8px', backgroundColor: '#D9D9D9', borderRadius: '50%', alignSelf: 'center' }}></span>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
