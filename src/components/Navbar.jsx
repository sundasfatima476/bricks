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
      padding: "10px 15px",
      transition: "0.3s",
    },
    dropdownMenu: {
      border: "none",
      boxShadow: "0px 8px 24px rgba(0,0,0,0.12)",
      borderRadius: "12px",
      padding: "10px",
      marginTop: "0", 
    },
    dropdownItem: {
      color: "#2C4B40",
      padding: "8px 15px",
      fontSize: "14px",
      borderRadius: "6px",
      transition: "0.2s",
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

  const renderDropdown = (title, items) => (
    <li className="nav-item dropdown custom-dropdown">
      <a className="nav-link dropdown-toggle" href="#" style={styles.navLink}>
        {title}
      </a>
      <ul className="dropdown-menu shadow-sm" style={styles.dropdownMenu}>
        {items.map((item, index) => (
          <li key={index}>
            <a className="dropdown-item custom-item" href="#" style={styles.dropdownItem}>{item}</a>
          </li>
        ))}
      </ul>
    </li>
  );

  return (
    <>
      <style>
        {`
          @media (min-width: 992px) {
            /* Navbar Link Hover - Green Color */
            .custom-dropdown:hover > .nav-link {
              color: #2C4B40 !important; 
              opacity: 0.7;
            }
            
            /* Show Dropdown on Hover */
            .custom-dropdown:hover > .dropdown-menu {
              display: block;
              animation: fadeInUp 0.3s ease;
            }
          }

          /* Dropdown Item Hover Effect */
          .custom-item:hover {
            background-color: #2C4B40 !important;
            color: #ffffff !important;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <nav className="navbar navbar-expand-lg" style={styles.navbar}>
        <div className="container">
          <a className="navbar-brand fw-bold" href="#" style={styles.brand}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 21h18M3 7l9-4 9 4v14H3V7z" /><path d="M9 21V9h6v12" />
            </svg>
            Bricks&Keys
          </a>

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

          <div className="d-flex align-items-center gap-4 ms-auto">
            <div className="d-none d-lg-flex align-items-center gap-2" style={{color: "#2C4B40", fontWeight: "600"}}>
              <FaPhoneAlt size={14} />
              <span>+923286561587</span>
            </div>

            <div style={styles.userIconCircle} onClick={() => setIsModalOpen(true)}>
              <FaRegUser size={18} />
            </div>

            <button className="btn rounded-pill" style={{border: "1px solid #2C4B40", color: "#2C4B40", padding: "8px 22px", fontWeight: "500"}}>
              Add Property
            </button>
          </div>
        </div>
      </nav>

      <RegistrationForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default Navbar;