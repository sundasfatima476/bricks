import React from 'react';
import { 
  FaBed, 
  FaBath, 
  FaRulerCombined, 
  FaRegHeart, 
  FaMapMarkerAlt, 
  FaChevronLeft, 
  FaChevronRight 
} from 'react-icons/fa';

// Images ko import karein (Rasta check kar lein ke images isi folder mein hain)
import img307 from '../assets/images/307.png';
import img312 from '../assets/images/312.png';
import img317 from '../assets/images/317.png';
import img322 from '../assets/images/322.png';

const RecentProperties = () => {
  const properties = [
    {
      id: 1,
      image: img307,
      title: 'New Apartment Nice View',
      address: '42 Avenue O, Brooklyn',
      beds: 4, baths: 1, sqft: 460,
      price: '850', featured: true
    },
    {
      id: 2,
      image: img312,
      title: 'Villa Garden With Pool',
      address: '6822 Bay Pkwy, Brooklyn',
      beds: 3, baths: 1, sqft: 350,
      price: '350', featured: true
    },
    {
      id: 3,
      image: img317,
      title: 'Ely Parkway Apartment',
      address: '7203 20th Ave, Brooklyn',
      beds: 4, baths: 1, sqft: 560,
      price: '5,800', featured: true
    },
    {
      id: 4,
      image: img322,
      title: 'Modern Elegant Apartment',
      address: '1458 W Taylor St',
      beds: 4, baths: 1, sqft: 300,
      price: '590', featured: false
    }
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#fff' }}>
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: '#1A1A1A', fontSize: '2.2rem' }}>
            Recent Properties for Rent
          </h2>
          <p className="text-muted">Lorem ipsum dolor sit amet</p>
        </div>

        {/* Properties Grid */}
        <div className="row g-4">
          {properties.map((item) => (
            <div key={item.id} className="col-12 col-md-6 col-lg-3">
              <div 
                className="card h-100 border-0 shadow-sm" 
                style={{ borderRadius: '15px', overflow: 'hidden' }}
              >
                {/* Image Section with Overlay Buttons */}
                <div className="position-relative">
                  <img 
                    src={item.image} 
                    className="card-img-top" 
                    alt={item.title} 
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  
                  {/* Left & Right Arrows on Image */}
                  <button 
                    className="position-absolute start-0 top-50 translate-middle-y ms-2 border-0 bg-white rounded-circle shadow-sm d-flex align-items-center justify-content-center"
                    style={{ width: '28px', height: '28px', zIndex: 2, opacity: 0.8 }}
                  >
                    <FaChevronLeft size={10} color="#666" />
                  </button>
                  <button 
                    className="position-absolute end-0 top-50 translate-middle-y me-2 border-0 bg-white rounded-circle shadow-sm d-flex align-items-center justify-content-center"
                    style={{ width: '28px', height: '28px', zIndex: 2, opacity: 0.8 }}
                  >
                    <FaChevronRight size={10} color="#666" />
                  </button>

                  {/* Badges */}
                  <div className="position-absolute top-0 left-0 p-3 d-flex gap-2">
                    <span className="badge" style={{ backgroundColor: '#1A432F', fontSize: '10px', padding: '6px 10px', fontWeight: '600' }}>FOR RENT</span>
                    {item.featured && (
                      <span className="badge" style={{ backgroundColor: '#FFB800', fontSize: '10px', padding: '6px 10px', fontWeight: '600', color: '#1A1A1A' }}>FEATURED</span>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="card-body p-4">
                  <h5 className="fw-bold mb-1" style={{ fontSize: '1.05rem', color: '#1A1A1A' }}>{item.title}</h5>
                  <p className="text-muted mb-3" style={{ fontSize: '13px' }}>
                    <FaMapMarkerAlt className="me-1" /> {item.address}
                  </p>

                  {/* Specs Row */}
                  <div className="d-flex justify-content-between py-3 border-top border-bottom mb-3" style={{ borderColor: '#f3f3f3 !important' }}>
                    <div className="text-muted" style={{ fontSize: '12px' }}>
                      <FaBed className="me-1" /> {item.beds}
                    </div>
                    <div className="text-muted" style={{ fontSize: '12px' }}>
                      <FaBath className="me-1" /> {item.baths}
                    </div>
                    <div className="text-muted" style={{ fontSize: '12px' }}>
                      <FaRulerCombined className="me-1" /> {item.sqft}
                    </div>
                  </div>

                  {/* Price & Favorite Button */}
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="fw-bold" style={{ color: '#FF5A3C', fontSize: '1.2rem' }}>${item.price}</span>
                      <span className="text-muted" style={{ fontSize: '13px' }}>/month</span>
                    </div>
                    <div 
                      className="d-flex align-items-center justify-content-center" 
                      style={{ 
                        width: '36px', 
                        height: '36px', 
                        borderRadius: '50%', 
                        border: '1px solid #f0f0f0',
                        cursor: 'pointer',
                        color: '#999'
                      }}
                    >
                      <FaRegHeart />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Pagination (Matching your Style) */}
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

export default RecentProperties;