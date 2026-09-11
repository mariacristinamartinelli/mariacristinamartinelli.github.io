
const pageMeta = {
  it: {
    title: "Maria Cristina Martinelli | Editor, Proofreader, Fact-checker & Traduttrice",
    description: "Maria Cristina Martinelli: editor, proofreader, fact-checker e traduttrice EN/FR > IT. Esperienza pluridecennale nel lavoro linguistico ed editoriale."
  },
  en: {
    title: "Maria Cristina Martinelli | Editor, Proofreader, Fact-checker & Translator",
    description: "Maria Cristina Martinelli: editor, proofreader, fact-checker and EN/FR > IT translator with extensive experience in language and editorial work."
  },
  fr: {
    title: "Maria Cristina Martinelli | Révision éditoriale, correction, fact-checking & traduction",
    description: "Maria Cristina Martinelli : révision éditoriale, correction, fact-checking et traduction EN/FR > IT, avec une longue expérience dans les métiers de la langue et de l’édition."
  }
};
function updateMeta(lang){
  document.title = pageMeta[lang].title;
  const meta = document.querySelector('meta[name="description"]');
  if(meta) meta.setAttribute("content", pageMeta[lang].description);
}


const translations = {
  it: {
    nav_services:"Servizi", nav_method:"Metodo", nav_experience:"Esperienza", nav_writing:"Scrittura", nav_project:"Progetto", nav_contact:"Contatti",
    hero_kicker:"TESTI PIÙ FORTI. STORIE PIÙ LUCIDE.",
    hero_role:"Editor · Proofreader · Fact-checker · Traduttrice",
    hero_langs:"Dall’inglese e dal francese all’italiano",
    hero_lead:"Lavoro sui testi per dare loro chiarezza, coerenza e autenticità, nel rispetto della voce dell’autore e dei lettori.",
    discover:"Scopri di più", contact_me:"Contattami", hero_note:"Dietro ogni grande storia<br>c’è un grande lavoro.",
    service_editing:"Per sviluppare testi solidi, coerenti e coinvolgenti.",
    service_proof:"Per testi accurati, scorrevoli e impeccabili.",
    service_fact:"Per informazioni affidabili e ambientazioni credibili.",
    service_translation_title:"Traduzione",
    service_translation:"Dall’inglese e dal francese all’italiano, con attenzione a tono, stile e contesto.",
    method_kicker:"IL MIO METODO", method_title:"Precisione, contesto, visione.",
    method_body:"Unisco competenze linguistiche, attenzione editoriale e verifica critica delle informazioni, con un approccio pratico e flessibile. Integro strumenti di intelligenza artificiale quando possono offrire un reale supporto, ma la valutazione finale è sempre umana.",
    method_p1:"Voce dell’autore rispettata", method_p2:"Fact-checking sistematico", method_p3:"IA come supporto, non sostituto",
    method_quote:"“Un buon testo non è mai solo una questione di parole.”",
    stat_books:"libri revisionati", stat_translated:"romanzi tradotti",
    experience_kicker:"ESPERIENZA", experience_title:"Lavoro editoriale costruito sul campo.",
    experience_body:"Esperienza su narrativa contemporanea, thriller, mystery, narrativa storica, romance, paranormal e altri generi. Una parte significativa dei progetti è coperta da accordi di riservatezza (NDA); titoli, autori e committenti non possono essere resi pubblici.",
    platforms:"Ambiente di lavoro principale: macOS. Utilizzo senza problemi anche Windows.",
    writing_kicker:"SCRITTURA", writing_title:"Anche dall’altra parte del manoscritto.",
    writing_body:"Sono autrice pubblicata di thriller psicologici e lavoro a serie narrative nei generi mystery e paranormal urban gothic.",
    project_kicker:"PROGETTO DIGITALE", project_title:"Esperienza professionale trasformata in progetto.",
    project_body:"Sto sviluppando un’applicazione multipiattaforma concepita come ambiente di lavoro integrato per professionisti della lingua e del testo, nata dall’esperienza diretta nei workflow editoriali e linguistici.",
    contact_kicker:"CONTATTI", contact_title:"Parliamo del tuo prossimo testo.", email_label:"Email",
    footer_tagline:"Testi. Persone. Possibilità."
  },
  en: {
    nav_services:"Services", nav_method:"Method", nav_experience:"Experience", nav_writing:"Writing", nav_project:"Project", nav_contact:"Contact",
    hero_kicker:"STRONGER TEXTS. CLEARER STORIES.",
    hero_role:"Editor · Proofreader · Fact-checker · Translator",
    hero_langs:"English and French into Italian",
    hero_lead:"I work on texts to give them clarity, coherence and authenticity, while respecting the author’s voice and the reader’s experience.",
    discover:"Discover more", contact_me:"Contact me", hero_note:"Behind every great story<br>there is great work.",
    service_editing:"For solid, coherent and engaging texts.",
    service_proof:"For accurate, smooth and polished texts.",
    service_fact:"For reliable information and credible settings.",
    service_translation_title:"Translation",
    service_translation:"From English and French into Italian, with close attention to tone, style and context.",
    method_kicker:"MY METHOD", method_title:"Precision, context, vision.",
    method_body:"I combine linguistic expertise, editorial attention and critical verification of information with a practical, flexible approach. I integrate AI tools when they provide genuine support, but final evaluation always remains human.",
    method_p1:"Author’s voice respected", method_p2:"Systematic fact-checking", method_p3:"AI as support, not substitute",
    method_quote:"“A good text is never just a matter of words.”",
    stat_books:"books reviewed", stat_translated:"novels translated",
    experience_kicker:"EXPERIENCE", experience_title:"Editorial work built in the field.",
    experience_body:"Experience across contemporary fiction, thrillers, mystery, historical fiction, romance, paranormal and other genres. A significant part of my work is covered by confidentiality agreements (NDAs), so titles, authors and clients cannot be publicly disclosed.",
    platforms:"Primary working environment: macOS. I also work comfortably with Windows.",
    writing_kicker:"WRITING", writing_title:"Also on the other side of the manuscript.",
    writing_body:"I am a published author of psychological thrillers and I work on series in the mystery and paranormal urban gothic genres.",
    project_kicker:"DIGITAL PROJECT", project_title:"Professional experience turned into a project.",
    project_body:"I am developing a cross-platform application conceived as an integrated workspace for language and text professionals, built on direct experience of editorial and linguistic workflows.",
    contact_kicker:"CONTACT", contact_title:"Let’s talk about your next text.", email_label:"Email",
    footer_tagline:"Texts. People. Possibilities."
  },
  fr: {
    nav_services:"Services", nav_method:"Méthode", nav_experience:"Expérience", nav_writing:"Écriture", nav_project:"Projet", nav_contact:"Contact",
    hero_kicker:"DES TEXTES PLUS FORTS. DES HISTOIRES PLUS CLAIRES.",
    hero_role:"Révision éditoriale · Correction · Fact-checking · Traduction",
    hero_langs:"De l’anglais et du français vers l’italien",
    hero_lead:"Je travaille les textes pour leur apporter clarté, cohérence et authenticité, dans le respect de la voix de l’auteur et de l’expérience du lecteur.",
    discover:"En savoir plus", contact_me:"Me contacter", hero_note:"Derrière chaque grande histoire<br>il y a un grand travail.",
    service_editing:"Pour construire des textes solides, cohérents et captivants.",
    service_proof:"Pour des textes précis, fluides et impeccables.",
    service_fact:"Pour des informations fiables et des cadres crédibles.",
    service_translation_title:"Traduction",
    service_translation:"De l’anglais et du français vers l’italien, avec une attention particulière au ton, au style et au contexte.",
    method_kicker:"MA MÉTHODE", method_title:"Précision, contexte, vision.",
    method_body:"J’associe compétences linguistiques, attention éditoriale et vérification critique des informations dans une approche pratique et flexible. J’intègre les outils d’intelligence artificielle lorsqu’ils apportent une réelle valeur, mais l’évaluation finale reste toujours humaine.",
    method_p1:"Respect de la voix de l’auteur", method_p2:"Fact-checking systématique", method_p3:"L’IA comme soutien, jamais comme substitut",
    method_quote:"« Un bon texte n’est jamais seulement une affaire de mots. »",
    stat_books:"livres révisés", stat_translated:"romans traduits",
    experience_kicker:"EXPÉRIENCE", experience_title:"Une expérience éditoriale construite sur le terrain.",
    experience_body:"Expérience en fiction contemporaine, thriller, mystery, fiction historique, romance, paranormal et autres genres. Une part importante des projets est couverte par des accords de confidentialité (NDA) ; les titres, auteurs et clients concernés ne peuvent donc pas être rendus publics.",
    platforms:"Environnement de travail principal : macOS. Je travaille également sans difficulté sous Windows.",
    writing_kicker:"ÉCRITURE", writing_title:"Aussi de l’autre côté du manuscrit.",
    writing_body:"Je suis autrice publiée de thrillers psychologiques et je travaille sur des séries relevant du mystery et du paranormal urban gothic.",
    project_kicker:"PROJET NUMÉRIQUE", project_title:"L’expérience professionnelle transformée en projet.",
    project_body:"Je développe une application multiplateforme conçue comme un environnement de travail intégré pour les professionnels de la langue et du texte, née d’une expérience directe des workflows éditoriaux et linguistiques.",
    contact_kicker:"CONTACT", contact_title:"Parlons de votre prochain texte.", email_label:"E-mail", email_work_label:"E-mail professionnel",
    footer_tagline:"Textes. Personnes. Possibilités."
  }
};

function setLang(lang){
  if (!translations[lang]) lang = "it";
  document.documentElement.lang = lang;
  const switcher = document.querySelector(".lang-switch");
  if (switcher) {
    const labels = {it:"Seleziona lingua", en:"Select language", fr:"Choisir la langue"};
    switcher.setAttribute("aria-label", labels[lang] || labels.it);
  }
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if(translations[lang][key] !== undefined){
      el.innerHTML = translations[lang][key];
    }
  });
  document.querySelectorAll(".lang-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.lang === lang));
  localStorage.setItem("preferredLang", lang);
  updateMeta(lang);
}

document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

const menuBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
menuBtn?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});
nav?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  menuBtn?.setAttribute("aria-expanded","false");
}));

setLang(localStorage.getItem("preferredLang") || "it");
