import React from "react";
import { FaPhoneAlt, FaRegUser } from "react-icons/fa"; // Updated icons for better match

function Navbar() {
  // --- Inline Styles ---
  const styles = {
    navbar: {
      backgroundColor: "#ffffff",
      borderBottom: "1px solid #f0f0f0",
      padding: "15px 0",
    },
    brand: {
      color: "#2C4B40", // Dark Teal
      fontSize: "22px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    navLink: {
      color: "#2C4B40",
      fontWeight: "500",
      fontSize: "15px",
      display: "flex",
      alignItems: "center",
      gap: "4px",
    },
    phoneSection: {
      color: "#2C4B40",
      fontWeight: "600",
      fontSize: "15px",
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
    },
    addBtn: {
      borderColor: "#2C4B40",
      color: "#2C4B40",
      padding: "8px 22px",
      fontSize: "14px",
      fontWeight: "500",
    },
    dropdownArrow: {
      fontSize: "10px",
      marginLeft: "2px"
    }
  };

  return (
    <nav className="navbar navbar-expand-lg" style={styles.navbar}>
      <div className="container">
        
        {/* Logo Section */}
        <a className="navbar-brand fw-bold" href="#" style={styles.brand}>
          {/* SVG for the logo icon based on image */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21h18M3 7l9-4 9 4v14H3V7z" />
            <path d="M9 21V9h6v12" />
          </svg>
          Bricks&Keys
        </a>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarMenu">
          <ul className="navbar-nav gap-4">
            <li className="nav-item">
              <a className="nav-link" href="#" style={styles.navLink}>
                Home <span style={styles.dropdownArrow}>▼</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={styles.navLink}>
                Listings <span style={styles.dropdownArrow}>▼</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={styles.navLink}>
                Members <span style={styles.dropdownArrow}>▼</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={styles.navLink}>
                Blog <span style={styles.dropdownArrow}>▼</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={styles.navLink}>
                Pages <span style={styles.dropdownArrow}>▼</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={styles.navLink}>Contact</a>
            </li>
          </ul>
        </div>

        {/* Right Side Icons & Button */}
        <div className="d-flex align-items-center gap-4 ms-auto">
          
          <div className="d-flex align-items-center gap-2" style={styles.phoneSection}>
            <FaPhoneAlt size={14} />
            <span>+923286561587</span>
          </div>

          <div style={styles.userIconCircle}>
            <FaRegUser size={18} />
          </div>

          <button className="btn btn-outline-dark rounded-pill" style={styles.addBtn}>
            Add Property
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;