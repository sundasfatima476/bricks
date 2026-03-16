import React from "react";
import { useParams, Link } from "react-router-dom";

const CityDetailPage = () => {
  const { slug } = useParams();

  // Sabhi cities ka data aur har city mein 4 unique properties
  const cityData = {
    "new-york": {
      name: "New York",
      desc: "Experience the iconic skyline and bustling streets of the Big Apple.",
      banner: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1200",
      properties: [
        { id: 1, title: "Manhattan Luxury Loft", price: "$1,200,000", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=600" },
        { id: 2, title: "Brooklyn Modern Condo", price: "$850,000", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=600" },
        { id: 3, title: "Central Park Penthouse", price: "$3,500,000", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=600" },
        { id: 4, title: "Queens Family Home", price: "$720,000", img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=600" }
      ]
    },
    "san-diego": {
      name: "San Diego",
      desc: "Coastal beauty and perfect weather in America's Finest City.",
      banner: "https://images.unsplash.com/photo-1513366408769-f1d9b0dc9aa0?q=80&w=1200",
      properties: [
        { id: 5, title: "La Jolla Villa", price: "$2,100,000", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600" },
        { id: 6, title: "Oceanfront Cottage", price: "$1,450,000", img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=600" },
        { id: 7, title: "Downtown Studio", price: "$450,000", img: "https://images.unsplash.com/photo-1536376074432-a228d217929a?q=80&w=600" },
        { id: 8, title: "Mission Valley Condo", price: "$550,000", img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=600" }
      ]
    },
    "arizona": {
      name: "Arizona",
      desc: "Beautiful desert landscapes and luxury golf resorts.",
      banner: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200",
      properties: [
        { id: 9, title: "Scottsdale Manor", price: "$1,250,000", img: "https://images.unsplash.com/photo-1472224371017-08207f84aaae?q=80&w=600" },
        { id: 10, title: "Phoenix Desert Villa", price: "$890,000", img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=600" },
        { id: 11, title: "Sedona Red Rock Home", price: "$1,100,000", img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=600" },
        { id: 12, title: "Tucson Ranch House", price: "$420,000", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=600" }
      ]
    },
    "miami": {
      name: "Miami",
      desc: "Vibrant beaches and luxury oceanfront living.",
      banner: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?q=80&w=1200",
      properties: [
        { id: 13, title: "South Beach Penthouse", price: "$3,200,000", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=600" },
        { id: 14, title: "Coral Gables Estate", price: "$2,100,000", img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=600" },
        { id: 15, title: "Brickell Bay Condo", price: "$750,000", img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=600" },
        { id: 16, title: "Key Biscayne Villa", price: "$4,500,000", img: "https://images.unsplash.com/photo-1575517111478-7f6afd0973db?q=80&w=600" }
      ]
    },
    "los-angeles": {
      name: "Los Angeles",
      desc: "The heart of entertainment and sunny California lifestyle.",
      banner: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200",
      properties: [
        { id: 17, title: "Beverly Hills Mansion", price: "$5,800,000", img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=600" },
        { id: 18, title: "Santa Monica Beach House", price: "$2,400,000", img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=600" },
        { id: 19, title: "Hollywood Hills Modern", price: "$3,100,000", img: "https://images.unsplash.com/photo-1430285561322-7808604715df?q=80&w=600" },
        { id: 20, title: "Silver Lake Bungalow", price: "$980,000", img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=600" }
      ]
    },
    "hawaii": {
      name: "Hawaii",
      desc: "Tropical paradise with stunning ocean views.",
      banner: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
      properties: [
        { id: 21, title: "Maui Beachfront Villa", price: "$2,900,000", img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=600" },
        { id: 22, title: "Oahu Mountain Retreat", price: "$1,200,000", img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=600" },
        { id: 23, title: "Honolulu Skyline Suite", price: "$850,000", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=600" },
        { id: 24, title: "Kauai Eco House", price: "$1,100,000", img: "https://images.unsplash.com/photo-1472224371017-08207f84aaae?q=80&w=600" }
      ]
    },
    "florida": {
      name: "Florida",
      desc: "Sun-soaked properties in the Sunshine State.",
      banner: "https://images.unsplash.com/photo-1506466010722-395aa2bef877?q=80&w=1200",
      properties: [
        { id: 25, title: "Orlando Theme Park Villa", price: "$650,000", img: "https://images.unsplash.com/photo-1580587767303-94101789516a?q=80&w=600" },
        { id: 26, title: "Tampa Bay Waterfront", price: "$1,200,000", img: "https://images.unsplash.com/photo-1448630305456-91e8d6afb575?q=80&w=600" },
        { id: 27, title: "Naples Luxury Mansion", price: "$3,400,000", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600" },
        { id: 28, title: "Jacksonville Family Estate", price: "$550,000", img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=600" }
      ]
    },
    "chicago": {
      name: "Chicago",
      desc: "Iconic architecture along the Windy City skyline.",
      banner: "https://images.unsplash.com/photo-1494522324078-65176ac99495?q=80&w=1200",
      properties: [
        { id: 29, title: "Lake Shore Drive Apt", price: "$1,100,000", img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=600" },
        { id: 30, title: "Lincoln Park Brick House", price: "$920,000", img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=600" },
        { id: 31, title: "River North Modern Loft", price: "$680,000", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=600" },
        { id: 32, title: "Wicker Park Trendy Condo", price: "$540,000", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=600" }
      ]
    },
    "washington": {
      name: "Washington",
      desc: "Historic neighborhoods and modern metropolitan living.",
      banner: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1200",
      properties: [
        { id: 33, title: "Capital Hill Manor", price: "$1,800,000", img: "https://images.unsplash.com/photo-1464146072230-91cabc968266?q=80&w=600" },
        { id: 34, title: "Georgetown Classic", price: "$2,200,000", img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=600" },
        { id: 35, title: "Dupont Circle Condo", price: "$670,000", img: "https://images.unsplash.com/photo-1536376074432-a228d217929a?q=80&w=600" },
        { id: 36, title: "Potomac View Estate", price: "$3,500,000", img: "https://images.unsplash.com/photo-1575517111478-7f6afd0973db?q=80&w=600" }
      ]
    }
  };

  const currentCity = cityData[slug];

  if (!currentCity) {
    return (
      <div className="container py-5 mt-5 text-center">
        <h2 style={{ color: "#1b4332" }}>Content Not Available</h2>
        <Link to="/" className="btn btn-success mt-3" style={{ backgroundColor: "#2d6a4f" }}>Go Back Home</Link>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#f8faf9", minHeight: "100vh" }}>
      {/* Banner */}
      <div 
        style={{ 
          height: "400px", 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${currentCity.banner})`,
          backgroundSize: "cover", backgroundPosition: "center",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#fff", textAlign: "center"
        }}
      >
        <div className="container">
          <h1 className="display-3 fw-bold">{currentCity.name}</h1>
          <p className="fs-5">{currentCity.desc}</p>
        </div>
      </div>

      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold" style={{ color: "#1b4332" }}>Listings in {currentCity.name}</h3>
          <Link to="/" className="btn btn-outline-success px-4 rounded-pill">Back Home</Link>
        </div>

        <div className="row g-4">
          {currentCity.properties.map((p) => (
            <div key={p.id} className="col-12 col-md-6 col-lg-3"> {/* col-lg-3 used for 4 items per row */}
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                <img src={p.img} alt={p.title} style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body">
                  <h6 className="fw-bold mb-2" style={{ color: "#1b4332" }}>{p.title}</h6>
                  <p className="text-muted small">Luxury living at its best.</p>
                  <div className="d-flex justify-content-between align-items-center pt-2 border-top">
                    <span className="fw-bold text-success">{p.price}</span>
                    <button className="btn btn-success btn-sm px-3 rounded-pill" style={{ backgroundColor: "#2d6a4f" }}>View</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CityDetailPage;