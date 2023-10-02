import React from 'react';

function Header() {
  return (
    <header className="bg-primary text-white text-center py-5">
      <div className="container">
        <h1 className="display-4">Welcome to Our Website</h1>
        <p className="lead">A place where you can find all the information you need.</p>
        <a className="btn btn-light btn-lg" href="#">Learn More</a>
      </div>
    </header>
  );
}

export default Header;
