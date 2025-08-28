import React from 'react'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: '🌿',
      title: 'Lecznicze konopie',
      description: 'Skład i właściwości niesamowitej rośliny. Susz konopny zawiera niemal 500 różnych substancji, które pozytywnie oddziałują na organizm człowieka.',
      features: ['THC i CBD', 'Terpeny', 'CBG i THCV', 'Alkaloidy i flawonoidy']
    },
    {
      icon: '💊',
      title: 'Medyczna marihuana',
      description: 'Szczepy i proporcje THC do CBD. Sativa działa pobudzająco, indica relaksacyjnie. Każdy szczep ma inne właściwości terapeutyczne.',
      features: ['Szczep Sativa', 'Szczep Indica', 'Różne proporcje', 'Właściwości terapeutyczne']
    },
    {
      icon: '🏥',
      title: 'Terapia online',
      description: 'Nowoczesna forma terapii przez internet. Umów wizytę z lekarzem specjalistą bez wychodzenia z domu.',
      features: ['Wizyty online', 'E-recepty', 'Konsultacje', 'Monitoring leczenia']
    }
  ]

  return (
    <section className="section services">
      <div className="container">
        <h2 className="section-title">Nasze usługi</h2>
        <p className="section-subtitle">
          Oferujemy kompleksową opiekę medyczną w dziedzinie leczenia medyczną marihuaną
        </p>
        
        <div className="grid grid-3">
          {services.map((service, index) => (
            <div key={index} className="card service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

