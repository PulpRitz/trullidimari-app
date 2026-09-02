/* ==========================================================================
   Trulli di Marì — Guest App — Logica applicativa
   Vanilla JS, nessuna dipendenza a runtime oltre vendor/jsQR.js (locale).
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------------
     0. Navigazione a schermate (SPA semplice, nessun router esterno)
     ------------------------------------------------------------------------ */
  // Righe elenco in Home — unico punto di navigazione dell'app (niente più
  // tab bar in basso: causava bug di posizionamento non risolvibili in modo
  // affidabile su Chrome Android sulle pagine lunghe, vedi cronologia commit).
  const HOME_ROWS = [
    { id: 'checkin', labelKey: 'navCheckinTitle', descKey: 'navCheckinDesc', icon: iconKey },
    { id: 'regole', labelKey: 'navRegoleTitle', descKey: 'navRegoleDesc', icon: iconClipboard },
    { id: 'wifi', labelKey: 'navWifiTitle', descKey: 'navWifiDesc', icon: iconWifi },
    { id: 'faq', labelKey: 'navFaqTitle', descKey: 'navFaqDesc', icon: iconQuestion },
    { id: 'guida', labelKey: 'navGuidaTitle', descKey: 'navGuidaDesc', icon: iconMap },
    { id: 'duepassi', labelKey: 'navDuePassiTitle', descKey: 'navDuePassiDesc', icon: iconBag },
    { id: 'contatti', labelKey: 'navDoveSiamoTitle', descKey: 'navDoveSiamoDesc', icon: iconPin },
  ];

  /* ------------------------------------------------------------------------
     0b. i18n — lingua corrente, helper di traduzione, applicazione ai nodi
         statici marcati data-i18n (stesso pattern di websitesample2/script.js)
     ------------------------------------------------------------------------ */
  const FLAGS = { it: '🇮🇹', en: '🇬🇧', de: '🇩🇪', fr: '🇫🇷' };
  let currentLang = localStorage.getItem('trulli_app_lang') || 'it';
  if (!TRANSLATIONS[currentLang]) currentLang = 'it';

  function t(key) {
    return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) || TRANSLATIONS.it[key] || key;
  }

  function applyStaticTranslations() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      const value = t(key);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = value;
      } else {
        el.innerHTML = value;
      }
    });
    document.documentElement.lang = currentLang;
    document.querySelectorAll('.lang-select[disabled]').forEach((sel) => {
      sel.innerHTML = `<option>${FLAGS[currentLang]}</option>`;
    });
  }

  // Fino al 2026-09-02 nascosta sul Check-in per evitare distrazioni
  // all'ospite; riattivata ora che il bug di overflow orizzontale del
  // modal privacy su Android (causa reale: input.doc-input-final
  // .sr-only-file, vedi storico commit) è risolto.
  const TAB_BAR_HIDDEN_SCREENS = [];

  function updateTabBarActive(screenId) {
    const bar = document.getElementById('tabBar');
    bar.style.display = TAB_BAR_HIDDEN_SCREENS.includes(screenId) ? 'none' : 'flex';
    document.querySelectorAll('#tabBar [data-nav]').forEach((b) => {
      b.classList.toggle('active', b.dataset.nav === screenId);
    });
  }

  function goTo(screenId) {
    document.querySelectorAll('.screen').forEach((s) => s.classList.remove('active'));
    const target = document.getElementById('screen-' + screenId);
    if (target) target.classList.add('active');
    window.scrollTo(0, 0);
    if (screenId !== 'wifi') stopWifiScan();
    updateTabBarActive(screenId);
  }

  document.addEventListener('click', (e) => {
    const navEl = e.target.closest('[data-nav]');
    if (navEl) goTo(navEl.dataset.nav);
  });

  // Tab bar flottante: sparisce appena inizia uno scroll (su o giù), riappare
  // quando lo scroll si ferma (nessun evento "scroll" per ~500ms).
  let tabBarIdleTimer = null;
  window.addEventListener('scroll', () => {
    const bar = document.getElementById('tabBar');
    bar.classList.add('hidden');
    clearTimeout(tabBarIdleTimer);
    tabBarIdleTimer = setTimeout(() => bar.classList.remove('hidden'), 500);
  }, { passive: true });

  /* ------------------------------------------------------------------------
     2. Home — righe elenco + codici + WhatsApp
     ------------------------------------------------------------------------ */
  function renderHomeList() {
    const list = document.getElementById('homeList');
    list.innerHTML = HOME_ROWS.map((item) => `
      <button class="list-row" data-nav="${item.id}">
        <span class="row-icon">${item.icon()}</span>
        <span class="row-text">
          <span class="row-title">${t(item.labelKey)}</span>
          <span class="row-desc">${t(item.descKey)}</span>
        </span>
        <span class="row-chevron">›</span>
      </button>
    `).join('');
  }

  function renderHomeCodes() {
    const el = document.getElementById('homeCodes');
    const parts = [`CIN: <strong>${APP_DATA.cin}</strong>`];
    if (APP_DATA.citra) parts.push(`CITRA: <strong>${APP_DATA.citra}</strong>`);
    el.innerHTML = parts.join(' &nbsp;•&nbsp; ');
  }

  function renderWhatsapp() {
    const href = `https://wa.me/${APP_DATA.whatsappNumber}`;
    document.getElementById('whatsappBar').href = href;
    const el2 = document.getElementById('whatsappBarContatti');
    if (el2) el2.href = href;
  }

  /* ------------------------------------------------------------------------
     3. Contatti / Come raggiungerci
     ------------------------------------------------------------------------ */
  function renderContatti() {
    document.getElementById('indirizzoText').textContent = APP_DATA.address;
    document.getElementById('dirCarNorth').textContent = t('dirCarNorthText');
    document.getElementById('dirCarSouth').textContent = t('dirCarSouthText');
    const { lat, lng } = APP_DATA.gps;
    document.getElementById('btnOpenMaps').href = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  }

  /* ------------------------------------------------------------------------
     4. Regole della Casa — contenuto reale (Incanto/Nido) è statico via
        data-i18n direttamente in index.html; qui resta solo la tassa di
        soggiorno, mostrata nel selettore prima della scelta del trullo.
     ------------------------------------------------------------------------ */
  function renderRegole() {
    const taxBox = document.getElementById('taxBox');
    if (APP_DATA.touristTax.enabled) {
      taxBox.style.display = 'block';
      taxBox.innerHTML = `
        <strong>Tassa di soggiorno:</strong> ${APP_DATA.touristTax.amountPerNight || ''}<br>
        ${APP_DATA.touristTax.ordinanceLink ? `<a href="${APP_DATA.touristTax.ordinanceLink}" target="_blank" rel="noopener">Leggi l'ordinanza ufficiale</a><br>` : ''}
        ${APP_DATA.touristTax.satispayLink ? `<a class="btn-primary" style="margin-top:12px;" href="${APP_DATA.touristTax.satispayLink}" target="_blank" rel="noopener">Paga con Satispay</a>` : ''}
        ${APP_DATA.touristTax.paypalLink ? `<a class="btn-primary" style="margin-top:10px; background: var(--color-sea);" href="${APP_DATA.touristTax.paypalLink}" target="_blank" rel="noopener">Paga con PayPal</a>` : ''}
      `;
    } else {
      taxBox.style.display = 'none';
    }
  }

  /* ------------------------------------------------------------------------
     5. FAQ (accordion)
     ------------------------------------------------------------------------ */
  function renderFaq() {
    const list = document.getElementById('faqList');
    list.innerHTML = APP_DATA.faq.map((f, i) => `
      <div class="faq-item" id="faq-${i}">
        <button class="faq-question" data-faq="${i}">
          <span>${t(f.qKey)}</span>
          <span class="chevron">▾</span>
        </button>
        <div class="faq-answer"><div class="faq-answer-inner">${t(f.aKey)}</div></div>
      </div>
    `).join('');

    list.querySelectorAll('[data-faq]').forEach((btn) => {
      btn.addEventListener('click', () => {
        btn.closest('.faq-item').classList.toggle('open');
      });
    });
  }

  /* ------------------------------------------------------------------------
     6. Liste luogo — "Tutto a Due Passi" (home) e "Guida" (dintorni) sono
        composte unendo più array di data.js, il resto (trasporti) è diretto.
     ------------------------------------------------------------------------ */
  function locationsFor(key) {
    if (key === 'dueAPasi') return [...(APP_DATA.ristoranti || []), ...(APP_DATA.supermercati || [])];
    if (key === 'guida') return [...(APP_DATA.daVisitare || []), ...(APP_DATA.escursioni || [])];
    return APP_DATA[key] || [];
  }

  function itemKeyBase(id) {
    // 'torreCanne' -> 'TorreCanne' (prima lettera maiuscola, per comporre le chiavi item<Id>Title/Desc/Dist)
    return id.charAt(0).toUpperCase() + id.slice(1);
  }

  function renderLocationLists() {
    document.querySelectorAll('.location-list').forEach((container) => {
      const items = locationsFor(container.dataset.source);

      if (!items.length) {
        container.innerHTML = `<div class="empty-state">${t('emptySection')}</div>`;
        return;
      }

      container.innerHTML = items.map((item) => {
        const base = 'item' + itemKeyBase(item.id);
        const title = t(base + 'Title');
        const desc = t(base + 'Desc');
        const dist = t(base + 'Dist');
        return `
        <div class="location-card">
          <div class="location-photo">
            <img src="${item.img}" alt="${title}" loading="lazy">
            ${dist ? `<span class="location-dist">${dist}</span>` : ''}
          </div>
          <div class="location-body">
            <h3>${title}</h3>
            <p>${desc}</p>
            <a class="btn-map" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.mapQuery)}" target="_blank" rel="noopener">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>
              ${t('btnOpenMap')}
            </a>
          </div>
        </div>
      `;
      }).join('');
    });
  }

  /* ------------------------------------------------------------------------
     7. WiFi — scan QR fisico (getUserMedia + jsQR), formato standard
        WIFI:T:WPA;S:<ssid>;P:<password>;;
     ------------------------------------------------------------------------ */
  let wifiStream = null;
  let wifiScanRAF = null;

  function renderWifi() {
    document.getElementById('wifiInstructions').textContent = APP_DATA.wifi.instructions;
  }

  function parseWifiQr(text) {
    const clean = (s) => (s || '').replace(/\\([;,:])/g, '$1');
    const ssidMatch = text.match(/S:((?:\\.|[^;])*);/);
    const passMatch = text.match(/P:((?:\\.|[^;])*);/);
    if (!ssidMatch) return null;
    return { ssid: clean(ssidMatch[1]), password: passMatch ? clean(passMatch[1]) : '' };
  }

  async function startWifiScan() {
    document.getElementById('wifiIdleCard').style.display = 'none';
    document.getElementById('wifiResultCard').style.display = 'none';
    document.getElementById('wifiScanCard').style.display = 'block';

    try {
      wifiStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
    } catch (err) {
      alert('Impossibile accedere alla fotocamera. Controlla i permessi del browser.');
      stopWifiScan();
      return;
    }

    const video = document.getElementById('wifiVideo');
    video.srcObject = wifiStream;
    await video.play();

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    function tick() {
      if (!wifiStream) return;
      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = window.jsQR(imageData.data, imageData.width, imageData.height);
        if (code && code.data) {
          const parsed = parseWifiQr(code.data);
          if (parsed) {
            onWifiScanned(parsed);
            return;
          }
        }
      }
      wifiScanRAF = requestAnimationFrame(tick);
    }
    wifiScanRAF = requestAnimationFrame(tick);
  }

  function stopWifiScan() {
    if (wifiScanRAF) cancelAnimationFrame(wifiScanRAF);
    wifiScanRAF = null;
    if (wifiStream) {
      wifiStream.getTracks().forEach((t) => t.stop());
      wifiStream = null;
    }
    const scanCard = document.getElementById('wifiScanCard');
    if (scanCard) scanCard.style.display = 'none';
  }

  function onWifiScanned({ ssid, password }) {
    stopWifiScan();
    document.getElementById('wifiSsidOut').textContent = ssid || '—';
    document.getElementById('wifiPassOut').textContent = password || '—';
    document.getElementById('wifiResultCard').style.display = 'block';
    if (password && navigator.clipboard) {
      navigator.clipboard.writeText(password).catch(() => {});
    }
  }

  document.getElementById('btnStartWifiScan').addEventListener('click', startWifiScan);
  document.getElementById('btnCancelWifiScan').addEventListener('click', () => {
    stopWifiScan();
    document.getElementById('wifiIdleCard').style.display = 'block';
  });
  document.getElementById('btnRescanWifi').addEventListener('click', () => {
    document.getElementById('wifiResultCard').style.display = 'none';
    startWifiScan();
  });

  /* ------------------------------------------------------------------------
     8. Check-in — dati prenotazione + form dinamico multi-ospite + upload
        foto documento (fotocamera O galleria: nessun vincolo "capture", è
        il telefono a proporre la scelta)
     ------------------------------------------------------------------------ */
  let guestCount = 0;

  function addGuestBlock(isCapofamiglia) {
    guestCount += 1;
    const n = guestCount;
    const wrap = document.createElement('div');
    wrap.className = 'guest-block';
    wrap.dataset.guest = n;
    wrap.innerHTML = `
      <div class="guest-block-header">
        <h3>${t('guestLabel')} ${n}</h3>
        ${isCapofamiglia ? '' : `<button type="button" class="btn-remove-guest" data-remove="${n}">${t('btnRemoveGuest')}</button>`}
      </div>

      <div class="field-row">
        <div class="field"><label>${t('labelNome')}</label><input type="text" name="nome_${n}" required></div>
        <div class="field"><label>${t('labelCognome')}</label><input type="text" name="cognome_${n}" required></div>
      </div>
      <div class="field-row">
        <div class="field"><label>${t('labelDataNascita')}</label><input type="date" name="data_nascita_${n}" required></div>
        <div class="field"><label>${t('labelLuogoNascita')}</label><input type="text" name="luogo_nascita_${n}" required></div>
      </div>
      <div class="field-row">
        <div class="field">
          <label>${t('labelSesso')}</label>
          <select name="sesso_${n}" required>
            <option value="">—</option>
            <option value="M">${t('optMaschio')}</option>
            <option value="F">${t('optFemmina')}</option>
          </select>
        </div>
        <div class="field"><label>${t('labelCittadinanza')}</label><input type="text" name="cittadinanza_${n}" required></div>
      </div>
      <div class="field">
        <label>${t('labelTipoDoc')}</label>
        <select name="tipo_doc_${n}" required>
          <option value="">—</option>
          <option value="Carta d'Identità">${t('optDocCarta')}</option>
          <option value="Passaporto">${t('optDocPassaporto')}</option>
          <option value="Patente">${t('optDocPatente')}</option>
          <option value="Permesso di Soggiorno">${t('optDocPermesso')}</option>
        </select>
      </div>
      <div class="field-row">
        <div class="field"><label>${t('labelNumeroDoc')}</label><input type="text" name="numero_doc_${n}" required></div>
        <div class="field"><label>${t('labelEmessoDa')}</label><input type="text" name="emesso_da_${n}" required></div>
      </div>

      <div class="field">
        <label>${t('labelFotoDoc')}</label>
        <div class="doc-photo-row">
          ${docPhotoSlotHtml('fronte', n, t('sideFronte'))}
          ${docPhotoSlotHtml('retro', n, t('sideRetro'))}
        </div>
      </div>
    `;
    document.getElementById('guestsContainer').appendChild(wrap);

    wrap.querySelectorAll('.doc-photo-slot').forEach(wireDocPhotoSlot);
    return wrap;
  }

  function docPhotoSlotHtml(side, n, label) {
    return `
      <div class="doc-photo-slot" data-slot="${side}_${n}">
        <div class="doc-photo-slot-head">
          <span>${label}</span>
          <span class="doc-photo-status" data-status>${t('statusNoPhoto')}</span>
        </div>
        <img class="doc-photo-thumb" alt="${label}">
        <div class="doc-photo-actions">
          <button type="button" class="doc-action-btn" data-action="camera">${t('btnScattaFoto')}</button>
          <button type="button" class="doc-action-btn" data-action="gallery">${t('btnCaricaDispositivo')}</button>
        </div>
        <input type="file" accept="image/*" capture="environment" class="doc-input-camera" hidden>
        <input type="file" accept="image/*" class="doc-input-gallery" hidden>
        <input type="file" accept="image/*" name="doc_${side}_${n}" class="doc-input-final sr-only-file" required>
      </div>
    `;
  }

  function wireDocPhotoSlot(slot) {
    const camInput = slot.querySelector('.doc-input-camera');
    const galInput = slot.querySelector('.doc-input-gallery');
    const finalInput = slot.querySelector('.doc-input-final');
    const thumb = slot.querySelector('.doc-photo-thumb');
    const status = slot.querySelector('[data-status]');

    slot.querySelector('[data-action="camera"]').addEventListener('click', () => camInput.click());
    slot.querySelector('[data-action="gallery"]').addEventListener('click', () => galInput.click());

    function handleFile(file) {
      if (!file) return;
      const dt = new DataTransfer();
      dt.items.add(file);
      finalInput.files = dt.files;
      slot.classList.add('has-photo');
      status.textContent = t('statusPhotoOk');
      const reader = new FileReader();
      reader.onload = (e) => {
        thumb.src = e.target.result;
        thumb.classList.add('show');
      };
      reader.readAsDataURL(file);
    }

    camInput.addEventListener('change', () => handleFile(camInput.files[0]));
    galInput.addEventListener('change', () => handleFile(galInput.files[0]));
  }

  document.getElementById('btnAddGuest').addEventListener('click', () => addGuestBlock(false));

  document.getElementById('guestsContainer').addEventListener('click', (e) => {
    const removeBtn = e.target.closest('[data-remove]');
    if (removeBtn) removeBtn.closest('.guest-block').remove();
  });

  function resetCheckinForm() {
    document.getElementById('guestsContainer').innerHTML = '';
    guestCount = 0;
    addGuestBlock(true);
    document.getElementById('checkinForm').reset();
    // reset() sopra svuota anche le date del blocco "Dati Prenotazione" già
    // presente nel form — nessun campo extra da ripulire a mano.
  }

  // Il check-out non può precedere/coincidere col check-in — oltre al
  // controllo su invio, blocchiamo anche la scelta nel date-picker stesso.
  const checkinDateInput = document.querySelector('[name="data_checkin"]');
  const checkoutDateInput = document.querySelector('[name="data_checkout"]');
  checkinDateInput.addEventListener('change', () => {
    if (checkinDateInput.value) {
      const next = new Date(checkinDateInput.value);
      next.setDate(next.getDate() + 1);
      checkoutDateInput.min = next.toISOString().slice(0, 10);
    }
  });

  function validateCheckinExtras(form) {
    const ci = form.querySelector('[name="data_checkin"]');
    const co = form.querySelector('[name="data_checkout"]');
    if (ci.value && co.value && new Date(co.value) <= new Date(ci.value)) {
      return { valid: false, message: t('errorCheckoutDate'), focus: co };
    }

    const birthInputs = Array.from(form.querySelectorAll('input[name^="data_nascita_"]'));
    const today = new Date();
    const hasAdult = birthInputs.some((input) => {
      if (!input.value) return false;
      const birth = new Date(input.value);
      let age = today.getFullYear() - birth.getFullYear();
      const notYetBirthday = (today.getMonth() < birth.getMonth()) ||
        (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate());
      if (notYetBirthday) age -= 1;
      return age >= 18;
    });
    if (!hasAdult) {
      return { valid: false, message: t('errorAdult'), focus: birthInputs[0] };
    }

    return { valid: true };
  }

  // L'endpoint /ajax/ di FormSubmit NON supporta gli allegati file: una
  // submit via fetch "riesce" (200 OK) ma le foto documento non arrivano
  // nella mail. Per garantire che gli allegati arrivino sempre, il check-in
  // usa un invio reale del form (navigazione multipart/form-data), con
  // redirect automatico di FormSubmit (_next) di ritorno su questa
  // schermata di successo.
  const checkinFormEl = document.getElementById('checkinForm');
  checkinFormEl.action = APP_DATA.formsubmitEndpoint;
  document.getElementById('checkinNextUrl').value =
    location.origin + location.pathname + '?checkin=success';

  checkinFormEl.addEventListener('submit', (e) => {
    const form = e.target;
    const errorEl = document.getElementById('checkinError');
    errorEl.classList.remove('show');

    if (!form.checkValidity()) {
      e.preventDefault();
      form.reportValidity();
      return;
    }

    const extra = validateCheckinExtras(form);
    if (!extra.valid) {
      e.preventDefault();
      errorEl.textContent = extra.message;
      errorEl.classList.add('show');
      if (extra.focus) extra.focus.focus();
      return;
    }

    // Validazioni ok: lasciamo che il form navighi davvero verso FormSubmit
    // (nessun preventDefault) — è l'unico modo che garantisce l'invio degli
    // allegati. Mostriamo solo lo stato "invio in corso" mentre la pagina
    // sta per lasciare l'app.
    const submitBtn = document.getElementById('btnSubmitCheckin');
    const label = document.getElementById('btnSubmitCheckinLabel');
    const spinner = document.getElementById('checkinSpinner');
    submitBtn.disabled = true;
    spinner.classList.add('show');
    label.textContent = t('btnSubmitSending');
  });


  /* ------------------------------------------------------------------------
     8b. Informativa Privacy (Art. 13 GDPR) — popup in-app, testo completo
         caricato nell'app, nessun link esterno
     ------------------------------------------------------------------------ */
  function renderPrivacyModal() {
    const d = APP_DATA;
    document.getElementById('privacyModalBody').innerHTML = `
      <h3>${t('privacyTitolareH')}</h3>
      <p>${d.ownerNames} — Trulli di Marì, ${d.address}. Email: ${d.contactEmail} · Telefono: ${d.phoneDisplay}.</p>

      <h3>${t('privacyDatiH')}</h3>
      <p>${t('privacyDatiP')}</p>

      <h3>${t('privacyFinalitaH')}</h3>
      <ul>
        <li>${t('privacyFinalita1')}</li>
        <li>${t('privacyFinalita2')}</li>
      </ul>

      <h3>${t('privacyConferimentoH')}</h3>
      <p>${t('privacyConferimentoP')}</p>

      <h3>${t('privacyModalitaH')}</h3>
      <p>${t('privacyModalitaP')}</p>

      <h3>${t('privacyConservazioneH')}</h3>
      <p>${t('privacyConservazioneP')}</p>

      <h3>${t('privacyDirittiH')}</h3>
      <p>${t('privacyDirittiP').replace('{email}', d.contactEmail)}</p>
    `;
  }

  function openPrivacyModal() {
    document.getElementById('privacyModal').classList.add('open');
    document.getElementById('privacyModal').setAttribute('aria-hidden', 'false');
  }
  function closePrivacyModal() {
    document.getElementById('privacyModal').classList.remove('open');
    document.getElementById('privacyModal').setAttribute('aria-hidden', 'true');
  }

  document.getElementById('btnOpenPrivacy').addEventListener('click', openPrivacyModal);
  document.getElementById('btnClosePrivacy').addEventListener('click', closePrivacyModal);
  document.getElementById('privacyModal').addEventListener('click', (e) => {
    if (e.target.id === 'privacyModal') closePrivacyModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closePrivacyModal(); closeIosInstallModal(); }
  });

  /* ------------------------------------------------------------------------
     8c. Installazione app — Android: prompt nativo 1-tap (beforeinstallprompt).
         iPhone: nessuna API lo permette (blocco deliberato di Apple, non
         aggirabile da nessun sito), mostriamo una guida passo-passo animata.
     ------------------------------------------------------------------------ */
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  const installDismissedKey = 'trulli_install_dismissed';
  let deferredInstallPrompt = null;

  function showInstallBanner() {
    if (isStandalone) return;
    if (localStorage.getItem(installDismissedKey)) return;
    document.getElementById('installBanner').style.display = 'flex';
  }
  function hideInstallBanner() {
    document.getElementById('installBanner').style.display = 'none';
  }

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    showInstallBanner();
  });
  window.addEventListener('appinstalled', () => {
    deferredInstallPrompt = null;
    hideInstallBanner();
  });

  document.getElementById('installMainBtn').addEventListener('click', async () => {
    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice;
      deferredInstallPrompt = null;
      hideInstallBanner();
    } else if (isIOS) {
      openIosInstallModal();
    }
  });

  document.getElementById('installDismiss').addEventListener('click', (e) => {
    e.stopPropagation();
    localStorage.setItem(installDismissedKey, '1');
    hideInstallBanner();
  });

  function openIosInstallModal() {
    document.getElementById('iosInstallModal').classList.add('open');
    document.getElementById('iosInstallModal').setAttribute('aria-hidden', 'false');
  }
  function closeIosInstallModal() {
    document.getElementById('iosInstallModal').classList.remove('open');
    document.getElementById('iosInstallModal').setAttribute('aria-hidden', 'true');
  }
  document.getElementById('btnCloseIosInstall').addEventListener('click', closeIosInstallModal);
  document.getElementById('btnIosGotIt').addEventListener('click', closeIosInstallModal);
  document.getElementById('iosInstallModal').addEventListener('click', (e) => {
    if (e.target.id === 'iosInstallModal') closeIosInstallModal();
  });

  // Su iPhone non esiste beforeinstallprompt: mostriamo comunque il banner
  // (porta alla guida) se non già installata e non già chiusa dall'utente.
  if (isIOS) showInstallBanner();

  /* ------------------------------------------------------------------------
     9. Icone (inline SVG, nessuna icon-font esterna)
     ------------------------------------------------------------------------ */
  function svg(path) { return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`; }
  function iconKey() { return svg('<circle cx="8" cy="15" r="3"/><path d="M10.5 12.5 20 3M17 6l2 2M14 9l2 2"/>'); }
  function iconWifi() { return svg('<path d="M2 8.5a16 16 0 0 1 20 0M5 12a11 11 0 0 1 14 0M8.5 15.5a6 6 0 0 1 7 0"/><circle cx="12" cy="19" r="1" fill="currentColor" stroke="none"/>'); }
  function iconClipboard() { return svg('<rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1M9 11h6M9 15h6"/>'); }
  function iconQuestion() { return svg('<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.4 2.3c-.9.4-1.4 1-1.4 2"/><circle cx="12" cy="17" r=".1" fill="currentColor"/>'); }
  function iconMap() { return svg('<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/>'); }
  function iconBag() { return svg('<path d="M6 8h12l-1 12H7L6 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>'); }
  function iconPin() { return svg('<path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.3"/>'); }
  function iconHome() { return svg('<path d="M4 11.5 12 4l8 7.5"/><path d="M6.5 10v9h4.5v-5h2v5h4.5v-9"/>'); }

  function renderTabBarIcons() {
    document.getElementById('tabIconHome').innerHTML = iconHome();
    document.getElementById('tabIconRegole').innerHTML = iconClipboard();
    document.getElementById('tabIconGuida').innerHTML = iconMap();
    document.getElementById('tabIconVicino').innerHTML = iconBag();
    document.getElementById('tabIconDoveSiamo').innerHTML = iconPin();
  }

  /* ------------------------------------------------------------------------
     10. Init
     ------------------------------------------------------------------------ */
  function renderEverything() {
    applyStaticTranslations();
    renderHomeList();
    renderHomeCodes();
    renderWhatsapp();
    renderContatti();
    renderRegole();
    renderFaq();
    renderLocationLists();
    renderWifi();
    renderPrivacyModal();
    renderTabBarIcons();
  }

  // Cambio lingua: disponibile solo dal selettore in Home (le altre schermate
  // ne mostrano una versione disabilitata) — nessun rischio di perdere dati
  // già inseriti in un check-in in corso.
  document.getElementById('langSelect').addEventListener('change', (e) => {
    currentLang = e.target.value;
    localStorage.setItem('trulli_app_lang', currentLang);
    renderEverything();
    resetCheckinForm();
  });

  function init() {
    document.getElementById('langSelect').value = currentLang;
    renderEverything();
    resetCheckinForm();
    updateTabBarActive('home'); // la Home parte già attiva via markup, goTo() non viene chiamato al load

    // Al ritorno da FormSubmit (redirect _next dopo un invio riuscito con
    // allegati) mostriamo la schermata di successo e ripuliamo l'URL.
    if (new URLSearchParams(location.search).get('checkin') === 'success') {
      history.replaceState(null, '', location.pathname);
      goTo('checkin-success');
    }

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('service-worker.js').catch(() => {});
      // Quando un nuovo service worker prende il controllo (dopo un deploy),
      // ricarica la pagina già aperta in automatico — altrimenti su Android
      // una PWA lasciata aperta in background continua a girare col
      // JS/CSS vecchio finché non viene chiusa e riaperta a mano.
      let swRefreshed = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (swRefreshed) return;
        swRefreshed = true;
        window.location.reload();
      });
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();
