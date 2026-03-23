# Beatur Viaggi — Research & Design System

## 1. Servizi di una moderna agenzia viaggi italiana (2024-2026)

### Leisure Travel
- Pacchetti vacanza all inclusive (mare, montagna, città d'arte)
- Viaggi di nozze e luna di miele personalizzati
- Lista nozze con area riservata per gli sposi
- Tour di gruppo organizzati (piccoli gruppi, esperienze autentiche)
- Vacanze enogastronomiche e "slow travel" (trend in forte crescita)
- Turismo esperienziale: immersione nella cultura locale
- Crociere (MSC, Costa, Royal Caribbean)

### Biglietteria & Trasporti
- Emissione biglietti aerei IATA-certified
- Biglietti ferroviari (Trenitalia, Italo, Eurostar)
- Biglietti traghetti e aliscafi
- Transfer aeroportuali e noleggio auto
- Assicurazioni viaggio

### Corporate Travel
- Gestione completa trasferte aziendali
- Prenotazione voli, hotel, transfer per dipendenti
- Policy di viaggio aziendale e controllo costi
- Assistenza 24/7 per emergenze in trasferta
- Reportistica e rendicontazione spese
- Meeting aziendali e incentive travel
- Piattaforme digitali per prenotazione self-service

### Congressi e Conferenze Mediche
- Organizzazione logistica completa di congressi medico-scientifici
- Provider ECM (Educazione Continua in Medicina) accreditato
- Gestione quote di partecipazione e registrazioni
- Rapporti con sponsor e aziende farmaceutiche
- Scelta e allestimento venue congressuale
- Programmi sociali e turistici per i congressisti
- Transfer e alloggi per i partecipanti
- Comunicazione e promozione dell'evento
- Budget management e rendicontazione

---

## 2. Destinazioni più richieste dagli italiani (2024-2025)

### Mete italiane
- **Mare**: Sicilia, Puglia (Porto Cesareo +23%), Sardegna (Villasimius +18%), Calabria (Tropea +16%), Costiera Amalfitana
- **Montagna**: Trentino-Alto Adige, Dolomiti, Valle d'Aosta
- **Città d'arte**: Roma, Firenze, Venezia, Napoli

### Mete europee
- Grecia (Santorini, Mykonos, Creta)
- Spagna (Barcelona, Ibiza, Siviglia)
- Portogallo (Lisbona, Algarve)
- Francia (Parigi, Costa Azzurra)
- Croazia (Dubrovnik, isole dalmate)
- Marocco (Marrakech, Essaouira)

### Mete long haul / esotiche
- Maldive, Thailandia, Malesia, Bali
- Madagascar, Seychelles, Mauritius
- Giappone, Vietnam, Cambogia
- USA (New York, Miami, Grand Canyon)
- Caraibi (Cuba, Repubblica Dominicana, Jamaica)

---

## 3. Partner attuali Beatur Viaggi
- **Turisanda** — tour operator premium
- **MSC Crociere** — crociere nel Mediterraneo e oceani
- *(ex: Valtur, Eden Viaggi — non più operativi)*

---

## 4. Dati aziendali Beatur Viaggi
- Sede: Via Matteotti, 66 — 20832 Desio (MB)
- Tel: +39 0362 629394
- Email: info@beaturviaggi.it
- Attiva dal: 1988 (oltre 35 anni di storia)
- Specializzazioni: Leisure, Lista Nozze, Corporate, Congressi Medici, Biglietteria, Crociere

---

## 5. Design System — Regole vincolanti

### Layout & Spacing
- **Max-width container**: 1120px, centrato
- **Padding verticale sezioni**: min 80px (top e bottom)
- **Padding orizzontale**: 24px mobile, 40px tablet, 60px desktop

### Card Style
- **Border-radius**: 12px (uniforme per tutte le card)
- **Shadow**: `0 2px 16px rgba(0,0,0,0.08)` (soft, leggera)
- **Hover lift**: `translateY(-4px)` + shadow leggermente più profonda
- **Transizione**: `transition: all 0.25s ease`

### Animazioni
- **Fade-in on scroll**: ogni sezione appare con opacity 0→1 + translateY 20px→0
- **Nessun bounce, nessuno spin, nessuna transizione vistosa**
- **Stagger**: le card si animano in sequenza (delay 0.1s per card)
- **Rispetta `prefers-reduced-motion`**

### Tipografia
- **Font**: Figtree (Google Fonts) — clean, moderna, arrotondata
- **Heading**: font-weight 300 (light) + 700 (bold) per contrasto
- **Body**: 16px min, line-height 1.6
- **Max line-length**: 65-70 caratteri

### Palette colori (da aggiornare con logo)
- **Accent**: #FF5A5F (coral Airbnb — da sostituire con colore logo)
- **Background**: #FFFFFF / #F8F8F8
- **Text principale**: #222222
- **Text secondario**: #6B7280
- **Border**: #E5E7EB

### Stile offerte (ispirato al sito attuale + modernizzato)
- Card con immagine grande in alto (aspect-ratio 4/3 o 16/9)
- Nome destinazione in bold
- Stelle del tour operator
- Tag categoria (Mare, Montagna, Culturale, Esotico)
- CTA "Richiedi info" con accent color
- Layout grid: 3 colonne desktop, 2 tablet, 1 mobile

---

## 6. Sezione Servizi — Animazione RevealImageList invertita
- Lista verticale di voci servizio (testo grande a sinistra)
- Hover: immagine appare a SINISTRA del testo (invertito rispetto a reveal-images)
- Seconda immagine leggermente ruotata e traslata (effetto profondità)
- Nessun bounce, solo scale + opacity smooth

---

## 7. Note per il redesign
- **Logo**: in attesa dal cliente — palette da aggiornare
- Ispirazione Airbnb: bianco generoso, card soft, foto reali di destinazioni
- Tono: premium, minimalista, italiano — per famiglie, coppie e professionisti medici
- NO: viola, gradienti pesanti, layout genericone AI
