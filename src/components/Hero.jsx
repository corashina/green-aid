import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Leczenie medyczną marihuaną - jak wygląda terapia medycznymi konopiami?
            </h1>
            <p className="hero-description">
              Odkryj naturalne rozwiązania w walce z Twoją chorobą. Profesjonalna opieka medyczna 
              i indywidualne podejście do każdego pacjenta.
            </p>
            <div className="hero-actions">
              <a href="#umow-wizyte" className="btn btn-large">
                Umów wizytę online
              </a>
              <a href="#dowiedz-sie-wiecej" className="btn btn-secondary btn-large">
                Dowiedz się więcej
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-placeholder">
              <span className="hero-icon">🌿</span>
              <p>Obraz medycznej marihuany</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

