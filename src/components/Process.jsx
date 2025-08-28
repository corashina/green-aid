import React from 'react'
import './Process.css'

const Process = () => {
  const steps = [
    {
      number: '1',
      title: 'Wypełnij formularz medyczny',
      description: 'Wypełnij formularz medyczny na stronie Green Aid. Podaj informacje rzetelnie i zgodnie z prawdą, by lekarz był w stanie ocenić wskazania i przeciwwskazania do leczenia.',
      icon: '📋'
    },
    {
      number: '2',
      title: 'Opłać wizytę lekarską',
      description: 'Opłać usługę prywatnego badania przez lekarza za pośrednictwem systemów teleinformatycznych. Podczas wizyty dowiesz się jak prawidłowo dawkować konopie medyczne.',
      icon: '💳'
    },
    {
      number: '3',
      title: 'Odbierz e-receptę',
      description: 'Po badaniu lekarskim i wypisaniu recepty odbierz kod e-recepty wysłany SMS-em lub e-receptę online wysłaną mailem.',
      icon: '📱'
    },
    {
      number: '4',
      title: 'Kup lek w aptece',
      description: 'Udaj się do apteki, by zakupić lek w formie surowca farmaceutycznego. Cena medycznej marihuany to około 65 złotych za gram.',
      icon: '🏥'
    }
  ]

  return (
    <section className="section process">
      <div className="container">
        <h2 className="section-title">Jak rozpocząć terapię?</h2>
        <p className="section-subtitle">
          Prosty proces w 4 krokach prowadzący do rozpoczęcia leczenia medyczną marihuaną
        </p>
        
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="process-cta">
          <a href="#umow-wizyte" className="btn btn-large">
            Rozpocznij terapię już dziś!
          </a>
          <p className="cta-subtitle">
            Postaw na naturalne rozwiązania w walce z Twoją chorobą.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Process


