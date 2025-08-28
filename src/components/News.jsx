import React from 'react'
import './News.css'

const News = () => {
  const news = [
    {
      id: 1,
      title: 'Koniec teleporad na medyczną marihuanę',
      excerpt: 'Czarny scenariusz dla pacjentów korzystających z medycznej marihuany online staje się rzeczywistością. Projekt rozporządzenia Ministra Zdrowia wprowadza konieczność osobistej wizyty przed wystawieniem recepty.',
      date: '2024-10-15',
      category: 'Regulacje prawne',
      image: '📰'
    },
    {
      id: 2,
      title: 'Zmiana statusu prawnego marihuany w USA',
      excerpt: 'Departament Sprawiedliwości Stanów Zjednoczonych ogłosił propozycję zmiany klasyfikacji marihuany z listy I na listę III substancji kontrolowanych.',
      date: '2024-05-21',
      category: 'Świat',
      image: '🌍'
    },
    {
      id: 3,
      title: 'Nowe badania nad skutecznością CBD',
      excerpt: 'Najnowsze badania potwierdzają pozytywne działanie CBD w leczeniu bólu przewlekłego i stanów lękowych. Naukowcy odkryli nowe mechanizmy działania kannabinoidów.',
      date: '2024-09-30',
      category: 'Badania naukowe',
      image: '🔬'
    }
  ]

  return (
    <section className="section news">
      <div className="container">
        <h2 className="section-title">Aktualności</h2>
        <p className="section-subtitle">
          Bądź na bieżąco z najnowszymi informacjami ze świata medycznej marihuany
        </p>
        
        <div className="grid grid-3">
          {news.map((article) => (
            <article key={article.id} className="card news-card">
              <div className="news-image">
                <span className="news-icon">{article.image}</span>
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <span className="news-category">{article.category}</span>
                  <span className="news-date">{new Date(article.date).toLocaleDateString('pl-PL')}</span>
                </div>
                <h3 className="news-title">{article.title}</h3>
                <p className="news-excerpt">{article.excerpt}</p>
                <a href={`#news-${article.id}`} className="news-link">
                  Czytaj więcej →
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="news-cta">
          <a href="#wszystkie-aktualnosci" className="btn btn-secondary">
            Zobacz wszystkie aktualności
          </a>
        </div>
      </div>
    </section>
  )
}

export default News


