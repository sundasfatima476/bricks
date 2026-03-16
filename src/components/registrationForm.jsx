import React from "react";
import { useState } from "react";

const RegistrationForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Agar state false hai to kuch show nahi hoga

  return (
    <div style={modalStyles.overlay} onClick={onClose}>
      <div style={modalStyles.content} onClick={(e) => e.stopPropagation()}>
        <div style={modalStyles.header}>
          <h3>Login / Register</h3>
          <button onClick={onClose} style={modalStyles.closeBtn}>&times;</button>
        </div>
        <form style={modalStyles.form}>
          <input type="email" placeholder="Email Address" style={modalStyles.input} />
          <input type="password" placeholder="Password" style={modalStyles.input} />
          <button type="submit" style={modalStyles.submitBtn}>Login</button>
        </form>
        <p style={{textAlign: 'center', marginTop: '10px', fontSize: '14px'}}>
          Don't have an account? <a href="#" style={{color: '#2C4B40'}}>Sign Up</a>
        </p>
      </div>
    </div>
  );
};

const modalStyles = {
  overlay: { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.6)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 2000 },
  content: { background: "white", padding: "30px", borderRadius: "15px", width: "100%", maxWidth: "400px", position: "relative", boxShadow: "0 10px 25px rgba(0,0,0,0.2)" },
  header: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" },
  closeBtn: { border: "none", background: "none", fontSize: "24px", cursor: "pointer" },
  form: { display: "flex", flexDirection: "column", gap: "15px" },
  input: { padding: "10px", borderRadius: "5px", border: "1px solid #ddd", outline: "none" },
  submitBtn: { padding: "10px", backgroundColor: "#2C4B40", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }
};

export default RegistrationForm;