import React, { useState } from "react";
import { FaPhoneAlt, FaRegUser } from "react-icons/fa";
import RegistrationForm from "./registrationForm";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- Inline Styles ---
  const styles = {
    navbar: {
      backgroundColor: "#ffffff",
      borderBottom: "1px solid #f0f0f0",
      padding: "15px 0",
    },
    brand: {
      color: "#2C4B40",
      fontSize: "22px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      textDecoration: "none",
    },
    navLink: {
      color: "#2C4B40",
      fontWeight: "500",
      fontSize: "15px",
      display: "flex",
      alignItems: "center",
      gap: "4px",
    },
    dropdownMenu: {
      border: "none",
      boxShadow: "0px 8px 24px rgba(0,0,0,0.12)",
      borderRadius: "12px",
      padding: "10px",
      marginTop: "10px",
    },
    dropdownItem: {
      color: "#2C4B40",
      padding: "8px 15px",
      fontSize: "14px",
      borderRadius: "6px",
    },
    userIconCircle: {
      width: "38px",
      height: "38px",
      borderRadius: "50%",
      border: "1px solid #D4DCE0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#2C4B40",
      cursor: "pointer"
    }
  };

  // Helper function: Navbar ke andar hi dropdown banane ke liye
  const renderDropdown = (title, items) => (
    <li className="nav-item dropdown">
      <a 
        className="nav-link dropdown-toggle" 
        href="#" 
        id={`dropdown-${title}`} 
        role="button" 
        data-bs-toggle="dropdown" 
        aria-expanded="false" 
        style={styles.navLink}
      >
        {title}
      </a>
      <ul className="dropdown-menu" aria-labelledby={`dropdown-${title}`} style={styles.dropdownMenu}>
        {items.map((item, index) => (
          <li key={index}>
            <a className="dropdown-item" href="#" style={styles.dropdownItem}>{item}</a>
          </li>
        ))}
      </ul>
    </li>
  );

  return (
    <nav className="navbar navbar-expand-lg" style={styles.navbar}>
      <div className="container">
        
        {/* Logo */}
        <a className="navbar-brand fw-bold" href="#" style={styles.brand}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 21h18M3 7l9-4 9 4v14H3V7z" /><path d="M9 21V9h6v12" />
          </svg>
          Bricks&Keys
        </a>

        {/* Menu Items */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarMenu">
          <ul className="navbar-nav gap-3">
            {renderDropdown("Home", ["Main Page", "Modern Home", "Classic Style"])}
            {renderDropdown("Listings", ["Grid Layout", "List Layout", "Map View"])}
            {renderDropdown("Members", ["Our Agents", "Agencies", "Packages"])}
            {renderDropdown("Blog", ["Latest News", "Real Estate Tips"])}
            {renderDropdown("Pages", ["About Us", "Our Services", "FAQ", "Pricing"])}
            <li className="nav-item">
              <a className="nav-link" href="#" style={styles.navLink}>Contact</a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="d-flex align-items-center gap-4 ms-auto">
          <div className="d-none d-lg-flex align-items-center gap-2" style={{color: "#2C4B40", fontWeight: "600"}}>
            <FaPhoneAlt size={14} />
            <span>+923286561587</span>
          </div>

          <div  className="custom-btn-outline" style={styles.userIconCircle} onClick={() => setIsModalOpen(true)}>
            <FaRegUser size={18} />
          </div>

          <button className="btn custom-btn-outline rounded-pill " style={{borderColor: "#2C4B40", color: "#2C4B40", padding: "8px 22px"}}>
            Add Property
          </button>
        </div>
      </div>

      <RegistrationForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
}

export default Navbar;