import React, { useState } from 'react'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>🌿 Green Aid</h1>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><a href="#umow-wizyte" className="nav-link">Umów wizytę</a></li>
              <li className="dropdown">
                <a href="#o-nas" className="nav-link">O nas</a>
                <ul className="dropdown-menu">
                  <li><a href="#dla-inwestorow">Dla Inwestorów</a></li>
                  <li><a href="#faq">FAQ</a></li>
                  <li><a href="#nasz-zespol">Nasz zespół</a></li>
                  <li><a href="#gabinety">Mapa gabinetów</a></li>
                  <li><a href="#kontakt">Kontakt</a></li>
                  <li><a href="#kariera">Kariera</a></li>
                </ul>
              </li>
              <li><a href="#cennik" className="nav-link">Cennik</a></li>
              <li><a href="#sklep" className="nav-link">Sklep</a></li>
              <li className="dropdown">
                <a href="#dla-pacjenta" className="nav-link">Dla pacjenta</a>
                <ul className="dropdown-menu">
                  <li><a href="#ikp">Instrukcja IKP</a></li>
                  <li><a href="#dostepnosc">Sprawdź dostępność</a></li>
                  <li><a href="#recepta">Recepta</a></li>
                  <li><a href="#zmien-recepte">Zmień receptę</a></li>
                  <li><a href="#zglos-blad">Zgłoś błąd</a></li>
                </ul>
              </li>
              <li><a href="#aktualnosci" className="nav-link">Aktualności</a></li>
            </ul>
          </nav>

          <div className="header-actions">
            <a href="#moje-konto" className="btn btn-secondary">Moje konto</a>
            <button className="mobile-menu-toggle" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

