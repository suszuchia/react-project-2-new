import React from "react";
import "../index.css"; // Adjust the path to correctly locate index.css

function Header() {
  return (
    <header>
      <img src="/logo.png" className="logo" alt="Logo" />
      <h1>Currency Converter</h1>
    </header>
  );
}

export default Header;
