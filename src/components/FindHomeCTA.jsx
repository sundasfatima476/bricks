import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const FindHomeCTA = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container py-4">
        <div className="row g-4">
          
          {/* Left Card - Looking for new home */}
          <div className="col-md-6">
            <div 
              className="p-5 h-100 d-flex flex-column justify-content-center"
              style={{ 
                backgroundColor: '#FDF7F5',
                borderRadius: '30px',
                minHeight: '350px'
              }}
            >
              <h2 className="fw-bold mb-4" style={{ fontSize: '2.5rem', color: '#1A1A1A' }}>
                Looking for <br />the new home?
              </h2>
              
              <p className="text-muted mb-5" style={{ fontSize: '16px', lineHeight: '1.6', maxWidth: '90%' }}>
                10 new offers every day. 350 offers on site, trusted by a community of thousands of users.
              </p>
              
              <button 
                className="btn d-inline-flex align-items-center gap-2 px-0"
                style={{ 
                  color: '#1A432F',
                  fontWeight: '600',
                  border: 'none',
                  backgroundColor: 'transparent',
                  width: 'fit-content'
                }}
              >
                Get Started <FaArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Right Card - Want to sell your home */}
          <div className="col-md-6">
            <div 
              className="p-5 h-100 d-flex flex-column justify-content-center"
              style={{ 
                backgroundColor: '#1A432F',
                borderRadius: '30px',
                minHeight: '350px'
              }}
            >
              <h2 className="fw-bold mb-4" style={{ fontSize: '2.5rem', color: '#FFFFFF' }}>
                Want to sell <br />your home?
              </h2>
              
              <p className="mb-5" style={{ fontSize: '16px', lineHeight: '1.6', color: '#E0E0E0', maxWidth: '90%' }}>
                10 new offers every day. 350 offers on site, trusted by a community of thousands of users.
              </p>
              
              <button 
                className="btn d-inline-flex align-items-center gap-2 px-0"
                style={{ 
                  color: '#FFFFFF',
                  fontWeight: '600',
                  border: 'none',
                  backgroundColor: 'transparent',
                  width: 'fit-content'
                }}
              >
                Get Started <FaArrowRight size={14} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FindHomeCTA;