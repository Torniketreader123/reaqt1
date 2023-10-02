import React from 'react';

function Footer() {
  return (
    <footer className="bg-light py-4">
      <div className="container">
        <div className="text-center">
          &copy; {new Date().getFullYear()} Your Company Name
        </div>
      </div>
    </footer>
  );
}

export default Footer;
