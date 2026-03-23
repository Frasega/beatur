export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceDestination {
  name: string;
  tag: string;
  img: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImg: string;
  color: string;
  intro: string;
  features: ServiceFeature[];
  destinations?: ServiceDestination[];
  includes?: string[];
  cta: string;
}

export const servicesData: ServiceData[] = [
  {
    slug: "viaggi-leisure",
    title: "Viaggi Leisure",
    subtitle: "Pacchetti vacanza su misura per ogni tipo di viaggiatore",
    description:
      "Dalle spiagge caraibiche alle capitali europee, dalle vette alpine alle savane africane: progettiamo la tua vacanza ideale con cura artigianale.",
    heroImg:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&auto=format&fit=crop&q=85",
    color: "#CC0000",
    intro:
      "Il viaggio perfetto non esiste di default: lo costruiamo insieme, ascoltando le tue aspettative, il tuo budget e i tuoi desideri. Da oltre 35 anni aiutiamo migliaia di persone a scoprire il mondo con la serenità di chi sa di avere tutto sotto controllo.",
    features: [
      {
        title: "Pacchetti tutto incluso",
        description:
          "Volo, hotel, transfer e assicurazione: pensiamo a tutto noi. Tu pensa solo a fare le valigie.",
      },
      {
        title: "Tour guidati",
        description:
          "Itinerari curati con guide locali certificate, in piccoli gruppi per un'esperienza autentica.",
      },
      {
        title: "Vacanze su misura",
        description:
          "Costruiamo il tuo itinerario personalizzato giorno per giorno, rispettando tempi e preferenze.",
      },
      {
        title: "Turismo enogastronomico",
        description:
          "Esperienze gastronomiche, degustazioni e tour culinari nelle migliori destinazioni d'Italia e del mondo.",
      },
      {
        title: "Vacanze attive",
        description:
          "Trekking, sci, ciclismo, immersioni: organizziamo vacanze sportive con strutture e logistica dedicata.",
      },
      {
        title: "Assistenza 24/7",
        description:
          "Un referente sempre raggiungibile durante il viaggio per qualsiasi necessità o imprevisto.",
      },
    ],
    destinations: [
      {
        name: "Maldive",
        tag: "Oceano Indiano",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80",
      },
      {
        name: "Santorini",
        tag: "Grecia",
        img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&auto=format&fit=crop&q=80",
      },
      {
        name: "Giappone",
        tag: "Asia",
        img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&auto=format&fit=crop&q=80",
      },
      {
        name: "Costiera Amalfitana",
        tag: "Italia",
        img: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=400&auto=format&fit=crop&q=80",
      },
      {
        name: "Marrakech",
        tag: "Marocco",
        img: "https://images.unsplash.com/photo-1539020140153-e479b8f22b66?w=400&auto=format&fit=crop&q=80",
      },
      {
        name: "Bali",
        tag: "Indonesia",
        img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&auto=format&fit=crop&q=80",
      },
    ],
    cta: "Pianifica il tuo viaggio",
  },

  {
    slug: "viaggi-di-nozze",
    title: "Viaggi di Nozze",
    subtitle: "La luna di miele perfetta, progettata nei minimi dettagli",
    description:
      "Il vostro viaggio di nozze è un momento unico e irripetibile. Lo trattiamo come tale: con cura, attenzione e un servizio dedicato dalla prenotazione al ritorno.",
    heroImg:
      "https://images.unsplash.com/photo-1499678329028-101435549a4e?w=1920&auto=format&fit=crop&q=85",
    color: "#CC0000",
    intro:
      "Organizziamo viaggi di nozze da oltre 35 anni. Sappiamo cosa rende un viaggio di coppia davvero speciale: la scelta della destinazione giusta, i dettagli romantici, i momenti sorpresa. Ogni luna di miele che organizziamo è unica come la coppia che la vive.",
    features: [
      {
        title: "Consulenza dedicata",
        description:
          "Un consulente specializzato per le coppie vi accompagna dalla scelta della destinazione fino alla partenza.",
      },
      {
        title: "Lista nozze viaggi",
        description:
          "I vostri ospiti contribuiscono al viaggio di nozze tramite la nostra area riservata per sposi. Semplice, elegante, moderno.",
      },
      {
        title: "Resort di lusso selezionati",
        description:
          "Lavoriamo con i migliori resort romantici al mondo: suite vista mare, cene private, trattamenti spa inclusi.",
      },
      {
        title: "Sorprese e upgrade",
        description:
          "Organizziamo piccole sorprese in loco: petali di rosa in camera, cena romantica sulla spiaggia, bottle di prosecco.",
      },
      {
        title: "Flessibilità sulle date",
        description:
          "Partiamo quando volete voi: il giorno dopo il matrimonio, una settimana dopo, o anche mesi più tardi.",
      },
      {
        title: "Assicurazione annullamento",
        description:
          "Proteggete il vostro investimento: inclusa l'assicurazione completa con tutela per annullamento e interruzione.",
      },
    ],
    destinations: [
      {
        name: "Maldive",
        tag: "Overwater bungalow",
        img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=400&auto=format&fit=crop&q=80",
      },
      {
        name: "Seychelles",
        tag: "Oceano Indiano",
        img: "https://images.unsplash.com/photo-1548783792-9cbb55cc1e53?w=400&auto=format&fit=crop&q=80",
      },
      {
        name: "Mauritius",
        tag: "Africa · Isola",
        img: "https://images.unsplash.com/photo-1586611292717-f828b167408c?w=400&auto=format&fit=crop&q=80",
      },
      {
        name: "Bali",
        tag: "Indonesia",
        img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&auto=format&fit=crop&q=80",
      },
      {
        name: "Santorini",
        tag: "Grecia",
        img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&auto=format&fit=crop&q=80",
      },
      {
        name: "Toscana",
        tag: "Italia · Romantico",
        img: "https://images.unsplash.com/photo-1543872084-c7bd3822856f?w=400&auto=format&fit=crop&q=80",
      },
    ],
    cta: "Inizia a sognare la vostra luna di miele",
  },

  {
    slug: "corporate-travel",
    title: "Corporate Travel",
    subtitle: "Gestione professionale delle trasferte aziendali",
    description:
      "Ottimizziamo costi, tempo e comfort per ogni trasferta aziendale. Un servizio dedicato alle imprese che vogliono viaggiare bene, spendere meno e perdere meno tempo.",
    heroImg:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&auto=format&fit=crop&q=85",
    color: "#CC0000",
    intro:
      "Il business travel è un settore che richiede precisione, velocità e affidabilità. Offriamo un servizio completo di gestione delle trasferte aziendali per PMI e grandi aziende: dalla prenotazione dei voli alla rendicontazione spese, sempre con un referente dedicato.",
    features: [
      {
        title: "Prenotazione centralizzata",
        description:
          "Un unico punto di contatto per tutte le prenotazioni: voli, hotel, treni, auto a noleggio e transfer.",
      },
      {
        title: "Travel policy aziendale",
        description:
          "Rispettiamo e gestiamo la vostra travel policy, garantendo conformità e controllo dei costi.",
      },
      {
        title: "Assistenza 24/7",
        description:
          "Emergenze, cancellazioni, cambi last minute: siamo sempre raggiungibili per i vostri dipendenti in trasferta.",
      },
      {
        title: "Reportistica e rendicontazione",
        description:
          "Report mensili dettagliati su tutti i viaggi effettuati, per un controllo preciso dei costi aziendali.",
      },
      {
        title: "Tariffe corporate negoziate",
        description:
          "Accordi preferenziali con compagnie aeree, catene alberghiere e noleggiatori auto per massimizzare i risparmi.",
      },
      {
        title: "Meeting ed eventi aziendali",
        description:
          "Organizziamo meeting, team building, convention e incentive travel per gruppi di qualsiasi dimensione.",
      },
    ],
    includes: [
      "Voli in classe economy, business e first class",
      "Hotel selezionati vicino alle sedi di meeting",
      "Transfer aeroportuali puntuali",
      "Noleggio auto con conducente",
      "Assicurazione viaggio completa",
      "Visti e documentazione di viaggio",
      "Prenotazione sale meeting",
      "Servizi di ristorazione aziendale",
    ],
    cta: "Richiedi un account aziendale",
  },

  {
    slug: "congressi-medici",
    title: "Congressi",
    subtitle: "Organizzazione professionale di eventi e congressi",
    description:
      "Gestiamo ogni aspetto logistico dei vostri congressi, simposi e conferenze mediche. Dalla sede alla segreteria, dall'accreditamento ECM ai programmi sociali.",
    heroImg:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&auto=format&fit=crop&q=85",
    color: "#CC0000",
    intro:
      "Il settore congressuale richiede competenza, discrezione e una logistica impeccabile. Da anni collaboriamo con società scientifiche, ospedali, università e aziende farmaceutiche per l'organizzazione di eventi di formazione e aggiornamento professionale in Italia e all'estero.",
    features: [
      {
        title: "Scelta e allestimento venue",
        description:
          "Selezioniamo le migliori strutture congressuali in Italia e in Europa, negozando contratti vantaggiosi.",
      },
      {
        title: "Accreditamento ECM",
        description:
          "Gestiamo l'iter di accreditamento ECM presso il Ministero della Salute, le quote crediti e la documentazione.",
      },
      {
        title: "Segreteria organizzativa",
        description:
          "Gestione iscrizioni, quote di partecipazione, badge, kit congressuale e accoglienza dei partecipanti.",
      },
      {
        title: "Logistica e transfer",
        description:
          "Organizziamo alloggi, transfer e pasti per tutti i partecipanti, relatori e sponsor.",
      },
      {
        title: "Rapporti con gli sponsor",
        description:
          "Gestione degli sponsor farmaceutici e industriali, con allestimento aree espositive e programmi satellite.",
      },
      {
        title: "Programmi sociali",
        description:
          "Escursioni, cene di gala e visite culturali per arricchire l'esperienza congressuale dei partecipanti.",
      },
    ],
    includes: [
      "Scouting e prenotazione venue congressuale",
      "Gestione accreditamento ECM",
      "Segreteria organizzativa completa",
      "Piattaforma registrazioni online",
      "Coordinamento relatori e abstract",
      "Allestimento sale e attrezzature AV",
      "Catering e coffee break",
      "Gestione sponsor e area espositiva",
      "Programmi sociali e cene di gala",
      "Rendicontazione post-evento",
    ],
    cta: "Richiedi un preventivo per il tuo congresso",
  },

  {
    slug: "biglietteria",
    title: "Biglietteria",
    subtitle: "Voli, treni, traghetti e transfer — tutto in un'unica agenzia",
    description:
      "Emissione di biglietteria IATA-certificata per voli internazionali e nazionali, biglietti ferroviari, traghetti e servizi di transfer. Rapidità, competenza e le migliori tariffe.",
    heroImg:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&auto=format&fit=crop&q=85",
    color: "#CC0000",
    intro:
      "In qualità di agenzia IATA-certificata, emettiamo biglietti aerei per tutte le compagnie aeree mondiali, garantendo tariffe competitive e assistenza professionale. Gestiamo anche biglietteria ferroviaria (Trenitalia, Italo), traghetti e aliscafi, e servizi di transfer personalizzati.",
    features: [
      {
        title: "Biglietteria aerea IATA",
        description:
          "Emissione biglietti per tutte le compagnie aeree: low cost, di linea, business e first class.",
      },
      {
        title: "Treni e alta velocità",
        description:
          "Trenitalia, Italo, Eurostar e reti ferroviarie europee: prenotazione e emissione in agenzia.",
      },
      {
        title: "Traghetti e aliscafi",
        description:
          "Traversate nel Mediterraneo, per le isole italiane e internazionali: tutte le compagnie di navigazione.",
      },
      {
        title: "Transfer e noleggio auto",
        description:
          "Servizi di transfer aeroportuali, noleggio auto con e senza conducente in tutto il mondo.",
      },
      {
        title: "Gestione cambi e rimborsi",
        description:
          "Assistenza completa per modifiche, cancellazioni e rimborsi, con interlocuzione diretta con le compagnie.",
      },
      {
        title: "Visti e documentazione",
        description:
          "Supporto nella richiesta di visti, passaporti, autorizzazioni di viaggio e documenti necessari.",
      },
    ],
    includes: [
      "Tutte le compagnie aeree mondiali",
      "Voli charter e privati",
      "Trenitalia, Italo, Eurostar",
      "Ferrovie europee (TGV, ICE, Renfe)",
      "Grimaldi Lines, Tirrenia, Moby Lines",
      "Traghetti Grecia, Croazia, Sardegna",
      "Transfer privati",
      "Noleggio auto internazionale",
    ],
    cta: "Richiedi un biglietto",
  },

  {
    slug: "crociere",
    title: "Crociere",
    subtitle: "Le migliori rotte con MSC Crociere e i grandi armatori internazionali",
    description:
      "Una crociera è molto più di un viaggio: è un'esperienza totale. Ti guidiamo nella scelta della rotta, della cabina e della compagnia di navigazione più adatta a te.",
    heroImg:
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920&auto=format&fit=crop&q=85",
    color: "#CC0000",
    intro:
      "Partner ufficiale di MSC Crociere, siamo specializzati nella prenotazione di crociere in tutto il mondo. Dal Mediterraneo ai Caraibi, dai fiordi norvegesi alle rotte transatlantiche: ti aiutiamo a trovare la crociera perfetta al miglior prezzo disponibile.",
    features: [
      {
        title: "MSC Crociere — Partner Ufficiale",
        description:
          "Accesso diretto alle migliori cabine e tariffe MSC, con promozioni esclusive per i nostri clienti.",
      },
      {
        title: "Consulenza sulla scelta",
        description:
          "Ti aiutiamo a scegliere rotta, compagnia, categoria di cabina e optional in base al tuo budget e ai tuoi desideri.",
      },
      {
        title: "Crociere fluviali",
        description:
          "Crociere sul Reno, sul Danubio, sul Nilo e sui grandi fiumi europei: un modo diverso di viaggiare.",
      },
      {
        title: "Pacchetti tutto incluso",
        description:
          "Volo + crociera + escursioni: un unico pacchetto senza pensieri, a un prezzo vantaggioso.",
      },
      {
        title: "Crociere di lusso",
        description:
          "Selezione di compagnie premium per chi cerca il massimo del comfort: Silversea, Seabourn, Regent.",
      },
      {
        title: "Gruppi e incentive",
        description:
          "Organizziamo crociere di gruppo per aziende, associazioni e gruppi privati, con spazi dedicati a bordo.",
      },
    ],
    destinations: [
      {
        name: "Mediterraneo",
        tag: "Estate · 7-14 notti",
        img: "https://images.unsplash.com/photo-1586611292717-f828b167408c?w=400&auto=format&fit=crop&q=80",
      },
      {
        name: "Caraibi",
        tag: "Inverno · 7-14 notti",
        img: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=400&auto=format&fit=crop&q=80",
      },
      {
        name: "Norvegia & Fiordi",
        tag: "Estate · Aurora Boreale",
        img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400&auto=format&fit=crop&q=80",
      },
      {
        name: "Mar Baltico",
        tag: "Capitali del Nord",
        img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&fit=crop&q=80",
      },
      {
        name: "Canarie",
        tag: "Inverno · Sole garantito",
        img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&auto=format&fit=crop&q=80",
      },
      {
        name: "Dubai & Emirati",
        tag: "Oriente · Lusso",
        img: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=400&auto=format&fit=crop&q=80",
      },
    ],
    cta: "Scopri le prossime partenze",
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}
