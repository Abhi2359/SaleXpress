import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <p className="m-0">&copy; {currentYear} Your Website</p>
          </div>
          <div className="col-lg-6">
            <ul className="list-inline text-lg-end">
              <li className="list-inline-item"><a href="/">Home</a></li>
              <li className="list-inline-item"><a href="/about">About</a></li>
              <li className="list-inline-item"><a href="/services">Services</a></li>
              <li className="list-inline-item"><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
