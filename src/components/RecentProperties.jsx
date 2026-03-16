import React, { useState, useEffect } from 'react';
import { 
  FaBed, 
  FaBath, 
  FaRulerCombined, 
  FaRegHeart, 
  FaMapMarkerAlt 
} from 'react-icons/fa';

// Images Import
import img307 from '../assets/images/307.png';
import img312 from '../assets/images/312.png';
import img317 from '../assets/images/317.png';
import img322 from '../assets/images/322.png';

const RecentProperties = () => {
  
  const [properties, setProperties] = useState([
    { id: 1, image: img307, title: 'New Apartment Nice View', address: '42 Avenue O, Brooklyn', beds: 4, baths: 1, sqft: 460, price: '850', featured: true },
    { id: 2, image: img312, title: 'Villa Garden With Pool', address: '6822 Bay Pkwy, Brooklyn', beds: 3, baths: 1, sqft: 350, price: '350', featured: true },
    { id: 3, image: img317, title: 'Ely Parkway Apartment', address: '7203 20th Ave, Brooklyn', beds: 4, baths: 1, sqft: 560, price: '5,800', featured: true },
    { id: 4, image: img322, title: 'Modern Elegant Apartment', address: '1458 W Taylor St', beds: 4, baths: 1, sqft: 300, price: '590', featured: false }
  ]);

  // Rotation Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setProperties((prev) => {
        const newArray = [...prev];
        const firstItem = newArray.shift(); 
        newArray.push(firstItem);
        return newArray;
      });
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-5" style={{ backgroundColor: '#fff' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: '#1A1A1A', fontSize: '2.2rem' }}>Recent Properties for Rent</h2>
          <p className="text-muted">Explore our latest listings</p>
        </div>

        <div className="row g-4">
          {properties.map((item, index) => (
            <div 
              key={item.id} 
              className="col-12 col-md-6 col-lg-3" 
              style={{ transition: 'all 0.6s ease-in-out' }}
            >
              <div 
                className="card h-100 border-0 shadow-sm" 
                style={{ 
                  borderRadius: '15px', 
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  
                  outline: index === 0 ? '2px solid #1A1A1A' : 'none', 
                  transform: index === 0 ? 'translateY(-10px)' : 'none',
                  boxShadow: index === 0 ? '0 10px 20px rgba(0,0,0,0.1)' : 'none'
                }}
              >
                <div className="position-relative">
                  <img src={item.image} className="card-img-top" alt={item.title} style={{ height: '200px', objectFit: 'cover' }} />
                  <div className="position-absolute top-0 left-0 p-3 d-flex gap-2">
                    <span className="badge" style={{ backgroundColor: '#1A432F', fontSize: '10px' }}>FOR RENT</span>
                    {item.featured && <span className="badge" style={{ backgroundColor: '#FFB800', color: '#1A1A1A', fontSize: '10px' }}>FEATURED</span>}
                  </div>
                </div>

                <div className="card-body p-4 text-start">
                  <h5 className="fw-bold mb-1" style={{ fontSize: '1.05rem' }}>{item.title}</h5>
                  <p className="text-muted mb-3" style={{ fontSize: '13px' }}><FaMapMarkerAlt className="me-1" /> {item.address}</p>

                  <div className="d-flex justify-content-between py-3 border-top border-bottom mb-3" style={{ borderColor: '#f3f3f3' }}>
                    <div className="text-muted" style={{ fontSize: '12px' }}><FaBed className="me-1" /> {item.beds}</div>
                    <div className="text-muted" style={{ fontSize: '12px' }}><FaBath className="me-1" /> {item.baths}</div>
                    <div className="text-muted" style={{ fontSize: '12px' }}><FaRulerCombined className="me-1" /> {item.sqft}</div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="fw-bold" style={{ color: '#FF5A3C', fontSize: '1.2rem' }}>${item.price}</span>
                      <span className="text-muted" style={{ fontSize: '13px' }}>/month</span>
                    </div>
                    <div style={{ color: '#999', cursor: 'pointer' }}><FaRegHeart /></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Section - Static representation of rotation */}
        <div className="mt-5 d-flex justify-content-center gap-2 align-items-center">
          {properties.map((_, index) => (
            <div key={index}>
              {index === 0 ? (
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', border: '1px solid #1A1A1A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ width: '8px', height: '8px', backgroundColor: '#1A1A1A', borderRadius: '50%' }}></span>
                </div>
              ) : (
                <span style={{ width: '8px', height: '8px', backgroundColor: '#D9D9D9', borderRadius: '50%', display: 'block' }}></span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProperties;