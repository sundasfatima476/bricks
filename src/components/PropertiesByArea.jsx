import React from "react";

// Images Import (Aapne jo export ki hain unke paths yahan set karein)
import nyImg from "../assets/images/div.location-banner (5).png"; 
import sdImg from "../assets/images/div.location-banner (1).png";
import azImg from "../assets/images/div.location-banner (2).png";
import miImg from "../assets/images/div.location-banner (3).png";
import laImg from "../assets/images/h45.jpg.png"; 
import hwImg from "../assets/images/div.location-banner (4).png";
import flImg from "../assets/images/div.location-banner.png"; 
import chImg from "../assets/images/h48.jpg.png";
import waImg from "../assets/images/h410.jpg.png";

const PropertiesByArea = () => {
  const areas = [
    { id: 1, name: "New York", count: "8 Properties", img: nyImg },
    { id: 2, name: "San Diego", count: "0 Properties", img: sdImg },
    { id: 3, name: "Arizona", count: "0 Properties", img: azImg },
    { id: 4, name: "Miami", count: "2 Properties", img: miImg },
    { id: 5, name: "Los Angeles", count: "1 Property", img: laImg },
    { id: 6, name: "Hawaii", count: "0 Properties", img: hwImg },
    { id: 7, name: "Florida", count: "3 Properties", img: flImg },
    { id: 8, name: "Chicago", count: "2 Properties", img: chImg },
    { id: 9, name: "Washington", count: "0 Properties", img: waImg },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: "#fff" }}>
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: "#1A1A1A", fontSize: "2.5rem" }}>
            Properties by Area
          </h2>
          <p className="text-muted">Lorem ipsum dolor sit amet</p>
        </div>

        {/* Areas Grid */}
        <div className="row g-4">
          {areas.map((area) => (
            <div key={area.id} className="col-12 col-md-6 col-lg-4">
              <div 
                className="d-flex align-items-center p-2 border-0 bg-transparent" 
                style={{ cursor: "pointer", transition: "0.3s" }}
              >
                {/* Square Image with Rounded Corners */}
                <div 
                  style={{ 
                    width: "100px", 
                    height: "100px", 
                    borderRadius: "20px", 
                    overflow: "hidden",
                    flexShrink: 0 
                  }}
                >
                  <img 
                    src={area.img} 
                    alt={area.name} 
                    className="w-100 h-100" 
                    style={{ objectFit: "cover" }} 
                  />
                </div>

                {/* Text Content */}
                <div className="ms-3">
                  <h5 className="mb-0 fw-bold" style={{ color: "#1A1A1A" }}>
                    {area.name}
                  </h5>
                  <p className="mb-0 text-muted" style={{ fontSize: "14px" }}>
                    {area.count}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesByArea;