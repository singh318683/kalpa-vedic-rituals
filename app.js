/* Kalpa: Vedic Rituals — prototype app (no build step, hash routing). */
(function () {
  "use strict";
  const D = window.KALPA;
  const app = document.getElementById("app");

  // ---------- storage (safe) ----------
  const store = {
    get(k, d) { try { const v = localStorage.getItem("kalpa:" + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem("kalpa:" + k, JSON.stringify(v)); } catch (e) {} }
  };
  let lang = store.get("lang", "en");

  // ---------- UI strings ----------
  const S = {
    tabHome: { en: "Home", hi: "होम" }, tabRites: { en: "Rites", hi: "संस्कार" },
    tabLab: { en: "Geometry", hi: "ज्यामिति" }, tabLearn: { en: "Learn", hi: "सीखें" },
    tabSettings: { en: "Settings", hi: "सेटिंग" },
    heroTitle: { en: "The limb of procedure, step by step", hi: "विधि का अंग — कदम दर कदम" },
    heroBody: { en: "Kalpa is the Vedāṅga that teaches how rites are performed. Prepare, follow and understand each step of your family's rituals.", hi: "कल्प वह वेदांग है जो बताता है कि कर्म कैसे किए जाते हैं। अपने परिवार के संस्कारों के हर चरण की तैयारी करें, उसका पालन करें और उसे समझें।" },
    startDaily: { en: "Start today's sandhyā", hi: "आज की संध्या शुरू करें" },
    saṁskāras: { en: "Saṁskāras", hi: "संस्कार" },
    samskaraLede: { en: "The life-cycle rites of the Gṛhya Sūtras. Each guide includes a checklist and step-by-step mode.", hi: "गृह्य सूत्रों के जीवन-संस्कार। हर मार्गदर्शिका में सामग्री सूची और चरणबद्ध विधि है।" },
    daily: { en: "Daily practice", hi: "दैनिक उपासना" },
    explore: { en: "Explore", hi: "खोजें" },
    labCardTitle: { en: "Geometry Lab", hi: "ज्यामिति प्रयोगशाला" },
    labCardBody: { en: "Build an altar's right angle with rope and pegs, the way the Śulba Sūtras teach.", hi: "शुल्ब सूत्रों की तरह रस्सी और खूँटी से वेदी का समकोण बनाएँ।" },
    learnCardTitle: { en: "What is Kalpa?", hi: "कल्प क्या है?" },
    learnCardBody: { en: "The six Vedāṅgas and the four branches of Kalpa.", hi: "छह वेदांग और कल्प की चार शाखाएँ।" },
    open: { en: "Open", hi: "खोलें" },
    comingSoon: { en: "Coming soon", hi: "शीघ्र" },
    free: { en: "Guide ready", hi: "उपलब्ध" },
    when: { en: "When", hi: "कब" }, duration: { en: "Duration", hi: "अवधि" }, who: { en: "Who takes part", hi: "कौन भाग लेता है" },
    samagri: { en: "Samagri checklist", hi: "सामग्री सूची" },
    ready: { en: "ready", hi: "तैयार" },
    stepsOverview: { en: "Steps at a glance", hi: "चरण एक नज़र में" },
    beginGuided: { en: "Begin guided mode", hi: "चरणबद्ध विधि शुरू करें" },
    step: { en: "Step", hi: "चरण" }, of: { en: "of", hi: "/" },
    exit: { en: "Exit", hi: "बाहर" },
    whyStep: { en: "Why this step?", hi: "यह चरण क्यों?" },
    listen: { en: "▶ Listen", hi: "▶ सुनें" }, stop: { en: "■ Stop", hi: "■ रोकें" },
    timerLbl: { en: "Suggested time for this step", hi: "इस चरण का सुझाया समय" },
    startT: { en: "Start", hi: "शुरू" }, pauseT: { en: "Pause", hi: "रोकें" }, resetT: { en: "Reset", hi: "रीसेट" },
    back: { en: "← Back", hi: "← पीछे" }, next: { en: "Next →", hi: "आगे →" }, finish: { en: "Finish", hi: "समाप्त" },
    doneTitle: { en: "Rite complete", hi: "संस्कार संपन्न" },
    doneBody: { en: "May it bring blessings to your family.", hi: "यह आपके परिवार के लिए मंगलमय हो।" },
    backToRite: { en: "Back to overview", hi: "विवरण पर लौटें" }, home: { en: "Home", hi: "होम" },
    reviewNote: { en: "Prototype content: general household practice, not yet reviewed by a pandit. Customs vary by family, region and Vedic school — follow your family tradition and priest where they differ.", hi: "प्रोटोटाइप सामग्री: सामान्य पारिवारिक विधि, अभी पंडित द्वारा समीक्षित नहीं। रीति परिवार, क्षेत्र और वैदिक शाखा के अनुसार बदलती है — जहाँ अंतर हो, अपनी पारिवारिक परंपरा और पुरोहित का पालन करें।" },
    learnTitle: { en: "What is Kalpa?", hi: "कल्प क्या है?" },
    learnLede: { en: "The Vedāṅgas are the six 'limbs' of Vedic study. Kalpa is the limb of procedure: it sets out how rites are performed, in what order, with what materials and words.", hi: "वेदांग वैदिक अध्ययन के छह ‘अंग’ हैं। कल्प विधि का अंग है: यह बताता है कि कर्म कैसे, किस क्रम में, किन सामग्रियों और शब्दों से किए जाते हैं।" },
    sixLimbs: { en: "The six Vedāṅgas", hi: "छह वेदांग" },
    fourBranches: { en: "The four branches of Kalpa", hi: "कल्प की चार शाखाएँ" },
    inApp: { en: "In the app", hi: "ऐप में" },
    labTitle: { en: "Geometry Lab", hi: "ज्यामिति प्रयोगशाला" },
    labLede: { en: "Vedic altar builders laid out exact shapes with only a cord and pegs. The Baudhāyana Śulba Sūtra states that the diagonal of a rectangle produces both areas its two sides produce separately — the rule now called the Pythagorean theorem.", hi: "वैदिक वेदी-निर्माता केवल रस्सी और खूँटियों से सटीक आकार बनाते थे। बौधायन शुल्ब सूत्र कहता है कि आयत का कर्ण वह क्षेत्रफल बनाता है जो उसकी दोनों भुजाएँ अलग-अलग बनाती हैं — जिसे आज पाइथागोरस प्रमेय कहते हैं।" },
    sideA: { en: "Side a (cord length)", hi: "भुजा a (रस्सी की लंबाई)" },
    sideB: { en: "Side b (cord length)", hi: "भुजा b (रस्सी की लंबाई)" },
    triplesLbl: { en: "Try a whole-number triple:", hi: "पूर्ण संख्या त्रिक आज़माएँ:" },
    wholeTriple: { en: "Whole-number triple! A knotted cord can lay out this right angle exactly.", hi: "पूर्ण संख्या त्रिक! गाँठ वाली रस्सी से यह समकोण ठीक-ठीक बनाया जा सकता है।" },
    ropeTitle: { en: "The rope trick", hi: "रस्सी की युक्ति" },
    ropeBody: { en: "Tie 12 equally spaced knots in a cord. Peg it into a triangle with sides of 3, 4 and 5 spaces, and the corner between the 3 and 4 sides is a perfect right angle. This is how square altar corners could be laid out on open ground.", hi: "एक रस्सी में 12 बराबर दूरी पर गाँठें बाँधें। उसे 3, 4 और 5 खानों की भुजाओं वाले त्रिभुज में खूँटियों से गाड़ें — 3 और 4 वाली भुजाओं के बीच का कोण ठीक समकोण होगा। इसी तरह खुले मैदान में वेदी के समकोण बनाए जा सकते थे।" },
    nextPuzzles: { en: "Coming next: squaring the circle, and building the falcon altar (śyenaciti) brick by brick.", hi: "आगे: वृत्त को वर्ग में बदलना, और ईंट-दर-ईंट श्येन-चिति (बाज़ वेदी) बनाना।" },
    settingsTitle: { en: "Settings", hi: "सेटिंग" },
    language: { en: "Language", hi: "भाषा" },
    tradition: { en: "Your tradition", hi: "आपकी परंपरा" },
    traditionNote: { en: "Procedures differ by Vedic school. Tradition-specific variants arrive in a later version; the guides currently show general household practice.", hi: "विधियाँ वैदिक शाखा के अनुसार भिन्न होती हैं। शाखा-विशेष विधियाँ अगले संस्करण में आएँगी; अभी मार्गदर्शिकाएँ सामान्य पारिवारिक विधि दिखाती हैं।" },
    resetLists: { en: "Clear all checklists", hi: "सभी सूचियाँ साफ़ करें" },
    cleared: { en: "Checklists cleared", hi: "सूचियाँ साफ़ हो गईं" },
    about: { en: "About", hi: "परिचय" },
    aboutBody: { en: "Kalpa: Vedic Rituals is an early prototype. Content is for learning and preparation and will be reviewed by a qualified pandit before release.", hi: "कल्प: वैदिक संस्कार एक प्रारंभिक प्रोटोटाइप है। सामग्री सीखने और तैयारी के लिए है और जारी होने से पहले योग्य पंडित द्वारा समीक्षित की जाएगी।" },
    notFound: { en: "Page not found", hi: "पृष्ठ नहीं मिला" },
    reviewShort: { en: "Prototype guide, not yet reviewed by a pandit. Follow your family tradition where it differs.", hi: "प्रोटोटाइप — अभी पंडित द्वारा समीक्षित नहीं। जहाँ अंतर हो, पारिवारिक परंपरा का पालन करें।" },
    tabAbout: { en: "About", hi: "परिचय" }, tabSamagri: { en: "Samagri", hi: "सामग्री" }, tabSteps: { en: "Steps", hi: "चरण" },
    allRites: { en: "All rites", hi: "सभी संस्कार" }, allRitesBody: { en: "3 ready · 13 coming", hi: "3 तैयार · 13 आने वाले" },
    sandhyaBody: { en: "15-minute morning practice", hi: "15 मिनट की प्रातः उपासना" },
    linkTithi: { en: "Need an auspicious date? Check the tithi in the Tithi app.", hi: "शुभ तिथि चाहिए? ‘तिथि’ ऐप में देखें।" }
  };
  const t = (k) => (S[k] ? S[k][lang] : k);
  const L = (o) => (o == null ? "" : typeof o === "string" ? o : (o[lang] || o.en));
  const rite = (id) => D.rites.find((r) => r.id === id);

  const traditions = [
    { id: "general", en: "General household practice", hi: "सामान्य पारिवारिक विधि", sub: { en: "Default", hi: "डिफ़ॉल्ट" } },
    { id: "ashvalayana", en: "Āśvalāyana Gṛhya Sūtra", hi: "आश्वलायन गृह्य सूत्र", sub: { en: "Ṛgveda", hi: "ऋग्वेद" } },
    { id: "paraskara", en: "Pāraskara Gṛhya Sūtra", hi: "पारस्कर गृह्य सूत्र", sub: { en: "Śukla Yajurveda", hi: "शुक्ल यजुर्वेद" } },
    { id: "apastamba", en: "Āpastamba Gṛhya Sūtra", hi: "आपस्तम्ब गृह्य सूत्र", sub: { en: "Kṛṣṇa Yajurveda", hi: "कृष्ण यजुर्वेद" } },
    { id: "gobhila", en: "Gobhila Gṛhya Sūtra", hi: "गोभिल गृह्य सूत्र", sub: { en: "Sāmaveda", hi: "सामवेद" } }
  ];

  // ---------- helpers ----------
  const mandala = `<svg class="mandala" viewBox="-100 -100 200 200"><g fill="none" stroke="#F1B477" stroke-width="1.2"><circle r="95"/><circle r="70"/><circle r="45"/><rect x="-56" y="-56" width="112" height="112"/><rect x="-56" y="-56" width="112" height="112" transform="rotate(45)"/><path d="M0-95V95M-95 0H95"/></g></svg>`;
  const fmt = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

  // ---------- views ----------
  function viewHome() {
    const samskaras = D.rites.filter((r) => r.group === "samskara");
    return `<div class="view">
      <section class="hero">${mandala}
        <div class="kicker" style="color:#F1B477">कल्प · Vedāṅga</div>
        <h1>${t("heroTitle")}</h1>
        <a class="btn light sm" href="#/rite/sandhya">${t("startDaily")} →</a>
      </section>
      <h2 class="sec">${t("saṁskāras")}</h2>
      <div class="tiles three">
        ${samskaras.map((r) => `<a class="tile" href="#/rite/${r.id}"><b>${L(r.name)}</b><span>${L(r.tagline)}</span></a>`).join("")}
      </div>
      <h2 class="sec">${t("explore")}</h2>
      <div class="tiles two grow">
        <a class="tile big" href="#/lab"><i>📐</i><span class="tx"><b>${t("labCardTitle")}</b><span>Śulba Sūtras</span></span></a>
        <a class="tile big" href="#/learn"><i>📜</i><span class="tx"><b>${t("learnCardTitle")}</b><span>Vedāṅga</span></span></a>
        <a class="tile big" href="#/rite/sandhya"><i>🌅</i><span class="tx"><b>${t("daily")}</b><span>${t("sandhyaBody")}</span></span></a>
        <a class="tile big" href="#/samskaras"><i>🪔</i><span class="tx"><b>${t("allRites")}</b><span>${t("allRitesBody")}</span></span></a>
      </div>
    </div>`;
  }

  function viewSamskaras() {
    return `<div class="view">
      <div class="kicker">Gṛhya Sūtras</div>
      <h1 class="page-title">${t("saṁskāras")}</h1>
      <p class="lede sm">${t("samskaraLede")}</p>
      <div class="tiles two" style="margin-top:14px">
        ${D.rites.map((r) => `<a class="tile" href="#/rite/${r.id}"><span class="tag">${r.group === "nitya" ? t("daily") : t("free")}</span><b>${L(r.name)}</b><span>${L(r.tagline)}</span></a>`).join("")}
      </div>
      <h2 class="sec">${t("comingSoon")}</h2>
      <div class="chips">${D.upcoming.map((u) => `<span class="chip">${L(u)}</span>`).join("")}</div>
    </div>`;
  }

  function viewRite(id) {
    const r = rite(id);
    if (!r) return viewNotFound();
    const checked = store.get("chk:" + id, []);
    return `<div class="view">
      <div class="rite-head">
        <div class="kicker">${r.group === "nitya" ? "Nitya Karma" : "Saṁskāra"}</div>
        <h1 class="page-title">${L(r.name)} <small>${L(r.tagline)}</small></h1>
      </div>
      <div class="seg" role="tablist">
        <button class="on" data-pane="about">${t("tabAbout")}</button>
        <button data-pane="samagri">${t("tabSamagri")} <em id="chkCount">${checked.length}/${r.samagri.length}</em></button>
        <button data-pane="steps">${t("tabSteps")} <em>${r.steps.length}</em></button>
      </div>
      <div class="pane-wrap">
        <div class="pane" data-pane="about">
          <p class="about">${L(r.about)}</p>
          <div class="meta"><b>${t("when")}</b>${L(r.when)}</div>
          <div class="meta"><b>${t("duration")}</b>${L(r.duration)}</div>
          <div class="meta"><b>${t("who")}</b>${L(r.roles)}</div>
          ${r.group === "samskara" ? `<p class="hint">📅 ${t("linkTithi")}</p>` : ""}
          <div class="notice">${t("reviewShort")}</div>
        </div>
        <div class="pane" data-pane="samagri" hidden>
          <div class="checks">${r.samagri.map((s, i) => `<label class="check"><input type="checkbox" data-i="${i}" ${checked.includes(i) ? "checked" : ""}><span>${L(s)}</span></label>`).join("")}</div>
        </div>
        <div class="pane" data-pane="steps" hidden>
          <ol class="step-list">${r.steps.map((s, i) => `<li><span class="n">${i + 1}</span><span>${L(s.title)}</span></li>`).join("")}</ol>
        </div>
      </div>
      <a class="btn block" href="#/rite/${id}/step/1">${t("beginGuided")} →</a>
    </div>`;
  }

  function bindRite(id) {
    const r = rite(id);
    app.querySelectorAll(".check input").forEach((cb) => {
      cb.addEventListener("change", () => {
        const set = new Set(store.get("chk:" + id, []));
        const i = +cb.dataset.i;
        cb.checked ? set.add(i) : set.delete(i);
        store.set("chk:" + id, [...set]);
        document.getElementById("chkCount").textContent = `${set.size}/${r.samagri.length}`;
      });
    });
    app.querySelectorAll(".seg button").forEach((b) => b.addEventListener("click", () => {
      app.querySelectorAll(".seg button").forEach((x) => x.classList.toggle("on", x === b));
      app.querySelectorAll(".pane").forEach((p) => (p.hidden = p.dataset.pane !== b.dataset.pane));
    }));
  }

  function viewStep(id, n) {
    const r = rite(id);
    if (!r) return viewNotFound();
    const total = r.steps.length;
    if (n > total) {
      return `<div class="view guided done"><div class="big">🪔</div><h1>${t("doneTitle")}</h1><p class="lede" style="margin:0 auto">${t("doneBody")}</p>
        <div class="nav-row"><a class="btn ghost" href="#/rite/${id}">${t("backToRite")}</a><a class="btn" href="#/">${t("home")}</a></div></div>`;
    }
    const s = r.steps[n - 1];
    const pct = Math.round(((n - 1) / total) * 100);
    const canSpeak = "speechSynthesis" in window;
    return `
      <div class="view guided">
        <div class="step-head"><span>${L(r.name)} · ${t("step")} ${n} ${t("of")} ${total}</span><a href="#/rite/${id}">✕ ${t("exit")}</a></div>
        <div class="bar"><i style="width:${pct}%"></i></div>
        <h1 class="step-title">${L(s.title)}</h1>
        <p class="step-action">${L(s.action)}</p>
        ${s.mantra ? `
          <div class="mantra">
            <div class="deva" lang="sa">${s.mantra.deva}</div>
            <div class="iast">${s.mantra.iast}</div>
            <div class="meaning">${L(s.mantra.meaning)}</div>
            ${canSpeak ? `<div class="tools"><button class="pill" id="speakBtn">${t("listen")}</button></div>` : ""}
          </div>` : ""}
        ${s.timer ? `
          <div class="timer"><span class="t" id="tDisp">${fmt(s.timer)}</span><span class="lbl">${t("timerLbl")}</span>
            <button class="pill" id="tStart">${t("startT")}</button><button class="pill" id="tReset">${t("resetT")}</button></div>` : ""}
        <details class="why"><summary>${t("whyStep")}</summary><p>${L(s.why)}</p></details>
        <div class="nav-row bottom">
          ${n > 1 ? `<a class="btn ghost" href="#/rite/${id}/step/${n - 1}">${t("back")}</a>` : `<a class="btn ghost" href="#/rite/${id}">${t("back")}</a>`}
          <a class="btn" href="#/rite/${id}/step/${n + 1}">${n === total ? t("finish") : t("next")}</a>
        </div>
      </div>`;
  }

  let timerId = null;
  function bindStep(id, n) {
    const r = rite(id);
    const s = r && r.steps[n - 1];
    if (!s) return;
    const sp = document.getElementById("speakBtn");
    if (sp && s.mantra) {
      sp.addEventListener("click", () => {
        const synth = window.speechSynthesis;
        if (synth.speaking) { synth.cancel(); sp.textContent = t("listen"); sp.classList.remove("on"); return; }
        const u = new SpeechSynthesisUtterance(s.mantra.deva.replace(/[।॥]/g, ","));
        const v = synth.getVoices().find((x) => /^hi/i.test(x.lang));
        if (v) u.voice = v;
        u.lang = "hi-IN"; u.rate = 0.8;
        u.onend = () => { sp.textContent = t("listen"); sp.classList.remove("on"); };
        sp.textContent = t("stop"); sp.classList.add("on");
        synth.speak(u);
      });
    }
    if (s.timer) {
      let left = s.timer;
      const disp = document.getElementById("tDisp"), start = document.getElementById("tStart"), reset = document.getElementById("tReset");
      const stopT = () => { clearInterval(timerId); timerId = null; start.textContent = t("startT"); };
      start.addEventListener("click", () => {
        if (timerId) return stopT();
        start.textContent = t("pauseT");
        timerId = setInterval(() => {
          left--; disp.textContent = fmt(Math.max(left, 0));
          if (left <= 0) { stopT(); chime(); if (navigator.vibrate) navigator.vibrate([200, 100, 200]); }
        }, 1000);
      });
      reset.addEventListener("click", () => { stopT(); left = s.timer; disp.textContent = fmt(left); });
    }
  }

  function chime() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      [0, 0.35].forEach((d) => {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.frequency.value = 660; o.connect(g); g.connect(ctx.destination);
        g.gain.setValueAtTime(0.0001, ctx.currentTime + d);
        g.gain.exponentialRampToValueAtTime(0.3, ctx.currentTime + d + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + d + 1.2);
        o.start(ctx.currentTime + d); o.stop(ctx.currentTime + d + 1.3);
      });
    } catch (e) {}
  }

  function viewLearn() {
    return `<div class="view">
      <div class="kicker">Vedāṅga</div>
      <h1 class="page-title">${t("learnTitle")}</h1>
      <p class="lede sm">${t("learnLede")}</p>
      <h2 class="sec">${t("sixLimbs")}</h2>
      <div class="vedangas">${D.vedangas.map((v) => `<div class="ved ${v.highlight ? "hl" : ""}">${L(v)}</div>`).join("")}</div>
      <h2 class="sec">${t("fourBranches")}</h2>
      <div class="tiles two grow">
        ${D.branches.map((b) => `
          <${b.link ? `a href="${b.link}"` : "div"} class="tile">
            <span class="tag">${L(b.name)}</span><b>${L(b.title)}</b>
            <span class="${b.link ? "go" : ""}">${L(b.module)}${b.link ? " →" : ""}</span>
          </${b.link ? "a" : "div"}>`).join("")}
      </div>
    </div>`;
  }

  // ---------- Geometry Lab ----------
  const triples = [[3, 4], [5, 12], [8, 15], [7, 24], [12, 35]];
  function viewLab() {
    return `<div class="view lab">
      <div class="kicker">Śulba Sūtras · Baudhāyana</div>
      <h1 class="page-title">${t("labTitle")}</h1>
      <div class="lab-wrap">
        <div class="lab-canvas"><svg id="labSvg" viewBox="0 0 400 400" role="img" aria-label="Right triangle with squares on each side"></svg></div>
        <div class="lab-ctrl">
          <div class="slider"><label><span>${t("sideA")}</span><span id="aVal">3</span></label><input type="range" id="aIn" min="1" max="15" value="3"></div>
          <div class="slider"><label><span>${t("sideB")}</span><span id="bVal">4</span></label><input type="range" id="bIn" min="1" max="15" value="4"></div>
          <div class="eq" id="eq"></div>
          <div class="triples">${triples.map(([a, b]) => `<button class="pill" data-a="${a}" data-b="${b}">${a}–${b}–${Math.round(Math.hypot(a, b))}</button>`).join("")}</div>
          <details class="why"><summary>${t("ropeTitle")}</summary><p>${t("labLede")}<br><br>${t("ropeBody")}</p></details>
        </div>
      </div>
    </div>`;
  }

  function bindLab() {
    const aIn = document.getElementById("aIn"), bIn = document.getElementById("bIn");
    const draw = () => {
      const a = +aIn.value, b = +bIn.value, c2 = a * a + b * b, c = Math.sqrt(c2);
      document.getElementById("aVal").textContent = a;
      document.getElementById("bVal").textContent = b;
      const whole = Number.isInteger(c);
      document.getElementById("eq").innerHTML =
        `${a * a} + ${b * b} = <b class="${whole ? "ok" : ""}">${c2}</b> <small>c = ${whole ? c : c.toFixed(2)}${whole ? " ✓" : ""}</small>`;
      document.getElementById("eq").classList.toggle("whole", whole);

      // geometry: right angle at origin, a up, b right; SVG y axis points down
      const W = 2 * a + b, H = a + 2 * b, k = 340 / Math.max(W, H);
      const ox = 30 + (340 - W * k) / 2 + a * k;           // x of origin
      const oy = 30 + (340 - H * k) / 2 + (a + b) * k;     // y of origin
      const P = (x, y) => `${ox + x * k},${oy - y * k}`;
      const unitGrid = (x0, y0, n) => { // square with lower-left (x0,y0) in math coords, side n
        if (n > 15) return "";
        let s = "";
        for (let i = 1; i < n; i++) {
          s += `<line x1="${ox + (x0 + i) * k}" y1="${oy - y0 * k}" x2="${ox + (x0 + i) * k}" y2="${oy - (y0 + n) * k}"/>`;
          s += `<line x1="${ox + x0 * k}" y1="${oy - (y0 + i) * k}" x2="${ox + (x0 + n) * k}" y2="${oy - (y0 + i) * k}"/>`;
        }
        return s;
      };
      const fs = Math.max(12, Math.min(26, k * Math.min(a, b) * 0.45));
      document.getElementById("labSvg").innerHTML = `
        <polygon points="${P(-a, 0)} ${P(0, 0)} ${P(0, a)} ${P(-a, a)}" fill="#7A1F1F"/>
        <polygon points="${P(0, 0)} ${P(b, 0)} ${P(b, -b)} ${P(0, -b)}" fill="#B8892E"/>
        <polygon points="${P(0, a)} ${P(b, 0)} ${P(a + b, b)} ${P(a, a + b)}" fill="#D9772B"/>
        <g stroke="rgba(255,255,255,.25)" stroke-width="1">${unitGrid(-a, 0, a)}${unitGrid(0, -b, b)}</g>
        <polygon points="${P(0, 0)} ${P(b, 0)} ${P(0, a)}" fill="#FBF6EC"/>
        <line x1="${ox}" y1="${oy - a * k}" x2="${ox + b * k}" y2="${oy}" stroke="#2A1A12" stroke-width="2.5"/>
        ${[[0, 0], [b, 0], [0, a]].map(([x, y]) => `<circle cx="${ox + x * k}" cy="${oy - y * k}" r="6" fill="#FBF6EC" stroke="#2A1A12" stroke-width="2"/>`).join("")}
        <text x="${ox - (a / 2) * k}" y="${oy - (a / 2) * k + fs / 3}" fill="#FBF6EC" font-family="Lora" font-size="${fs}" text-anchor="middle">${a * a}</text>
        <text x="${ox + (b / 2) * k}" y="${oy + (b / 2) * k + fs / 3}" fill="#2A1A12" font-family="Lora" font-size="${fs}" text-anchor="middle">${b * b}</text>
        <text x="${ox + ((a + b) / 2) * k}" y="${oy - ((a + b) / 2) * k + fs / 3}" fill="#2A1A12" font-family="Lora" font-size="${fs * 1.15}" text-anchor="middle">${c2}</text>`;
    };
    aIn.addEventListener("input", draw);
    bIn.addEventListener("input", draw);
    app.querySelectorAll(".triples .pill").forEach((p) =>
      p.addEventListener("click", () => {
        const a = +p.dataset.a, b = +p.dataset.b;
        aIn.max = bIn.max = Math.max(15, a, b);
        aIn.value = a; bIn.value = b; draw();
      })
    );
    draw();
  }

  // ---------- settings ----------
  function viewSettings() {
    const trad = store.get("tradition", "general");
    return `<div class="view">
      <h1 class="page-title">${t("settingsTitle")}</h1>
      <h2 class="sec">${t("language")}</h2>
      <div class="seg">
        <button class="${lang === "en" ? "on" : ""}" data-lang="en">English</button>
        <button class="${lang === "hi" ? "on" : ""}" data-lang="hi">हिंदी</button>
      </div>
      <h2 class="sec">${t("tradition")}</h2>
      <select id="tradSel" class="select">
        ${traditions.map((x) => `<option value="${x.id}" ${trad === x.id ? "selected" : ""}>${x[lang]} — ${L(x.sub)}</option>`).join("")}
      </select>
      <p class="hint">${t("traditionNote")}</p>
      <button class="btn ghost" id="resetBtn" style="margin-top:18px">${t("resetLists")}</button>
      <h2 class="sec">${t("about")}</h2>
      <p class="lede sm">${t("aboutBody")}</p>
    </div>`;
  }

  function bindSettings() {
    app.querySelectorAll("[data-lang]").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
    document.getElementById("tradSel").addEventListener("change", (e) => store.set("tradition", e.target.value));
    document.getElementById("resetBtn").addEventListener("click", (e) => {
      D.rites.forEach((r) => store.set("chk:" + r.id, []));
      e.target.textContent = "✓ " + t("cleared");
    });
  }

  function viewNotFound() {
    return `<div class="view"><h1 class="page-title">${t("notFound")}</h1><a class="btn" href="#/">${t("home")}</a></div>`;
  }

  // ---------- router ----------
  function render() {
    if (timerId) { clearInterval(timerId); timerId = null; }
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    const parts = (location.hash.replace(/^#\/?/, "") || "").split("/").filter(Boolean);
    let html, bind = () => {}, tab = "home", guided = false;

    if (parts.length === 0) html = viewHome();
    else if (parts[0] === "samskaras") { html = viewSamskaras(); tab = "samskaras"; }
    else if (parts[0] === "rite" && parts[2] === "step") {
      const n = Math.max(1, parseInt(parts[3], 10) || 1);
      html = viewStep(parts[1], n); bind = () => bindStep(parts[1], n); guided = true;
    }
    else if (parts[0] === "rite") { html = viewRite(parts[1]); bind = () => bindRite(parts[1]); tab = "samskaras"; }
    else if (parts[0] === "learn") { html = viewLearn(); tab = "learn"; }
    else if (parts[0] === "lab") { html = viewLab(); bind = bindLab; tab = "lab"; }
    else if (parts[0] === "settings") { html = viewSettings(); bind = bindSettings; tab = "settings"; }
    else html = viewNotFound();

    app.innerHTML = html;
    bind();
    document.body.classList.toggle("guided-mode", guided);
    document.querySelectorAll(".tabbar a").forEach((a) => a.classList.toggle("active", a.dataset.tab === tab));
    app.scrollTop = 0;
  }

  function applyStatic() {
    document.documentElement.lang = lang;
    document.body.classList.toggle("hi", lang === "hi");
    document.getElementById("langBtn").textContent = lang === "en" ? "हिंदी" : "English";
    document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n)));
  }

  function setLang(l) { lang = l; store.set("lang", l); applyStatic(); render(); }

  // size the app to the area the browser actually shows (iOS Safari toolbars)
  const fitHeight = () => document.documentElement.style.setProperty("--app-h", window.innerHeight + "px");
  fitHeight();
  window.addEventListener("resize", fitHeight);
  if (window.visualViewport) window.visualViewport.addEventListener("resize", fitHeight);

  document.getElementById("langBtn").addEventListener("click", () => setLang(lang === "en" ? "hi" : "en"));
  window.addEventListener("hashchange", render);
  if ("speechSynthesis" in window) window.speechSynthesis.getVoices();
  applyStatic();
  render();
})();
