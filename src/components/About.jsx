import React from 'react'
import './About.css'

const About = () => {
  return (
    <section className="section about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">O medycznej marihuanie</h2>
            <p className="about-description">
              Medyczna marihuana to starannie przygotowany i selekcjonowany susz pochodzący z certyfikowanych upraw, 
              przebiegających w kontrolowanych warunkach i według określonych standardów.
            </p>
            
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">🔬</div>
                <div className="feature-content">
                  <h3>Standaryzowany skład</h3>
                  <p>Produkt najwyższej jakości o znanej zawartości THC i CBD oraz innych składników biologicznych.</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">🏭</div>
                <div className="feature-content">
                  <h3>Certyfikowane uprawy</h3>
                  <p>Kontrolowane warunki uprawy zgodne z restrykcyjnymi normami farmaceutycznymi.</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">💊</div>
                <div className="feature-content">
                  <h3>Legalne źródła</h3>
                  <p>Wykorzystanie marihuany w medycynie jest w Polsce całkowicie legalne pod warunkiem uzyskania recepty.</p>
                </div>
              </div>
            </div>
            
            <div className="about-cta">
              <a href="#dowiedz-sie-wiecej" className="btn">Dowiedz się więcej</a>
            </div>
          </div>
          
          <div className="about-image">
            <div className="about-placeholder">
              <span className="about-icon">🌱</span>
              <p>Certyfikowane uprawy konopi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


