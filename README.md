# 🌿 Green Aid - Platforma Medycznej Marihuany

Projekt Green Aid to nowoczesna aplikacja internetowa stworzona w React i Vite, wzorowana na stronie Zielona Karetka. Aplikacja prezentuje profesjonalną platformę medyczną specjalizującą się w leczeniu medyczną marihuaną.

## 🚀 Funkcjonalności

- **Responsywny design** - optymalizacja dla wszystkich urządzeń
- **Nowoczesny interfejs** - wykorzystanie CSS Grid i Flexbox
- **Nawigacja z dropdown** - zaawansowane menu nawigacyjne
- **Komponenty React** - modułowa architektura aplikacji
- **Animacje CSS** - płynne przejścia i efekty hover
- **Mobile-first approach** - priorytet dla urządzeń mobilnych

## 🛠️ Technologie

- **React 18** - nowoczesny framework JavaScript
- **Vite** - szybki bundler i dev server
- **CSS3** - zaawansowane style i animacje
- **Responsive Design** - adaptacja do różnych rozmiarów ekranu

## 📁 Struktura projektu

```
green-aid/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Komponent nawigacji
│   │   ├── Hero.jsx            # Sekcja główna
│   │   ├── Services.jsx        # Usługi medyczne
│   │   ├── About.jsx           # O medycznej marihuanie
│   │   ├── Process.jsx         # Proces leczenia
│   │   ├── News.jsx            # Aktualności
│   │   ├── Footer.jsx          # Stopka
│   │   └── *.css               # Style dla komponentów
│   ├── App.jsx                 # Główny komponent aplikacji
│   ├── main.jsx                # Punkt wejścia
│   ├── App.css                 # Główne style
│   └── index.css               # Style globalne
├── index.html                  # Główny plik HTML
├── package.json                # Zależności i skrypty
├── vite.config.js              # Konfiguracja Vite
└── README.md                   # Dokumentacja
```

## 🚀 Instalacja i uruchomienie

### Wymagania
- Node.js (wersja 16 lub nowsza)
- npm lub yarn

### Kroki instalacji

1. **Sklonuj repozytorium**
   ```bash
   git clone <url-repozytorium>
   cd green-aid
   ```

2. **Zainstaluj zależności**
   ```bash
   npm install
   ```

3. **Uruchom serwer deweloperski**
   ```bash
   npm run dev
   ```

4. **Otwórz przeglądarkę**
   - Przejdź do: `http://localhost:5173`
   - Aplikacja automatycznie się przeładuje przy zmianach w kodzie

### Inne dostępne komendy

```bash
npm run build      # Budowanie aplikacji produkcyjnej
npm run preview    # Podgląd wersji produkcyjnej
npm run lint       # Sprawdzanie kodu ESLint
```

## 🎨 Funkcje aplikacji

### Główne sekcje:
- **Header** - nawigacja z dropdown menu
- **Hero** - główne hasło i call-to-action
- **Services** - prezentacja usług medycznych
- **About** - informacje o medycznej marihuanie
- **Process** - proces leczenia krok po kroku
- **News** - aktualności i blog
- **Footer** - informacje kontaktowe i linki

### Responsywność:
- **Desktop** - pełna funkcjonalność z hover efektami
- **Tablet** - zoptymalizowany layout dla średnich ekranów
- **Mobile** - menu hamburger i uproszczona nawigacja

## 🔧 Konfiguracja

### Vite
Plik `vite.config.js` zawiera podstawową konfigurację dla React:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### CSS Variables
Główne kolory aplikacji zdefiniowane w CSS:
- `#2E7D32` - główny kolor zielony
- `#4CAF50` - akcent zielony
- `#E8F5E8` - jasny zielony tło

## 📱 Responsive Breakpoints

- **Mobile**: `max-width: 768px`
- **Tablet**: `min-width: 769px` i `max-width: 1024px`
- **Desktop**: `min-width: 1025px`

## 🚀 Deployment

### Budowanie aplikacji produkcyjnej
```bash
npm run build
```

### Pliki do wdrożenia
Po budowaniu, pliki produkcyjne znajdują się w folderze `dist/`:
- `index.html`
- `assets/` - skompilowane CSS i JavaScript

## 🤝 Współpraca

### Struktura komponentów
Każdy komponent składa się z:
- Pliku `.jsx` z logiką React
- Pliku `.css` ze stylami
- Eksportu domyślnego

### Dodawanie nowych komponentów
1. Utwórz plik `.jsx` w `src/components/`
2. Utwórz odpowiadający plik `.css`
3. Zaimportuj w `App.jsx`
4. Dodaj do struktury aplikacji

## 📄 Licencja

Projekt Green Aid jest projektem edukacyjnym stworzonym na podstawie analizy strony Zielona Karetka.

## 📞 Kontakt

- **Email**: kontakt@greenaid.pl
- **Infolinia**: +48 12 384 81 56
- **Godziny pracy**: pon-pt 10-20

---

**Green Aid** - Profesjonalna opieka medyczna w dziedzinie leczenia medyczną marihuaną 🌿


