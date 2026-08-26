/* ==========================================================================
   Trulli di Marì — Guest App — Contenuti
   Unico file da toccare per aggiornare testi/luoghi senza mettere mano a
   markup o logica. Voci con "// TODO CONTENUTO:" vanno completate con dati
   reali forniti dal proprietario prima del lancio.
   ========================================================================== */

const APP_DATA = {
  cin: 'IT072025C200067620',
  citra: null, // TODO CONTENUTO: codice CITRA regionale, se/quando disponibile — se null il badge non viene mostrato
  ownerNames: 'Maria e Antonio',
  whatsappNumber: '393289564916', // formato internazionale senza + per wa.me — numero WhatsApp dedicato
  phoneDisplay: '+39 342 034 0046', // telefono struttura mostrato nell'informativa privacy (invariato, diverso dal WhatsApp)
  contactEmail: 'trullidimari@gmail.com',
  address: 'SP 225, C.da Pozzallegro 84, 70010 Locorotondo (BA), Puglia',
  gps: { lat: 40.7937984958448, lng: 17.342881742328114 },

  formsubmitEndpoint: 'https://formsubmit.co/trullidimari@gmail.com',

  checkin: {
    checkInTime: '15:30',
    checkOutTime: '10:30',
  },

  // Regole della Casa: contenuto reale (due trulli, testi completi) vive
  // direttamente in translations.js come blocchi HTML per lingua — vedi
  // ruleIncanto*/ruleNido* in index.html (screen-regole-incanto/-nido).

  // Tassa di soggiorno: sezione predisposta ma NON mostrata per ora (decisione
  // 2026-08-26). Quando ci saranno importo e link di pagamento reali (Satispay
  // Business / PayPal Business), valorizzare qui e settare touristTax.enabled = true.
  touristTax: {
    enabled: false,
    amountPerNight: null, // es. '3€ a notte per persona (+13 anni)'
    ordinanceLink: null,
    satispayLink: null,
    paypalLink: null,
  },

  wifi: {
    // Nessuna password in chiaro nel codice: l'ospite inquadra un QR fisico
    // stampato dal proprietario e appeso in casa (formato standard
    // WIFI:T:WPA;S:<ssid>;P:<password>;;). Cambiare rete = ristampare il QR,
    // niente da toccare in app. QR reale da generare a parte (vedi CONTENT-TODO.md).
    instructions: 'Inquadra il QR Code appeso in casa con la fotocamera qui sotto per copiare in automatico la password.',
  },

  // Testi tradotti in translations.js (chiavi faqQ1/faqA1, faqQ2/faqA2).
  faq: [
    { qKey: 'faqQ1', aKey: 'faqA1' },
    { qKey: 'faqQ2', aKey: 'faqA2' },
    // TODO CONTENUTO: aggiungere altre FAQ reali (parcheggio, animali, orari, ecc.) da confermare col proprietario
  ],

  // Testi indicazioni auto tradotti in translations.js (chiavi dirCarNorthText/dirCarSouthText).

  // Card "Da Visitare" — riuso diretto dei contenuti già pubblicati sul sito
  // (websitesample2/index.html, sezione Dintorni). Titolo/descrizione/distanza
  // sono tradotti in translations.js (chiavi item<Id>Title/Desc/Dist) — qui
  // solo i dati strutturali (id, immagine, query mappa) che non cambiano per lingua.
  daVisitare: [
    { id: 'locorotondo', img: 'assets/images/davisitare/locorotondo.jpg', mapQuery: 'Locorotondo, Puglia' },
    { id: 'ostuni', img: 'assets/images/davisitare/ostuni.jpg', mapQuery: 'Ostuni, Puglia' },
    { id: 'savelletri', img: 'assets/images/davisitare/savelletri.jpg', mapQuery: 'Savelletri, Fasano, Puglia' },
    { id: 'torreCanne', img: 'assets/images/davisitare/torre-canne.jpg', mapQuery: 'Torre Canne, Puglia' },
    { id: 'torreGuaceto', img: 'assets/images/davisitare/torre-guaceto.jpg', mapQuery: 'Riserva Naturale Torre Guaceto' },
  ],

  // "Cosa vedere" più lontano / gite intere giornate
  escursioni: [
    { id: 'castellana', img: 'assets/images/davisitare/grotte-castellana.jpg', mapQuery: 'Grotte di Castellana, Puglia' },
    { id: 'alberobello', img: 'assets/images/davisitare/alberobello.jpg', mapQuery: 'Alberobello, Puglia' },
    // TODO CONTENUTO: eventuali altre escursioni consigliate (tour in barca, degustazioni, ecc.)
  ],

  // "Tutto a Due Passi" — stessi 5 esercizi/contenuti della sezione
  // "Tutto a Portata di Mano" già pubblicata sul sito (websitesample2), stessi
  // titoli/descrizioni/distanze riusati 1:1 per coerenza.
  ristoranti: [
    { id: 'panificio', img: 'assets/images/piedi/panificio.jpg', mapQuery: 'Panificio dal Contadino, Locorotondo' },
    { id: 'servizi', img: 'assets/images/piedi/salumeria.jpg', mapQuery: 'Locorotondo, Puglia' },
    { id: 'ristorante', img: 'assets/images/piedi/ristorante-la-neviera.jpg', mapQuery: 'Ristorante La Neviera, Locorotondo' },
    { id: 'chiesetta', img: 'assets/images/piedi/chiesa-laureto.jpg', mapQuery: 'Chiesa di Laureto, Locorotondo' },
  ],

  supermercati: [
    { id: 'centroComm', img: 'assets/images/piedi/quintocolore.jpg', mapQuery: 'Quintocolore, Locorotondo' },
  ],

  // TODO CONTENUTO: nessuna indicazione trasporti pubblici/taxi/noleggio confermata —
  // da completare (fermata bus più vicina, taxi consigliato, noleggio auto/scooter).
  trasporti: [],
};
