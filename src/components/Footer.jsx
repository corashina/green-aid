import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🌿 Green Aid</h3>
            <p>Profesjonalna platforma medyczna specjalizująca się w leczeniu medyczną marihuaną.</p>
            <div className="social-links">
              <a href="#facebook" aria-label="Facebook">📘</a>
              <a href="#twitter" aria-label="Twitter">🐦</a>
              <a href="#instagram" aria-label="Instagram">📷</a>
              <a href="#linkedin" aria-label="LinkedIn">💼</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Menu</h4>
            <ul>
              <li><a href="#umow-wizyte">Umów wizytę</a></li>
              <li><a href="#zmien-recepte">Zmień receptę</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#kontakt">Kontakt</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Przydatne linki</h4>
            <ul>
              <li><a href="#regulamin">Regulamin serwisu</a></li>
              <li><a href="#regulamin-organizacyjny">Regulamin organizacyjny</a></li>
              <li><a href="#oswiadczenia">Oświadczenia</a></li>
              <li><a href="#polityka-prywatnosci">Polityka prywatności</a></li>
              <li><a href="#klauzula">Klauzula informacyjna</a></li>
              <li><a href="#prawa-pacjenta">Prawa Pacjenta</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Kontakt</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <strong>Infolinia</strong>
                  <p>+48 12 384 81 56</p>
                  <small>czynna pon-pt 10-20</small>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">💬</span>
                <div>
                  <strong>Livechat</strong>
                  <p>pon-pt 9-21</p>
                  <small>sob-nd 10-16:30</small>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <strong>Email</strong>
                  <p>kontakt@greenaid.pl</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="company-info">
              <p><strong>GREEN AID CLINIC Sp. z o.o.</strong></p>
              <p>KRS 0001001895 | NIP 6762629774 | REGON 523650718</p>
              <p>Rynek Główny 28, 31-010 Kraków (adres do korespondencji)</p>
            </div>
            <div className="copyright">
              <p>Copyright © 2025. Green Aid Clinic, All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


