import React from 'react';

const Header = () => {
  return (
    <header className="custom-header py-3">
      <nav className="container navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">Adarsh M Nair</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a> {/* Update the link to /contact */}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
