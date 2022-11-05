import React from 'react'
import { Link } from 'react-router-dom';
import "../assets/css/Header.css"

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div><Link to="/">Home</Link></div>&nbsp;&nbsp;&nbsp;&nbsp;
          <div><Link to="contactos">Menú</Link></div>&nbsp;&nbsp;&nbsp;&nbsp;
          <div><Link to="acerca-de">Acerca de</Link></div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header