# Contenuti reali da fornire prima del lancio

App tecnicamente completa e funzionante — mancano solo dati reali che solo il proprietario può fornire. Tutti editabili in [`data.js`](data.js), nessun tocco a markup/logica necessario.

## Struttura app (Direzione B, confermata 2026-08-26)

- **Home**: hero foto sito + righe Check-in/WiFi/FAQ + sezione inline "Tutto a Due Passi" (`data.js → ristoranti` + `supermercati` uniti) + tab bar in basso.
- **Tab "Guida"**: dintorni (`data.js → daVisitare` + `escursioni` uniti).
- **Tab "Contatti"**: WhatsApp + indirizzo/mappa/indicazioni auto + lista Trasporti (`data.js → trasporti`).
- **Tab "Regole"**: invariata.

## Bloccanti (servono per andare live)

- **QR WiFi fisico**: nome rete + password reali → genero il QR (formato `WIFI:T:WPA;S:<ssid>;P:<password>;;`), tu lo stampi e lo appendi in casa. Ditemi SSID e password quando siete pronti.
- **Regole della casa**: confermare/integrare (animali ammessi? parcheggio? piscina/area giochi?) — bozza attuale in `data.js → houseRules` presa dal video di riferimento, non ancora verificata su misura Trulli di Marì.
- **Supermercato più vicino**: bozza attuale ha solo Quintocolore (galleria commerciale) — confermare se è il riferimento giusto o aggiungere altro.
- **Trasporti**: sezione vuota (fermata bus più vicina, taxi consigliato, noleggio auto/scooter) — nessun dato disponibile finora.
- **FAQ**: solo 4 domande bozza (lenzuola, cucina, mare, centro) — aggiungerne altre reali (animali, parcheggio, orari, ecc.).

## Non bloccanti (rimandabili)

- **Codice CITRA**: da aggiungere quando disponibile (`data.js → citra`, oggi `null` → badge nascosto).
- **Tassa di soggiorno**: sezione predisposta ma disattivata (`data.js → touristTax.enabled = false`). Quando ci sono importo + eventuali link Satispay/PayPal, valorizzare i campi e mettere `enabled: true`.
- **Escursioni**: solo 2 voci (Grotte di Castellana, Alberobello) — espandibile.

## Traduzione EN

Il selettore lingua in home è presente ma non ancora funzionante (mostra solo IT) — da implementare quando i testi sopra sono definitivi, stesso pattern del sito (oggetto `translations` in `script.js`).
