// src/components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="footer-sticky bg-dark text-white mt-5 p-3 text-center">
      <p className="mb-0">
        © {new Date().getFullYear()} JoinUs Play. All rights reserved.
      </p>
      <small>Made with love for amateur footballers in Korea</small>
    </footer>
  );
}

export default Footer;
