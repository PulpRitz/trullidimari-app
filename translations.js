/* ==========================================================================
   Trulli di Marì — Guest App — Traduzioni IT/EN/DE/FR
   Le descrizioni dei luoghi già presenti sul sito (websitesample2/script.js)
   sono riprese identiche da lì per coerenza tra sito e app.
   ========================================================================== */

const TRANSLATIONS = {

  it: {
    heroCaption: "Benvenuto nel tuo Trullo",

    navCheckinTitle: "Check-in Online",
    navCheckinDesc: "Completa la registrazione prima dell'arrivo.",
    navRegoleTitle: "Regole della Casa",
    navRegoleDesc: "Orari, regole e info utili per il soggiorno.",
    navWifiTitle: "WiFi",
    navWifiDesc: "Inquadra il QR e connettiti in automatico.",
    navFaqTitle: "FAQ",
    navFaqDesc: "Le domande più frequenti dei nostri ospiti.",
    navGuidaTitle: "Guida ai Dintorni",
    navGuidaDesc: "Borghi, mare ed escursioni consigliate.",
    navDuePassiTitle: "Tutto a Due Passi",
    navDuePassiDesc: "Panificio, ristorante e servizi vicini.",
    navDoveSiamoTitle: "Dove Siamo",
    navDoveSiamoDesc: "Indirizzo, mappa e come raggiungerci.",

    tabHome: "Home",
    tabRegole: "Regole",
    tabGuida: "Guida",
    tabVicino: "Vicino",
    tabDoveSiamo: "Dove Siamo",

    emptySection: "Contenuto in arrivo — il proprietario sta completando questa sezione.",
    installBannerTitle: "Installa l'app",
    installBannerDesc: "Aggiungila alla schermata Home per aprirla come un'app vera.",
    iosModalTitle: "Installa su iPhone",
    iosStep1: "Tocca l'icona Condividi qui sotto",
    iosStep2: "Scorri e tocca «Aggiungi alla schermata Home»",
    iosStep3: "Conferma «Aggiungi» in alto a destra",
    btnGotIt: "Ho capito",
    whatsappCtaHome: "Contatta l'Host",
    whatsappCtaContatti: "Scrivici su WhatsApp",

    checkinScreenTitle: "Check-in Online",
    checkinHint: "Per adempiere agli obblighi di legge italiani, carica un documento d'identità valido per ogni ospite prima dell'arrivo.",
    bookingDataTitle: "Dati Prenotazione",
    labelCheckin: "Check-in",
    labelCheckout: "Check-out",
    labelBookingName: "Nome Prenotazione",
    placeholderBookingName: "Nome con cui è stata fatta la prenotazione",
    labelTrulloBooked: "Trullo Prenotato",
    optTrulloPlaceholder: "—",
    guestLabel: "Ospite",
    btnRemoveGuest: "Rimuovi",
    labelNome: "Nome",
    labelCognome: "Cognome",
    labelDataNascita: "Data Nascita",
    labelLuogoNascita: "Luogo Nascita",
    labelSesso: "Sesso",
    optMaschio: "Maschio",
    optFemmina: "Femmina",
    labelCittadinanza: "Cittadinanza",
    labelTipoDoc: "Tipo Documento",
    optDocCarta: "Carta d'Identità",
    optDocPassaporto: "Passaporto",
    optDocPatente: "Patente",
    optDocPermesso: "Permesso di Soggiorno",
    labelNumeroDoc: "Numero Doc.",
    labelEmessoDa: "Emesso da",
    labelFotoDoc: "Foto Documento (fronte / retro)",
    sideFronte: "Fronte",
    sideRetro: "Retro",
    statusNoPhoto: "Nessuna foto",
    statusPhotoOk: "Foto caricata ✓",
    btnScattaFoto: "📷 Scatta foto",
    btnCaricaDispositivo: "🖼️ Carica da dispositivo",
    btnAddGuest: "+ Aggiungi un altro ospite",
    privacyConsentText: "Dichiaro di aver letto l'informativa sulla Privacy e acconsento al trattamento dei dati personali (Art. 13 GDPR).",
    privacyLinkText: "Leggi l'informativa sulla Privacy completa",
    checkinErrorGeneric: "Controlla i campi evidenziati prima di continuare.",
    errorCheckoutDate: "La data di check-out deve essere successiva alla data di check-in.",
    errorAdult: "Deve esserci almeno un ospite maggiorenne (18+) tra quelli inseriti.",
    btnSubmitCheckin: "Invia Check-in",
    btnSubmitSending: "Invio in corso…",
    successTitle: "Completato!",
    successDesc: "L'operazione è andata a buon fine.",
    btnBackHome: "Torna alla Home",

    wifiScreenTitle: "WiFi",
    wifiHeading: "Rete Wi-Fi",
    wifiInstructions: "Inquadra il QR Code appeso in casa con la fotocamera qui sotto per copiare in automatico la password.",
    btnActivateCamera: "📷 Attiva Fotocamera",
    btnCancel: "Annulla",
    wifiNetworkLabel: "Rete",
    wifiPasswordLabel: "Password",
    wifiCopiedHint: "Password copiata negli appunti. Aprila dalle impostazioni WiFi del telefono e incollala.",
    btnRescan: "Scansiona di nuovo",

    regoleScreenTitle: "Regole della Casa",
    regoleChooserSub: "Seleziona il tuo trullo per consultare le regole della casa.",
    regoleIncantoTitle: "Trullo Incanto",
    regoleIncantoDesc: "Regole della casa e info pratiche",
    regoleNidoTitle: "Trullo Il Nido",
    regoleNidoDesc: "Regole della casa e info pratiche",

    ruleIncantoScreenTitle: "Regole — Trullo Incanto",
    ruleNidoScreenTitle: "Regole — Trullo Il Nido",
    ruleSectionGeneraleTitle: "Regole generali",
    ruleSectionPraticheTitle: "Note pratiche casa",
    ruleSectionTvTitle: "Canali satellitari e digitali",

    ruleIncantoGeneraleHtml: `
      <li>È vietato fumare all'interno della casa.</li>
      <li>L'acqua dei rubinetti non è potabile.</li>
      <li>Non usare alcool per accendere il barbecue.</li>
      <li>I bambini devono essere sempre accompagnati da un adulto nell'area giochi.</li>
      <li class="muted">In caso di danni all'appartamento o agli arredi, l'ospite è tenuto a informare i proprietari, che si riservano di richiedere l'importo dei danni.</li>
      <li class="muted">I proprietari declinano ogni responsabilità per infortuni ad adulti e minori, per smarrimento, furto o danneggiamento di oggetti degli ospiti, e per danni o furti alle autovetture in parcheggio.</li>
      <li class="muted">Particolare attenzione alle chiavi di casa e al telecomando del cancello: in caso di smarrimento o deterioramento, le spese di sostituzione (serratura / telecomando) sono a carico dell'ospite.</li>
    `,
    ruleIncantoPraticheHtml: `
      <li>Il cambio degli asciugamani si trova nei cassetti delle camere da letto.</li>
      <li>Le luci del viale, piazzale e giardino si accendono/spengono da sole. Quelle su porta d'ingresso e finestre si comandano dagli interruttori.</li>
      <li>In assenza di corrente elettrica, sbloccare manualmente il cancello con l'apposita chiave.</li>
      <li>Chiudere le finestre esterne ogni volta che si esce dal trullo.</li>
      <li>Chiudere la finestra oblò della camera da letto se si prevede pioggia.</li>
      <li>Chiudere il gazebo in caso di vento forte.</li>
      <li>La sera, chiudere le sedie sdraio (per evitare che salgano i gatti); in caso di pioggia rientrarle in casa.</li>
      <li><strong>Riscaldamento a legna</strong>: mantenere il display tra 60° e 70°, non superare mai 80°. Non lasciare troppa cenere nel caminetto — rimuoverla ogni 2-3 giorni nell'apposito secchio.</li>
    `,
    ruleIncantoTvHtml: `
      <li><strong>Canali satellitari</strong> — Accendere la TV, premere "LIST" sul telecomando, poi il tasto rosso. Sulla TV selezionare "Satellite" con la freccia ▼, premere "OK" sul telecomando, poi di nuovo "OK" con la freccia ▼ sulla TV, confermare con "OK".</li>
      <li><strong>Canali digitali italiani</strong> — Accendere la TV, premere "LIST" sul telecomando, poi il tasto rosso. Sulla TV selezionare "Antenna" con la freccia ▲, premere "OK" sul telecomando, poi di nuovo "OK" con la freccia ▼ sulla TV, confermare con "OK".</li>
    `,

    ruleNidoGeneraleHtml: `
      <li>È vietato fumare all'interno della casa.</li>
      <li>L'acqua dei rubinetti non è potabile.</li>
      <li>Non usare alcool per accendere il barbecue.</li>
      <li>I bambini devono essere sempre accompagnati da un adulto nell'area giochi.</li>
      <li class="muted">In caso di danni all'appartamento o agli arredi, l'ospite è tenuto a informare i proprietari, che si riservano di richiedere l'importo dei danni.</li>
      <li class="muted">I proprietari declinano ogni responsabilità per infortuni ad adulti e minori, per smarrimento, furto o danneggiamento di oggetti degli ospiti, e per danni o furti alle autovetture in parcheggio.</li>
      <li class="muted">Particolare attenzione alle chiavi di casa e al telecomando del cancello: in caso di smarrimento o deterioramento, le spese di sostituzione (serratura / telecomando) sono a carico dell'ospite.</li>
    `,
    ruleNidoPraticheHtml: `
      <li>Il cambio degli asciugamani si trova nei cassetti della camera da letto.</li>
      <li>Le luci del viale, piazzale e giardino si accendono/spengono da sole. Quelle del gazebo e della zona barbecue si comandano dagli interruttori.</li>
      <li>In assenza di corrente elettrica, sbloccare manualmente il cancello con l'apposita chiave.</li>
      <li>La sera, chiudere le sedie sdraio (per evitare che salgano i gatti); in caso di pioggia riporle sotto il gazebo.</li>
    `,
    ruleNidoTvHtml: `
      <li><strong>Canali satellitari</strong> — Accendere la TV, premere "LIST" sul telecomando, poi il tasto rosso. Sulla TV selezionare "Satellite" con la freccia ▼, premere "OK" sul telecomando, poi "EXIT".</li>
      <li><strong>Canali digitali italiani</strong> — Accendere la TV, premere "LIST" sul telecomando, poi il tasto rosso. Sulla TV selezionare "Antenna" con la freccia ▲, premere "OK" sul telecomando, poi "EXIT".</li>
    `,

    faqScreenTitle: "FAQ",
    faqQ1: "Fornite lenzuola e asciugamani?",
    faqA1: "Sì, forniamo biancheria pulita e un set di asciugamani per ogni ospite.",
    faqQ2: "La cucina è attrezzata?",
    faqA2: "Certamente. Troverai pentole, padelle, piatti e posate.",

    guidaScreenTitle: "Guida ai Dintorni",
    guidaSub: "Dalla Valle d'Itria al mare: i luoghi che consigliamo ai nostri ospiti.",
    duepassiScreenTitle: "Tutto a Due Passi",
    duepassiSub: "Panificio, servizi, ristorante e centro commerciale a due passi dal trullo.",

    contattiScreenTitle: "Dove Siamo",
    addressLabel: "Indirizzo",
    btnOpenMap: "Apri Mappa",
    carNorthLabel: "In auto (da Nord)",
    carSouthLabel: "In auto (da Sud)",
    dirCarNorthText: "Uscire al casello Bari Nord e immettersi sulla S.S.16 direzione Brindisi. Percorsi circa 60 km (da Bari) uscire a \"Fasano-Taranto-Valle D'Itria\". Proseguire direzione Locorotondo.",
    dirCarSouthText: "Dalla SS Jonica106 Taranto-Bari, uscire a Martina Franca. Proseguire sulla S.S.172 direzione Locorotondo.",

    itemLocorotondoTitle: "Locorotondo",
    itemLocorotondoDesc: "Uno dei borghi più belli d'Italia. Cummerse bianche, balconi fioriti e degustazioni di vino bianco DOC.",
    itemLocorotondoDist: "a 4 km",
    itemOstuniTitle: "Ostuni",
    itemOstuniDesc: "La celebre Città Bianca, arrampicata sugli uliveti secolari.",
    itemOstuniDist: "a 25 km",
    itemSavelletriTitle: "Savelletri",
    itemSavelletriDesc: "Nata come villaggio di pescatori, famosa per la vicinanza agli scavi di Egnazia e per le sue lussuose masserie.",
    itemSavelletriDist: "a 13 km",
    itemTorreCanneTitle: "Torre Canne",
    itemTorreCanneDesc: "Spiagge dorate e calette di scoglio con acque cristalline dell'Adriatico, rinomata anche per il suo centro termale.",
    itemTorreCanneDist: "a 17 km",
    itemTorreGuacetoTitle: "Torre Guaceto",
    itemTorreGuacetoDesc: "Riserva naturale protetta con 8 km di costa incontaminata, dune alte fino a 10 metri, un'antica torre saracena, e un mare limpido con ricche praterie di posidonie.",
    itemTorreGuacetoDist: "a 35 km",
    itemCastellanaTitle: "Grotte di Castellana",
    itemCastellanaDesc: "Uno dei complessi speleologici più spettacolari d'Italia, visite guidate tra stalattiti e stalagmiti.",
    itemCastellanaDist: "a 20 km",
    itemAlberobelloTitle: "Alberobello",
    itemAlberobelloDesc: "La capitale dei Trulli, Patrimonio dell'Umanità UNESCO.",
    itemAlberobelloDist: "a 15 km",

    itemPanificioTitle: "Panificio",
    itemPanificioDesc: "Panificio e bar per la colazione, letteralmente sotto casa.",
    itemPanificioDist: "a 100 mt",
    itemServiziTitle: "Tutti i Servizi",
    itemServiziDesc: "Minimarket, tabacchi, bar, pizzeria, macelleria con fornello pronto e fruttivendolo.",
    itemServiziDist: "a 600 mt",
    itemRistoranteTitle: "Ristorante",
    itemRistoranteDesc: "La Neviera, cucina tipica pugliese in un ambiente suggestivo.",
    itemRistoranteDist: "a 1 km",
    itemChiesettaTitle: "Chiesetta",
    itemChiesettaDesc: "La Chiesa di Laureto, piccolo gioiello di devozione locale.",
    itemChiesettaDist: "a 1 km",
    itemCentroCommTitle: "Centro Commerciale",
    itemCentroCommDesc: "Quintocolore, per tutte le necessità di shopping.",
    itemCentroCommDist: "a 3 km",

    privacyModalTitle: "Informativa Privacy — Art. 13 GDPR",
    privacyTitolareH: "Titolare del trattamento",
    privacyDatiH: "Dati raccolti",
    privacyDatiP: "Nome, cognome, data e luogo di nascita, sesso, cittadinanza, tipo e numero del documento d'identità, ente di rilascio, fotografia del documento (fronte/retro), date di check-in e check-out, nome della prenotazione.",
    privacyFinalitaH: "Finalità e base giuridica",
    privacyFinalita1: "<strong>Obblighi di pubblica sicurezza</strong>: comunicazione dei dati identificativi degli ospiti alla Questura tramite il portale Alloggiati Web, ai sensi dell'art. 109 TULPS e del D.M. 7 gennaio 2013 — base giuridica: obbligo legale (art. 6.1.c GDPR).",
    privacyFinalita2: "<strong>Gestione del soggiorno</strong>: organizzazione del check-in e dei servizi richiesti — base giuridica: esecuzione delle misure precontrattuali/contrattuali richieste dall'ospite (art. 6.1.b GDPR).",
    privacyConferimentoH: "Natura del conferimento",
    privacyConferimentoP: "Il conferimento dei dati è obbligatorio per adempiere alla legge sulla pubblica sicurezza e necessario per l'erogazione del servizio: senza questi dati non è possibile completare il check-in né ospitare legalmente la persona in struttura.",
    privacyModalitaH: "Modalità di trattamento e destinatari",
    privacyModalitaP: "I dati inseriti in questo modulo vengono trasmessi via connessione cifrata (HTTPS) al Titolare tramite il servizio tecnico di inoltro email FormSubmit (gestito da Devro LABS), che agisce come responsabile del trattamento limitatamente all'invio del modulo via email. FormSubmit non pubblica la sede dei propri server né un elenco dei subresponsabili nella propria informativa privacy pubblica. I dati sono comunicati alla Questura/Polizia di Stato solo per l'adempimento dell'obbligo di legge sopra descritto. Non vengono ceduti a terzi per finalità commerciali o di marketing.",
    privacyConservazioneH: "Conservazione",
    privacyConservazioneP: "I dati e le fotografie del documento sono conservati dal Titolare solo per il tempo strettamente necessario alla trasmissione alle autorità competenti e alla gestione del soggiorno, e vengono cancellati subito dopo. Il Garante per la protezione dei dati personali ha chiarito che la normativa di pubblica sicurezza impone la trasmissione dei dati identificativi, ma non legittima la conservazione prolungata di copie o immagini del documento d'identità.",
    privacyDirittiH: "Diritti dell'interessato",
    privacyDirittiP: "In qualsiasi momento è possibile richiedere l'accesso, la rettifica, la cancellazione o la limitazione del trattamento dei propri dati, opporsi al trattamento e richiederne la portabilità, scrivendo a {email}. È inoltre possibile proporre reclamo al Garante per la protezione dei dati personali (www.gpdp.it).",
  },

  en: {
    heroCaption: "Welcome to your Trullo",

    navCheckinTitle: "Online Check-in",
    navCheckinDesc: "Complete your registration before arrival.",
    navRegoleTitle: "House Rules",
    navRegoleDesc: "Check-in/out times, rules and useful info.",
    navWifiTitle: "WiFi",
    navWifiDesc: "Scan the QR code to connect automatically.",
    navFaqTitle: "FAQ",
    navFaqDesc: "The most common questions from our guests.",
    navGuidaTitle: "Local Guide",
    navGuidaDesc: "Villages, coast and excursions we recommend.",
    navDuePassiTitle: "Just Around the Corner",
    navDuePassiDesc: "Bakery, restaurant and services nearby.",
    navDoveSiamoTitle: "Where We Are",
    navDoveSiamoDesc: "Address, map and how to reach us.",

    tabHome: "Home",
    tabRegole: "Rules",
    tabGuida: "Guide",
    tabVicino: "Nearby",
    tabDoveSiamo: "Where We Are",


    emptySection: "Content coming soon — the owner is completing this section.",
    installBannerTitle: "Install the app",
    installBannerDesc: "Add it to your Home Screen to open it like a real app.",
    iosModalTitle: "Install on iPhone",
    iosStep1: "Tap the Share icon below",
    iosStep2: "Scroll and tap \"Add to Home Screen\"",
    iosStep3: "Confirm \"Add\" in the top right",
    btnGotIt: "Got it",
    whatsappCtaHome: "Contact the Host",
    whatsappCtaContatti: "Message us on WhatsApp",

    checkinScreenTitle: "Online Check-in",
    checkinHint: "To comply with Italian law, please upload a valid ID document for each guest before arrival.",
    bookingDataTitle: "Booking Details",
    labelCheckin: "Check-in",
    labelCheckout: "Check-out",
    labelBookingName: "Booking Name",
    placeholderBookingName: "Name the booking was made under",
    labelTrulloBooked: "Booked Trullo",
    optTrulloPlaceholder: "—",
    guestLabel: "Guest",
    btnRemoveGuest: "Remove",
    labelNome: "First Name",
    labelCognome: "Last Name",
    labelDataNascita: "Date of Birth",
    labelLuogoNascita: "Place of Birth",
    labelSesso: "Gender",
    optMaschio: "Male",
    optFemmina: "Female",
    labelCittadinanza: "Nationality",
    labelTipoDoc: "Document Type",
    optDocCarta: "ID Card",
    optDocPassaporto: "Passport",
    optDocPatente: "Driving Licence",
    optDocPermesso: "Residence Permit",
    labelNumeroDoc: "Document Number",
    labelEmessoDa: "Issued By",
    labelFotoDoc: "Document Photo (front / back)",
    sideFronte: "Front",
    sideRetro: "Back",
    statusNoPhoto: "No photo",
    statusPhotoOk: "Photo uploaded ✓",
    btnScattaFoto: "📷 Take a photo",
    btnCaricaDispositivo: "🖼️ Upload from device",
    btnAddGuest: "+ Add another guest",
    privacyConsentText: "I declare that I have read the Privacy Notice and consent to the processing of my personal data (Art. 13 GDPR).",
    privacyLinkText: "Read the full Privacy Notice",
    checkinErrorGeneric: "Please check the highlighted fields before continuing.",
    errorCheckoutDate: "The check-out date must be after the check-in date.",
    errorAdult: "At least one guest must be of legal age (18+).",
    btnSubmitCheckin: "Submit Check-in",
    btnSubmitSending: "Sending…",
    successTitle: "Done!",
    successDesc: "Your request was submitted successfully.",
    btnBackHome: "Back to Home",

    wifiScreenTitle: "WiFi",
    wifiHeading: "Wi-Fi Network",
    wifiInstructions: "Scan the QR code posted in the house with the camera below to copy the password automatically.",
    btnActivateCamera: "📷 Turn on Camera",
    btnCancel: "Cancel",
    wifiNetworkLabel: "Network",
    wifiPasswordLabel: "Password",
    wifiCopiedHint: "Password copied to clipboard. Open your phone's WiFi settings and paste it.",
    btnRescan: "Scan again",

    regoleScreenTitle: "House Rules",
    regoleChooserSub: "Select your trullo to view the house rules.",
    regoleIncantoTitle: "Trullo Incanto",
    regoleIncantoDesc: "House rules and practical info",
    regoleNidoTitle: "Trullo Il Nido",
    regoleNidoDesc: "House rules and practical info",

    ruleIncantoScreenTitle: "House Rules — Trullo Incanto",
    ruleNidoScreenTitle: "House Rules — Trullo Il Nido",
    ruleSectionGeneraleTitle: "General rules",
    ruleSectionPraticheTitle: "Practical notes",
    ruleSectionTvTitle: "Satellite & digital channels",

    ruleIncantoGeneraleHtml: `
      <li>Smoking is not allowed inside the house.</li>
      <li>Tap water is not drinkable.</li>
      <li>Do not use alcohol to light the barbecue.</li>
      <li>Children must always be accompanied by an adult in the play area.</li>
      <li class="muted">If the guest causes any kind of damage inside the apartment or to the furnishings, they must inform the owners, who reserve the right to charge for the damage.</li>
      <li class="muted">The owners decline all responsibility for injuries to adults and minors, for loss, theft or damage to guests' belongings, and for damage or theft affecting cars in the parking area.</li>
      <li class="muted">Please take special care of the house keys and the gate remote control: if lost or damaged, the cost of replacing the front door lock and/or the remote control will be charged to the guest.</li>
    `,
    ruleIncantoPraticheHtml: `
      <li>Fresh towels are kept in the bedroom drawers.</li>
      <li>The driveway, courtyard and garden lights switch on and off automatically; the ones on the front door and windows are controlled by switches.</li>
      <li>If there is a power outage, unlock the gate manually with the dedicated key.</li>
      <li>Close the outside windows every time you leave the trullo.</li>
      <li>Close the bedroom porthole window if rain is expected.</li>
      <li>Close the gazebo in case of strong wind.</li>
      <li>In the evening, fold up the sun loungers (to keep the cats off them); bring them inside if it rains.</li>
      <li><strong>Wood-burning heating</strong>: keep the display between 60° and 70°, never above 80°. Don't let too much ash build up in the fireplace — remove the excess every 2-3 days into the designated bucket.</li>
    `,
    ruleIncantoTvHtml: `
      <li><strong>Satellite channels</strong> — Turn on the TV, press "LIST" on the remote, then the red button. On the TV, select "Satellite" using the ▼ arrow, press "OK" on the remote, then "OK" again with the ▼ arrow on the TV, and confirm with "OK".</li>
      <li><strong>Italian digital channels</strong> — Turn on the TV, press "LIST" on the remote, then the red button. On the TV, select "Antenna" using the ▲ arrow, press "OK" on the remote, then "OK" again with the ▼ arrow on the TV, and confirm with "OK".</li>
    `,

    ruleNidoGeneraleHtml: `
      <li>Smoking is not allowed inside the house.</li>
      <li>Tap water is not drinkable.</li>
      <li>Do not use alcohol to light the barbecue.</li>
      <li>Children must always be accompanied by an adult in the play area.</li>
      <li class="muted">If the guest causes any kind of damage inside the apartment or to the furnishings, they must inform the owners, who reserve the right to charge for the damage.</li>
      <li class="muted">The owners decline all responsibility for injuries to adults and minors, for loss, theft or damage to guests' belongings, and for damage or theft affecting cars in the parking area.</li>
      <li class="muted">Please take special care of the house keys and the gate remote control: if lost or damaged, the cost of replacing the front door lock and/or the remote control will be charged to the guest.</li>
    `,
    ruleNidoPraticheHtml: `
      <li>Fresh towels are kept in the bedroom drawers.</li>
      <li>The driveway, courtyard and garden lights switch on and off automatically; the ones in the gazebo and barbecue area are controlled by switches.</li>
      <li>If there is a power outage, unlock the gate manually with the dedicated key.</li>
      <li>In the evening, fold up the sun loungers (to keep the cats off them); if it rains, store them under the gazebo.</li>
    `,
    ruleNidoTvHtml: `
      <li><strong>Satellite channels</strong> — Turn on the TV, press "LIST" on the remote, then the red button. On the TV, select "Satellite" using the ▼ arrow, press "OK" on the remote, then "EXIT".</li>
      <li><strong>Italian digital channels</strong> — Turn on the TV, press "LIST" on the remote, then the red button. On the TV, select "Antenna" using the ▲ arrow, press "OK" on the remote, then "EXIT".</li>
    `,

    faqScreenTitle: "FAQ",
    faqQ1: "Do you provide bed linen and towels?",
    faqA1: "Yes, we provide clean linen and a set of towels for each guest.",
    faqQ2: "Is the kitchen fully equipped?",
    faqA2: "Absolutely. You'll find pots, pans, dishes and cutlery.",

    guidaScreenTitle: "Local Guide",
    guidaSub: "From the Itria Valley to the sea: the places we recommend to our guests.",
    duepassiScreenTitle: "Just Around the Corner",
    duepassiSub: "Bakery, services, restaurant and shopping centre just steps from the trullo.",

    contattiScreenTitle: "Where We Are",
    addressLabel: "Address",
    btnOpenMap: "Open Map",
    carNorthLabel: "By car (from the North)",
    carSouthLabel: "By car (from the South)",
    dirCarNorthText: "Exit at Bari Nord toll booth onto S.S.16 dir. Brindisi. After ~60 km from Bari, take exit 'Fasano-Taranto-Valle D'Itria'. Continue towards Locorotondo.",
    dirCarSouthText: "From SS Jonica106 Taranto-Bari, exit at Martina Franca. Continue on S.S.172 towards Locorotondo.",

    itemLocorotondoTitle: "Locorotondo",
    itemLocorotondoDesc: "One of the most beautiful villages in Italy. White cummerse houses, flowered balconies, and DOC white wine tastings.",
    itemLocorotondoDist: "4 km away",
    itemOstuniTitle: "Ostuni",
    itemOstuniDesc: "The famous White City, perched above centuries-old olive groves.",
    itemOstuniDist: "25 km away",
    itemSavelletriTitle: "Savelletri",
    itemSavelletriDesc: "Originating as a fishing village, famous for its proximity to the Egnazia ruins and its luxurious masserias.",
    itemSavelletriDist: "13 km away",
    itemTorreCanneTitle: "Torre Canne",
    itemTorreCanneDesc: "Golden beaches and rocky coves with crystal-clear Adriatic waters, also renowned for its thermal spa centre.",
    itemTorreCanneDist: "17 km away",
    itemTorreGuacetoTitle: "Torre Guaceto",
    itemTorreGuacetoDesc: "A protected nature reserve with 8 km of unspoiled coastline, dunes up to 10 metres high, an ancient Saracen tower, and clear waters rich with Posidonia seagrass meadows.",
    itemTorreGuacetoDist: "35 km away",
    itemCastellanaTitle: "Castellana Caves",
    itemCastellanaDesc: "One of Italy's most spectacular cave systems, guided tours among stalactites and stalagmites.",
    itemCastellanaDist: "20 km away",
    itemAlberobelloTitle: "Alberobello",
    itemAlberobelloDesc: "The capital of the Trulli, a UNESCO World Heritage Site.",
    itemAlberobelloDist: "15 km away",

    itemPanificioTitle: "Bakery",
    itemPanificioDesc: "Bakery and café for breakfast, literally at your doorstep.",
    itemPanificioDist: "100 m away",
    itemServiziTitle: "All the Essentials",
    itemServiziDesc: "Minimarket, tobacconist, bar, pizzeria, butcher with ready-cooked dishes, and greengrocer.",
    itemServiziDist: "600 m away",
    itemRistoranteTitle: "Restaurant",
    itemRistoranteDesc: "La Neviera, traditional Apulian cuisine in a charming setting.",
    itemRistoranteDist: "1 km away",
    itemChiesettaTitle: "Small Church",
    itemChiesettaDesc: "The Chiesa di Laureto, a small gem of local devotion.",
    itemChiesettaDist: "1 km away",
    itemCentroCommTitle: "Shopping Centre",
    itemCentroCommDesc: "Quintocolore, for all your shopping needs.",
    itemCentroCommDist: "3 km away",

    privacyModalTitle: "Privacy Notice — Art. 13 GDPR",
    privacyTitolareH: "Data Controller",
    privacyDatiH: "Data Collected",
    privacyDatiP: "First name, last name, date and place of birth, gender, nationality, ID document type and number, issuing authority, photo of the document (front/back), check-in and check-out dates, booking name.",
    privacyFinalitaH: "Purpose and Legal Basis",
    privacyFinalita1: "<strong>Public security obligations</strong>: transmission of guests' identification data to the local police authority via the Alloggiati Web portal, pursuant to art. 109 TULPS and Ministerial Decree of 7 January 2013 — legal basis: legal obligation (art. 6.1.c GDPR).",
    privacyFinalita2: "<strong>Stay management</strong>: organising check-in and the services requested — legal basis: performance of pre-contractual/contractual measures requested by the guest (art. 6.1.b GDPR).",
    privacyConferimentoH: "Nature of the Data Provided",
    privacyConferimentoP: "Providing this data is mandatory to comply with public security law and necessary to deliver the service: without it, check-in cannot be completed and the guest cannot legally stay at the property.",
    privacyModalitaH: "Processing Methods and Recipients",
    privacyModalitaP: "The data entered in this form is transmitted over an encrypted connection (HTTPS) to the Data Controller via the FormSubmit email-forwarding service (operated by Devro LABS), which acts as a data processor solely for sending the form by email. FormSubmit does not disclose its server location or a list of sub-processors in its public privacy policy. Data is shared with the local police authority only to fulfil the legal obligation described above. It is not shared with third parties for commercial or marketing purposes.",
    privacyConservazioneH: "Data Retention",
    privacyConservazioneP: "The data and document photos are kept by the Data Controller only for as long as strictly necessary to transmit them to the competent authorities and manage the stay, and are deleted immediately afterwards. The Italian Data Protection Authority (Garante) has clarified that public security law requires the transmission of identification data but does not authorise prolonged retention of copies or images of the ID document.",
    privacyDirittiH: "Data Subject Rights",
    privacyDirittiP: "You may request access, rectification, erasure or restriction of processing of your data, object to processing, and request data portability at any time by writing to {email}. You may also lodge a complaint with the Italian Data Protection Authority (www.gpdp.it).",
  },

  de: {
    heroCaption: "Willkommen in Ihrem Trullo",

    navCheckinTitle: "Online Check-in",
    navCheckinDesc: "Schließen Sie die Anmeldung vor der Ankunft ab.",
    navRegoleTitle: "Hausordnung",
    navRegoleDesc: "Check-in/out-Zeiten, Regeln und nützliche Infos.",
    navWifiTitle: "WLAN",
    navWifiDesc: "QR-Code scannen und automatisch verbinden.",
    navFaqTitle: "FAQ",
    navFaqDesc: "Die häufigsten Fragen unserer Gäste.",
    navGuidaTitle: "Ausflugsführer",
    navGuidaDesc: "Dörfer, Küste und empfohlene Ausflüge.",
    navDuePassiTitle: "Gleich um die Ecke",
    navDuePassiDesc: "Bäckerei, Restaurant und Geschäfte in der Nähe.",
    navDoveSiamoTitle: "Wo wir sind",
    navDoveSiamoDesc: "Adresse, Karte und Anfahrt.",

    tabHome: "Home",
    tabRegole: "Regeln",
    tabGuida: "Führer",
    tabVicino: "In der Nähe",
    tabDoveSiamo: "Wo wir sind",


    emptySection: "Inhalt folgt in Kürze — der Eigentümer vervollständigt diesen Bereich.",
    installBannerTitle: "App installieren",
    installBannerDesc: "Zum Home-Bildschirm hinzufügen, um sie wie eine echte App zu öffnen.",
    iosModalTitle: "Auf dem iPhone installieren",
    iosStep1: "Tippen Sie unten auf das Teilen-Symbol",
    iosStep2: "Scrollen Sie und tippen Sie auf \"Zum Home-Bildschirm\"",
    iosStep3: "Bestätigen Sie oben rechts mit \"Hinzufügen\"",
    btnGotIt: "Verstanden",
    whatsappCtaHome: "Gastgeber kontaktieren",
    whatsappCtaContatti: "Über WhatsApp schreiben",

    checkinScreenTitle: "Online Check-in",
    checkinHint: "Zur Erfüllung der italienischen Meldepflicht laden Sie bitte vor der Anreise für jeden Gast ein gültiges Ausweisdokument hoch.",
    bookingDataTitle: "Buchungsdaten",
    labelCheckin: "Check-in",
    labelCheckout: "Check-out",
    labelBookingName: "Buchungsname",
    placeholderBookingName: "Name, auf den die Buchung lautet",
    labelTrulloBooked: "Gebuchter Trullo",
    optTrulloPlaceholder: "—",
    guestLabel: "Gast",
    btnRemoveGuest: "Entfernen",
    labelNome: "Vorname",
    labelCognome: "Nachname",
    labelDataNascita: "Geburtsdatum",
    labelLuogoNascita: "Geburtsort",
    labelSesso: "Geschlecht",
    optMaschio: "Männlich",
    optFemmina: "Weiblich",
    labelCittadinanza: "Staatsangehörigkeit",
    labelTipoDoc: "Dokumententyp",
    optDocCarta: "Personalausweis",
    optDocPassaporto: "Reisepass",
    optDocPatente: "Führerschein",
    optDocPermesso: "Aufenthaltstitel",
    labelNumeroDoc: "Dokumentennummer",
    labelEmessoDa: "Ausgestellt von",
    labelFotoDoc: "Dokumentenfoto (Vorder-/Rückseite)",
    sideFronte: "Vorderseite",
    sideRetro: "Rückseite",
    statusNoPhoto: "Kein Foto",
    statusPhotoOk: "Foto hochgeladen ✓",
    btnScattaFoto: "📷 Foto aufnehmen",
    btnCaricaDispositivo: "🖼️ Vom Gerät hochladen",
    btnAddGuest: "+ Weiteren Gast hinzufügen",
    privacyConsentText: "Ich erkläre, die Datenschutzerklärung gelesen zu haben, und stimme der Verarbeitung meiner personenbezogenen Daten zu (Art. 13 DSGVO).",
    privacyLinkText: "Vollständige Datenschutzerklärung lesen",
    checkinErrorGeneric: "Bitte überprüfen Sie die markierten Felder, bevor Sie fortfahren.",
    errorCheckoutDate: "Das Check-out-Datum muss nach dem Check-in-Datum liegen.",
    errorAdult: "Mindestens ein Gast muss volljährig sein (18+).",
    btnSubmitCheckin: "Check-in absenden",
    btnSubmitSending: "Wird gesendet…",
    successTitle: "Fertig!",
    successDesc: "Ihre Anfrage wurde erfolgreich übermittelt.",
    btnBackHome: "Zurück zur Startseite",

    wifiScreenTitle: "WLAN",
    wifiHeading: "WLAN-Netzwerk",
    wifiInstructions: "Scannen Sie den im Haus angebrachten QR-Code mit der Kamera unten, um das Passwort automatisch zu kopieren.",
    btnActivateCamera: "📷 Kamera aktivieren",
    btnCancel: "Abbrechen",
    wifiNetworkLabel: "Netzwerk",
    wifiPasswordLabel: "Passwort",
    wifiCopiedHint: "Passwort in die Zwischenablage kopiert. Öffnen Sie die WLAN-Einstellungen Ihres Telefons und fügen Sie es ein.",
    btnRescan: "Erneut scannen",

    regoleScreenTitle: "Hausordnung",
    regoleChooserSub: "Wählen Sie Ihren Trullo, um die Hausordnung anzuzeigen.",
    regoleIncantoTitle: "Trullo Incanto",
    regoleIncantoDesc: "Hausordnung und praktische Infos",
    regoleNidoTitle: "Trullo Il Nido",
    regoleNidoDesc: "Hausordnung und praktische Infos",

    ruleIncantoScreenTitle: "Hausordnung — Trullo Incanto",
    ruleNidoScreenTitle: "Hausordnung — Trullo Il Nido",
    ruleSectionGeneraleTitle: "Allgemeine Regeln",
    ruleSectionPraticheTitle: "Praktische Hinweise",
    ruleSectionTvTitle: "Satelliten- und Digitalkanäle",

    ruleIncantoGeneraleHtml: `
      <li>Das Rauchen im Haus ist nicht gestattet.</li>
      <li>Das Leitungswasser ist nicht trinkbar.</li>
      <li>Verwenden Sie keinen Alkohol zum Anzünden des Grills.</li>
      <li>Kinder müssen im Spielbereich stets von einem Erwachsenen begleitet werden.</li>
      <li class="muted">Verursacht der Gast Schäden jeglicher Art in der Wohnung oder an der Einrichtung, ist er verpflichtet, die Eigentümer zu informieren, die sich vorbehalten, den entsprechenden Schadensbetrag in Rechnung zu stellen.</li>
      <li class="muted">Die Eigentümer übernehmen keine Haftung für Unfälle von Erwachsenen und Minderjährigen, für Verlust, Diebstahl oder Beschädigung von Gegenständen der Gäste sowie für Schäden oder Diebstähle an auf dem Parkplatz abgestellten Fahrzeugen.</li>
      <li class="muted">Besondere Sorgfalt gilt den Hausschlüsseln und der Fernbedienung für das Tor: Bei Verlust oder Beschädigung werden dem Gast die Kosten für den Austausch des Türschlosses bzw. der Fernbedienung in Rechnung gestellt.</li>
    `,
    ruleIncantoPraticheHtml: `
      <li>Frische Handtücher befinden sich in den Schubladen der Schlafzimmer.</li>
      <li>Die Beleuchtung von Zufahrt, Vorplatz und Garten schaltet sich automatisch ein und aus; die Lichter an Eingangstür und Fenstern werden über Schalter bedient.</li>
      <li>Bei Stromausfall das Tor manuell mit dem dafür vorgesehenen Schlüssel entriegeln.</li>
      <li>Schließen Sie die Außenfenster jedes Mal, wenn Sie den Trullo verlassen.</li>
      <li>Bei angekündigtem Regen das Bullaugenfenster im Schlafzimmer schließen.</li>
      <li>Bei starkem Wind den Pavillon (Gazebo) schließen.</li>
      <li>Klappen Sie abends die Liegestühle zusammen (damit die Katzen nicht hinaufklettern); bei Regen bringen Sie sie ins Haus.</li>
      <li><strong>Holzheizung</strong>: Halten Sie die Anzeige zwischen 60° und 70°, nie über 80°. Lassen Sie nicht zu viel Asche im Kamin — entfernen Sie sie alle 2-3 Tage in den dafür vorgesehenen Eimer.</li>
    `,
    ruleIncantoTvHtml: `
      <li><strong>Satellitenkanäle</strong> — Schalten Sie den Fernseher ein, drücken Sie "LIST" auf der Fernbedienung, dann die rote Taste. Wählen Sie auf dem Fernseher mit der Pfeiltaste ▼ "Satellite", drücken Sie "OK" auf der Fernbedienung, dann erneut "OK" mit der Pfeiltaste ▼ auf dem Fernseher, und bestätigen Sie mit "OK".</li>
      <li><strong>Italienische Digitalkanäle</strong> — Schalten Sie den Fernseher ein, drücken Sie "LIST" auf der Fernbedienung, dann die rote Taste. Wählen Sie auf dem Fernseher mit der Pfeiltaste ▲ "Antenna", drücken Sie "OK" auf der Fernbedienung, dann erneut "OK" mit der Pfeiltaste ▼ auf dem Fernseher, und bestätigen Sie mit "OK".</li>
    `,

    ruleNidoGeneraleHtml: `
      <li>Das Rauchen im Haus ist nicht gestattet.</li>
      <li>Das Leitungswasser ist nicht trinkbar.</li>
      <li>Verwenden Sie keinen Alkohol zum Anzünden des Grills.</li>
      <li>Kinder müssen im Spielbereich stets von einem Erwachsenen begleitet werden.</li>
      <li class="muted">Verursacht der Gast Schäden jeglicher Art in der Wohnung oder an der Einrichtung, ist er verpflichtet, die Eigentümer zu informieren, die sich vorbehalten, den entsprechenden Schadensbetrag in Rechnung zu stellen.</li>
      <li class="muted">Die Eigentümer übernehmen keine Haftung für Unfälle von Erwachsenen und Minderjährigen, für Verlust, Diebstahl oder Beschädigung von Gegenständen der Gäste sowie für Schäden oder Diebstähle an auf dem Parkplatz abgestellten Fahrzeugen.</li>
      <li class="muted">Besondere Sorgfalt gilt den Hausschlüsseln und der Fernbedienung für das Tor: Bei Verlust oder Beschädigung werden dem Gast die Kosten für den Austausch des Türschlosses bzw. der Fernbedienung in Rechnung gestellt.</li>
    `,
    ruleNidoPraticheHtml: `
      <li>Frische Handtücher befinden sich in den Schubladen des Schlafzimmers.</li>
      <li>Die Beleuchtung von Zufahrt, Vorplatz und Garten schaltet sich automatisch ein und aus; die Lichter am Pavillon und im Grillbereich werden über Schalter bedient.</li>
      <li>Bei Stromausfall das Tor manuell mit dem dafür vorgesehenen Schlüssel entriegeln.</li>
      <li>Klappen Sie abends die Liegestühle zusammen (damit die Katzen nicht hinaufklettern); bei Regen stellen Sie sie unter den Pavillon.</li>
    `,
    ruleNidoTvHtml: `
      <li><strong>Satellitenkanäle</strong> — Schalten Sie den Fernseher ein, drücken Sie "LIST" auf der Fernbedienung, dann die rote Taste. Wählen Sie auf dem Fernseher mit der Pfeiltaste ▼ "Satellite", drücken Sie "OK" auf der Fernbedienung, dann "EXIT".</li>
      <li><strong>Italienische Digitalkanäle</strong> — Schalten Sie den Fernseher ein, drücken Sie "LIST" auf der Fernbedienung, dann die rote Taste. Wählen Sie auf dem Fernseher mit der Pfeiltaste ▲ "Antenna", drücken Sie "OK" auf der Fernbedienung, dann "EXIT".</li>
    `,

    faqScreenTitle: "FAQ",
    faqQ1: "Stellen Sie Bettwäsche und Handtücher zur Verfügung?",
    faqA1: "Ja, wir stellen saubere Wäsche und ein Handtuchset für jeden Gast bereit.",
    faqQ2: "Ist die Küche ausgestattet?",
    faqA2: "Selbstverständlich. Sie finden Töpfe, Pfannen, Geschirr und Besteck vor.",

    guidaScreenTitle: "Ausflugsführer",
    guidaSub: "Vom Valle d'Itria bis ans Meer: die Orte, die wir unseren Gästen empfehlen.",
    duepassiScreenTitle: "Gleich um die Ecke",
    duepassiSub: "Bäckerei, Geschäfte, Restaurant und Einkaufszentrum nur wenige Schritte vom Trullo entfernt.",

    contattiScreenTitle: "Wo wir sind",
    addressLabel: "Adresse",
    btnOpenMap: "Karte öffnen",
    carNorthLabel: "Mit dem Auto (von Norden)",
    carSouthLabel: "Mit dem Auto (von Süden)",
    dirCarNorthText: "Bei Bari Nord ausfahren auf die S.S.16 Richtung Brindisi. Nach ca. 60 km Ausfahrt 'Fasano-Taranto-Valle D'Itria' nehmen und Richtung Locorotondo weiterfahren.",
    dirCarSouthText: "Von der SS Jonica106 Taranto-Bari bei Martina Franca ausfahren. Auf der S.S.172 Richtung Locorotondo weiterfahren.",

    itemLocorotondoTitle: "Locorotondo",
    itemLocorotondoDesc: "Eines der schönsten Dörfer Italiens. Weiße Cummerse-Häuser, blumengeschmückte Balkone und DOC-Weißweinverkostungen.",
    itemLocorotondoDist: "4 km entfernt",
    itemOstuniTitle: "Ostuni",
    itemOstuniDesc: "Die berühmte Weiße Stadt, hoch über jahrhundertealten Olivenhainen.",
    itemOstuniDist: "25 km entfernt",
    itemSavelletriTitle: "Savelletri",
    itemSavelletriDesc: "Entstanden als Fischerdorf, bekannt für die Nähe zu den Ausgrabungen von Egnazia und seine luxuriösen Masserien.",
    itemSavelletriDist: "13 km entfernt",
    itemTorreCanneTitle: "Torre Canne",
    itemTorreCanneDesc: "Goldene Strände und felsige Buchten mit kristallklarem Adriawasser, auch bekannt für sein renommiertes Thermalbad.",
    itemTorreCanneDist: "17 km entfernt",
    itemTorreGuacetoTitle: "Torre Guaceto",
    itemTorreGuacetoDesc: "Ein geschütztes Naturschutzgebiet mit 8 km unberührter Küste, bis zu 10 Meter hohen Dünen, einem antiken Sarazenenturm und klarem Wasser mit reichen Posidonia-Seegraswiesen.",
    itemTorreGuacetoDist: "35 km entfernt",
    itemCastellanaTitle: "Grotten von Castellana",
    itemCastellanaDesc: "Eines der spektakulärsten Höhlensysteme Italiens, geführte Touren zwischen Stalaktiten und Stalagmiten.",
    itemCastellanaDist: "20 km entfernt",
    itemAlberobelloTitle: "Alberobello",
    itemAlberobelloDesc: "Die Hauptstadt der Trulli, UNESCO-Weltkulturerbe.",
    itemAlberobelloDist: "15 km entfernt",

    itemPanificioTitle: "Bäckerei",
    itemPanificioDesc: "Bäckerei und Café für das Frühstück, buchstäblich vor der Haustür.",
    itemPanificioDist: "100 m entfernt",
    itemServiziTitle: "Alles für den täglichen Bedarf",
    itemServiziDesc: "Minimarkt, Tabakladen, Bar, Pizzeria, Metzgerei mit fertigen Gerichten und Obst- und Gemüsehändler.",
    itemServiziDist: "600 m entfernt",
    itemRistoranteTitle: "Restaurant",
    itemRistoranteDesc: "La Neviera, typisch apulische Küche in stimmungsvollem Ambiente.",
    itemRistoranteDist: "1 km entfernt",
    itemChiesettaTitle: "Kirche",
    itemChiesettaDesc: "Die Chiesa di Laureto, ein kleines Juwel lokaler Frömmigkeit.",
    itemChiesettaDist: "1 km entfernt",
    itemCentroCommTitle: "Einkaufszentrum",
    itemCentroCommDesc: "Quintocolore, für alle Einkaufsbedürfnisse.",
    itemCentroCommDist: "3 km entfernt",

    privacyModalTitle: "Datenschutzerklärung — Art. 13 DSGVO",
    privacyTitolareH: "Verantwortlicher",
    privacyDatiH: "Erhobene Daten",
    privacyDatiP: "Vorname, Nachname, Geburtsdatum und -ort, Geschlecht, Staatsangehörigkeit, Art und Nummer des Ausweisdokuments, ausstellende Behörde, Foto des Dokuments (Vorder-/Rückseite), An- und Abreisedatum, Buchungsname.",
    privacyFinalitaH: "Zweck und Rechtsgrundlage",
    privacyFinalita1: "<strong>Meldepflichten</strong>: Übermittlung der Identifikationsdaten der Gäste an die zuständige Polizeibehörde über das Portal Alloggiati Web gemäß Art. 109 TULPS und Ministerialdekret vom 7. Januar 2013 — Rechtsgrundlage: rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO).",
    privacyFinalita2: "<strong>Aufenthaltsverwaltung</strong>: Organisation des Check-ins und der angeforderten Leistungen — Rechtsgrundlage: Erfüllung vorvertraglicher/vertraglicher Maßnahmen auf Anfrage des Gastes (Art. 6 Abs. 1 lit. b DSGVO).",
    privacyConferimentoH: "Art der Datenbereitstellung",
    privacyConferimentoP: "Die Bereitstellung der Daten ist zur Erfüllung der Meldepflicht gesetzlich vorgeschrieben und für die Erbringung der Leistung erforderlich: ohne diese Daten kann der Check-in nicht abgeschlossen und der Gast nicht rechtmäßig untergebracht werden.",
    privacyModalitaH: "Verarbeitungsweise und Empfänger",
    privacyModalitaP: "Die in diesem Formular eingegebenen Daten werden über eine verschlüsselte Verbindung (HTTPS) an den Verantwortlichen über den E-Mail-Weiterleitungsdienst FormSubmit (betrieben von Devro LABS) übermittelt, der als Auftragsverarbeiter ausschließlich für den Versand des Formulars per E-Mail fungiert. FormSubmit veröffentlicht in seiner öffentlichen Datenschutzerklärung weder den Standort seiner Server noch eine Liste von Unterauftragsverarbeitern. Die Daten werden ausschließlich zur Erfüllung der oben beschriebenen gesetzlichen Pflicht an die Polizeibehörde übermittelt. Eine Weitergabe an Dritte zu kommerziellen oder Marketingzwecken erfolgt nicht.",
    privacyConservazioneH: "Speicherdauer",
    privacyConservazioneP: "Die Daten und Dokumentenfotos werden vom Verantwortlichen nur so lange aufbewahrt, wie es für die Übermittlung an die zuständigen Behörden und die Verwaltung des Aufenthalts unbedingt erforderlich ist, und anschließend umgehend gelöscht. Die italienische Datenschutzbehörde (Garante) hat klargestellt, dass die Meldevorschriften zwar die Übermittlung der Identifikationsdaten vorschreiben, jedoch keine längere Aufbewahrung von Kopien oder Bildern des Ausweisdokuments legitimieren.",
    privacyDirittiH: "Rechte der betroffenen Person",
    privacyDirittiP: "Sie können jederzeit Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer Daten verlangen, der Verarbeitung widersprechen und die Datenübertragbarkeit beantragen, indem Sie an {email} schreiben. Zudem können Sie sich bei der italienischen Datenschutzbehörde beschweren (www.gpdp.it).",
  },

  fr: {
    heroCaption: "Bienvenue dans votre Trullo",

    navCheckinTitle: "Check-in en ligne",
    navCheckinDesc: "Complétez votre enregistrement avant l'arrivée.",
    navRegoleTitle: "Règlement Intérieur",
    navRegoleDesc: "Horaires, règles et infos utiles pour le séjour.",
    navWifiTitle: "WiFi",
    navWifiDesc: "Scannez le QR code pour vous connecter automatiquement.",
    navFaqTitle: "FAQ",
    navFaqDesc: "Les questions les plus fréquentes de nos hôtes.",
    navGuidaTitle: "Guide des environs",
    navGuidaDesc: "Villages, mer et excursions que nous recommandons.",
    navDuePassiTitle: "À deux pas",
    navDuePassiDesc: "Boulangerie, restaurant et commerces à proximité.",
    navDoveSiamoTitle: "Où Nous Sommes",
    navDoveSiamoDesc: "Adresse, carte et comment nous rejoindre.",

    tabHome: "Accueil",
    tabRegole: "Règles",
    tabGuida: "Guide",
    tabVicino: "À Proximité",
    tabDoveSiamo: "Où Sommes-Nous",


    emptySection: "Contenu à venir — le propriétaire complète cette section.",
    installBannerTitle: "Installer l'application",
    installBannerDesc: "Ajoutez-la à l'écran d'accueil pour l'ouvrir comme une vraie application.",
    iosModalTitle: "Installer sur iPhone",
    iosStep1: "Appuyez sur l'icône Partager ci-dessous",
    iosStep2: "Faites défiler et appuyez sur « Sur l'écran d'accueil »",
    iosStep3: "Confirmez « Ajouter » en haut à droite",
    btnGotIt: "Compris",
    whatsappCtaHome: "Contacter l'hôte",
    whatsappCtaContatti: "Écrivez-nous sur WhatsApp",

    checkinScreenTitle: "Check-in en ligne",
    checkinHint: "Pour respecter les obligations légales italiennes, veuillez téléverser une pièce d'identité valide pour chaque hôte avant l'arrivée.",
    bookingDataTitle: "Détails de la réservation",
    labelCheckin: "Arrivée",
    labelCheckout: "Départ",
    labelBookingName: "Nom de la réservation",
    placeholderBookingName: "Nom au titre duquel la réservation a été effectuée",
    labelTrulloBooked: "Trullo réservé",
    optTrulloPlaceholder: "—",
    guestLabel: "Hôte",
    btnRemoveGuest: "Supprimer",
    labelNome: "Prénom",
    labelCognome: "Nom",
    labelDataNascita: "Date de naissance",
    labelLuogoNascita: "Lieu de naissance",
    labelSesso: "Sexe",
    optMaschio: "Homme",
    optFemmina: "Femme",
    labelCittadinanza: "Nationalité",
    labelTipoDoc: "Type de document",
    optDocCarta: "Carte d'identité",
    optDocPassaporto: "Passeport",
    optDocPatente: "Permis de conduire",
    optDocPermesso: "Titre de séjour",
    labelNumeroDoc: "Numéro du document",
    labelEmessoDa: "Délivré par",
    labelFotoDoc: "Photo du document (recto / verso)",
    sideFronte: "Recto",
    sideRetro: "Verso",
    statusNoPhoto: "Aucune photo",
    statusPhotoOk: "Photo téléversée ✓",
    btnScattaFoto: "📷 Prendre une photo",
    btnCaricaDispositivo: "🖼️ Charger depuis l'appareil",
    btnAddGuest: "+ Ajouter un autre hôte",
    privacyConsentText: "Je déclare avoir lu la notice d'information sur la protection des données et consens au traitement de mes données personnelles (Art. 13 RGPD).",
    privacyLinkText: "Lire la notice complète sur la protection des données",
    checkinErrorGeneric: "Veuillez vérifier les champs surlignés avant de continuer.",
    errorCheckoutDate: "La date de départ doit être postérieure à la date d'arrivée.",
    errorAdult: "Au moins un hôte doit être majeur (18 ans ou plus).",
    btnSubmitCheckin: "Envoyer le check-in",
    btnSubmitSending: "Envoi en cours…",
    successTitle: "Terminé !",
    successDesc: "Votre demande a bien été envoyée.",
    btnBackHome: "Retour à l'accueil",

    wifiScreenTitle: "WiFi",
    wifiHeading: "Réseau Wi-Fi",
    wifiInstructions: "Scannez le QR code affiché dans la maison avec la caméra ci-dessous pour copier automatiquement le mot de passe.",
    btnActivateCamera: "📷 Activer la caméra",
    btnCancel: "Annuler",
    wifiNetworkLabel: "Réseau",
    wifiPasswordLabel: "Mot de passe",
    wifiCopiedHint: "Mot de passe copié dans le presse-papiers. Ouvrez les paramètres WiFi de votre téléphone et collez-le.",
    btnRescan: "Scanner à nouveau",

    regoleScreenTitle: "Règlement intérieur",
    regoleChooserSub: "Sélectionnez votre trullo pour consulter le règlement intérieur.",
    regoleIncantoTitle: "Trullo Incanto",
    regoleIncantoDesc: "Règlement intérieur et infos pratiques",
    regoleNidoTitle: "Trullo Il Nido",
    regoleNidoDesc: "Règlement intérieur et infos pratiques",

    ruleIncantoScreenTitle: "Règlement — Trullo Incanto",
    ruleNidoScreenTitle: "Règlement — Trullo Il Nido",
    ruleSectionGeneraleTitle: "Règles générales",
    ruleSectionPraticheTitle: "Notes pratiques",
    ruleSectionTvTitle: "Chaînes satellite et numériques",

    ruleIncantoGeneraleHtml: `
      <li>Il est interdit de fumer à l'intérieur de la maison.</li>
      <li>L'eau du robinet n'est pas potable.</li>
      <li>N'utilisez pas d'alcool pour allumer le barbecue.</li>
      <li>Les enfants doivent toujours être accompagnés d'un adulte dans l'espace de jeux.</li>
      <li class="muted">En cas de dommage de toute nature à l'appartement ou au mobilier, l'hôte est tenu d'en informer les propriétaires, qui se réservent le droit de demander le montant des dommages.</li>
      <li class="muted">Les propriétaires déclinent toute responsabilité en cas de blessure d'adultes ou de mineurs, de perte, vol ou détérioration d'objets appartenant aux hôtes, ainsi qu'en cas de dommage ou vol concernant les véhicules garés sur le parking.</li>
      <li class="muted">Une attention particulière doit être portée aux clés de la maison et à la télécommande du portail : en cas de perte ou de détérioration, les frais de remplacement de la serrure de la porte d'entrée et/ou de la télécommande seront à la charge de l'hôte.</li>
    `,
    ruleIncantoPraticheHtml: `
      <li>Le linge de bain propre se trouve dans les tiroirs des chambres.</li>
      <li>Les lumières de l'allée, de la cour et du jardin s'allument et s'éteignent automatiquement ; celles de la porte d'entrée et des fenêtres se commandent par interrupteur.</li>
      <li>En cas de coupure de courant, débloquez manuellement le portail avec la clé prévue à cet effet.</li>
      <li>Fermez les fenêtres extérieures chaque fois que vous quittez le trullo.</li>
      <li>Fermez le hublot de la chambre en cas de pluie annoncée.</li>
      <li>Fermez le gazebo en cas de vent fort.</li>
      <li>Le soir, repliez les chaises longues (pour éviter que les chats n'y montent) ; en cas de pluie, rentrez-les dans la maison.</li>
      <li><strong>Chauffage au bois</strong> : maintenez l'afficheur entre 60° et 70°, sans jamais dépasser 80°. Ne laissez pas trop de cendres dans la cheminée — retirez-les tous les 2-3 jours dans le seau prévu à cet effet.</li>
    `,
    ruleIncantoTvHtml: `
      <li><strong>Chaînes satellite</strong> — Allumez la télévision, appuyez sur "LIST" sur la télécommande, puis sur la touche rouge. Sur la télévision, sélectionnez "Satellite" avec la flèche ▼, appuyez sur "OK" sur la télécommande, puis à nouveau sur "OK" avec la flèche ▼ sur la télévision, et confirmez avec "OK".</li>
      <li><strong>Chaînes numériques italiennes</strong> — Allumez la télévision, appuyez sur "LIST" sur la télécommande, puis sur la touche rouge. Sur la télévision, sélectionnez "Antenna" avec la flèche ▲, appuyez sur "OK" sur la télécommande, puis à nouveau sur "OK" avec la flèche ▼ sur la télévision, et confirmez avec "OK".</li>
    `,

    ruleNidoGeneraleHtml: `
      <li>Il est interdit de fumer à l'intérieur de la maison.</li>
      <li>L'eau du robinet n'est pas potable.</li>
      <li>N'utilisez pas d'alcool pour allumer le barbecue.</li>
      <li>Les enfants doivent toujours être accompagnés d'un adulte dans l'espace de jeux.</li>
      <li class="muted">En cas de dommage de toute nature à l'appartement ou au mobilier, l'hôte est tenu d'en informer les propriétaires, qui se réservent le droit de demander le montant des dommages.</li>
      <li class="muted">Les propriétaires déclinent toute responsabilité en cas de blessure d'adultes ou de mineurs, de perte, vol ou détérioration d'objets appartenant aux hôtes, ainsi qu'en cas de dommage ou vol concernant les véhicules garés sur le parking.</li>
      <li class="muted">Une attention particulière doit être portée aux clés de la maison et à la télécommande du portail : en cas de perte ou de détérioration, les frais de remplacement de la serrure de la porte d'entrée et/ou de la télécommande seront à la charge de l'hôte.</li>
    `,
    ruleNidoPraticheHtml: `
      <li>Le linge de bain propre se trouve dans les tiroirs de la chambre.</li>
      <li>Les lumières de l'allée, de la cour et du jardin s'allument et s'éteignent automatiquement ; celles du gazebo et de la zone barbecue se commandent par interrupteur.</li>
      <li>En cas de coupure de courant, débloquez manuellement le portail avec la clé prévue à cet effet.</li>
      <li>Le soir, repliez les chaises longues (pour éviter que les chats n'y montent) ; en cas de pluie, rangez-les sous le gazebo.</li>
    `,
    ruleNidoTvHtml: `
      <li><strong>Chaînes satellite</strong> — Allumez la télévision, appuyez sur "LIST" sur la télécommande, puis sur la touche rouge. Sur la télévision, sélectionnez "Satellite" avec la flèche ▼, appuyez sur "OK" sur la télécommande, puis "EXIT".</li>
      <li><strong>Chaînes numériques italiennes</strong> — Allumez la télévision, appuyez sur "LIST" sur la télécommande, puis sur la touche rouge. Sur la télévision, sélectionnez "Antenna" avec la flèche ▲, appuyez sur "OK" sur la télécommande, puis "EXIT".</li>
    `,

    faqScreenTitle: "FAQ",
    faqQ1: "Fournissez-vous les draps et les serviettes ?",
    faqA1: "Oui, nous fournissons du linge propre et un jeu de serviettes pour chaque hôte.",
    faqQ2: "La cuisine est-elle équipée ?",
    faqA2: "Bien sûr. Vous y trouverez casseroles, poêles, vaisselle et couverts.",

    guidaScreenTitle: "Guide des environs",
    guidaSub: "De la Valle d'Itria à la mer : les lieux que nous recommandons à nos hôtes.",
    duepassiScreenTitle: "À deux pas",
    duepassiSub: "Boulangerie, commerces, restaurant et centre commercial à deux pas du trullo.",

    contattiScreenTitle: "Où Nous Sommes",
    addressLabel: "Adresse",
    btnOpenMap: "Ouvrir la carte",
    carNorthLabel: "En voiture (depuis le Nord)",
    carSouthLabel: "En voiture (depuis le Sud)",
    dirCarNorthText: "Sortir au péage Bari Nord sur la S.S.16 dir. Brindisi. Après ~60 km, prendre la sortie 'Fasano-Taranto-Valle D'Itria'. Continuer dir. Locorotondo.",
    dirCarSouthText: "Depuis la SS Jonica106 Taranto-Bari, sortir à Martina Franca. Continuer sur la S.S.172 dir. Locorotondo.",

    itemLocorotondoTitle: "Locorotondo",
    itemLocorotondoDesc: "L'un des plus beaux villages d'Italie. Maisons blanches « cummerse », balcons fleuris et dégustations de vin blanc DOC.",
    itemLocorotondoDist: "à 4 km",
    itemOstuniTitle: "Ostuni",
    itemOstuniDesc: "La célèbre Ville Blanche, perchée au-dessus d'oliveraies centenaires.",
    itemOstuniDist: "à 25 km",
    itemSavelletriTitle: "Savelletri",
    itemSavelletriDesc: "Né comme village de pêcheurs, célèbre pour sa proximité avec les fouilles d'Egnazia et ses masseries luxueuses.",
    itemSavelletriDist: "à 13 km",
    itemTorreCanneTitle: "Torre Canne",
    itemTorreCanneDesc: "Plages dorées et criques rocheuses aux eaux cristallines de l'Adriatique, également réputée pour son centre thermal.",
    itemTorreCanneDist: "à 17 km",
    itemTorreGuacetoTitle: "Torre Guaceto",
    itemTorreGuacetoDesc: "Réserve naturelle protégée avec 8 km de côte préservée, dunes atteignant 10 mètres de haut, une ancienne tour sarrasine, et une mer limpide riche en herbiers de posidonies.",
    itemTorreGuacetoDist: "à 35 km",
    itemCastellanaTitle: "Grottes de Castellana",
    itemCastellanaDesc: "L'un des complexes spéléologiques les plus spectaculaires d'Italie, visites guidées parmi stalactites et stalagmites.",
    itemCastellanaDist: "à 20 km",
    itemAlberobelloTitle: "Alberobello",
    itemAlberobelloDesc: "La capitale des Trulli, site du patrimoine mondial de l'UNESCO.",
    itemAlberobelloDist: "à 15 km",

    itemPanificioTitle: "Boulangerie",
    itemPanificioDesc: "Boulangerie et café pour le petit-déjeuner, littéralement au pied de la maison.",
    itemPanificioDist: "à 100 m",
    itemServiziTitle: "Tous les Commerces",
    itemServiziDesc: "Supérette, bureau de tabac, bar, pizzeria, boucherie avec plats cuisinés et primeur.",
    itemServiziDist: "à 600 m",
    itemRistoranteTitle: "Restaurant",
    itemRistoranteDesc: "La Neviera, cuisine typique des Pouilles dans un cadre pittoresque.",
    itemRistoranteDist: "à 1 km",
    itemChiesettaTitle: "Petite Église",
    itemChiesettaDesc: "La Chiesa di Laureto, un petit joyau de dévotion locale.",
    itemChiesettaDist: "à 1 km",
    itemCentroCommTitle: "Centre Commercial",
    itemCentroCommDesc: "Quintocolore, pour tous vos besoins de shopping.",
    itemCentroCommDist: "à 3 km",

    privacyModalTitle: "Notice sur la protection des données — Art. 13 RGPD",
    privacyTitolareH: "Responsable du traitement",
    privacyDatiH: "Données collectées",
    privacyDatiP: "Prénom, nom, date et lieu de naissance, sexe, nationalité, type et numéro de la pièce d'identité, autorité de délivrance, photo du document (recto/verso), dates d'arrivée et de départ, nom de la réservation.",
    privacyFinalitaH: "Finalités et base juridique",
    privacyFinalita1: "<strong>Obligations de sécurité publique</strong> : transmission des données d'identification des hôtes à la Questure via le portail Alloggiati Web, conformément à l'art. 109 TULPS et au décret ministériel du 7 janvier 2013 — base juridique : obligation légale (art. 6.1.c RGPD).",
    privacyFinalita2: "<strong>Gestion du séjour</strong> : organisation du check-in et des services demandés — base juridique : exécution de mesures précontractuelles/contractuelles demandées par l'hôte (art. 6.1.b RGPD).",
    privacyConferimentoH: "Caractère de la fourniture des données",
    privacyConferimentoP: "La fourniture des données est obligatoire pour se conformer à la législation sur la sécurité publique et nécessaire à la fourniture du service : sans ces données, il n'est pas possible de terminer le check-in ni d'héberger légalement la personne dans l'établissement.",
    privacyModalitaH: "Modalités de traitement et destinataires",
    privacyModalitaP: "Les données saisies dans ce formulaire sont transmises via une connexion chiffrée (HTTPS) au Responsable du traitement via le service technique d'envoi d'e-mails FormSubmit (géré par Devro LABS), qui agit en tant que sous-traitant uniquement pour l'envoi du formulaire par e-mail. FormSubmit ne publie ni la localisation de ses serveurs ni une liste de sous-traitants ultérieurs dans sa politique de confidentialité publique. Les données sont communiquées à la Questure/Police uniquement pour l'exécution de l'obligation légale décrite ci-dessus. Elles ne sont pas cédées à des tiers à des fins commerciales ou marketing.",
    privacyConservazioneH: "Conservation",
    privacyConservazioneP: "Les données et les photos du document sont conservées par le Responsable uniquement pendant le temps strictement nécessaire à leur transmission aux autorités compétentes et à la gestion du séjour, puis supprimées immédiatement après. L'autorité italienne de protection des données (Garante) a précisé que la réglementation de sécurité publique impose la transmission des données d'identification, mais n'autorise pas la conservation prolongée de copies ou d'images de la pièce d'identité.",
    privacyDirittiH: "Droits de la personne concernée",
    privacyDirittiP: "Vous pouvez à tout moment demander l'accès, la rectification, l'effacement ou la limitation du traitement de vos données, vous opposer au traitement et demander la portabilité des données en écrivant à {email}. Vous pouvez également introduire une réclamation auprès de l'autorité italienne de protection des données (www.gpdp.it).",
  },

};
