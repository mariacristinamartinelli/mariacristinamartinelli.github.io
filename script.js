const pageMeta = {
  it: {
    title: "Maria Cristina Martinelli | Traduttrice, Proofreader, Editor & Fact-checker",
    description: "Maria Cristina Martinelli: traduttrice EN/FR > IT, proofreader, editor e fact-checker con esperienza pluridecennale nel lavoro linguistico ed editoriale."
  },
  en: {
    title: "Maria Cristina Martinelli | Translator, Proofreader, Editor & Fact-checker",
    description: "Maria Cristina Martinelli: EN/FR > IT translator, proofreader, editor and fact-checker with extensive experience in language and editorial work."
  },
  fr: {
    title: "Maria Cristina Martinelli | Traductrice, Correctrice, Révision éditoriale & Fact-checking",
    description: "Maria Cristina Martinelli : traductrice EN/FR > IT, correctrice, révision éditoriale et fact-checking, avec une longue expérience dans les métiers de la langue et de l’édition."
  }
};

function updateMeta(lang){
  document.title = pageMeta[lang].title;
  const meta = document.querySelector('meta[name="description"]');
  if(meta) meta.setAttribute("content", pageMeta[lang].description);
}

const translations = {
  it: {
    nav_services:"Servizi",
    nav_method:"Metodo",
    nav_experience:"Esperienza",
    nav_writing:"Scrittura",
    nav_project:"Progetto",
    nav_blog:"Blog",
    nav_contact:"Contatti",

    hero_kicker:"LINGUA · VOCE · STRUTTURA · CONTESTO · PRECISIONE",
    hero_role:"Traduttrice · Proofreader · Editor · Fact-checker",
    hero_langs:"Dall’inglese e dal francese all’italiano",
    hero_lead:"Ogni testo richiede un tipo diverso di attenzione. Traduzione, proofreading, editing e fact-checking per accompagnarlo dalla prima lettura alla versione definitiva.",
    discover:"Scopri i servizi",
    contact_me:"Contattami",
    hero_note_1:"Lingua",
    hero_note_2:"Voce",
    hero_note_3:"Struttura",
    hero_note_4:"Contesto",
    hero_note_5:"Precisione",

    service_translation_title:"Traduzione",
    service_translation:"Fare in modo che il testo sembri nato nella lingua in cui viene letto.",
    service_proof:"Togliere ciò che disturba, lasciando intatto ciò che funziona.",
    service_editing:"Lavorare sul flusso della narrazione perché la storia scorra fluida e coerente, senza lasciare al lettore dubbi che il testo avrebbe dovuto risolvere.",
    service_fact:"Verificare ciò che il testo afferma, perché la credibilità nasce dai dettagli.",

    method_kicker:"IL MIO METODO",
    method_title:"Precisione, contesto, visione d’insieme.",
    method_body:"Unisco competenze linguistiche, attenzione editoriale e verifica critica delle informazioni, con un approccio pratico e flessibile. Integro strumenti di intelligenza artificiale quando possono offrire un reale supporto, ma la valutazione finale è sempre umana.",
    method_p1:"Voce dell’autore rispettata",
    method_p2:"Fact-checking sistematico",
    method_p3:"IA come supporto, non sostituto",

    stat_books:"libri revisionati",
    stat_translated:"romanzi tradotti",
    experience_kicker:"ESPERIENZA",
    experience_title:"Esperienza editoriale e linguistica costruita nel tempo.",
    experience_body:"Esperienza su narrativa contemporanea, thriller, mystery, narrativa storica, romance, paranormal e altri generi. Una parte significativa dei progetti è coperta da accordi di riservatezza (NDA); titoli, autori e committenti non possono essere resi pubblici.",
    platforms:"Ambiente di lavoro principale: macOS. Utilizzo senza problemi anche Windows.",

    writing_kicker:"SCRITTURA",
    writing_title:"Anche dall’altra parte del manoscritto.",
    writing_body:"Sono autrice pubblicata di thriller psicologici e lavoro a serie narrative nei generi mystery e paranormal urban gothic.",

    project_kicker:"PROGETTO DIGITALE",
    project_title:"Esperienza professionale trasformata in progetto.",
    project_body:"Sto sviluppando un’applicazione multipiattaforma concepita come ambiente di lavoro integrato per professionisti della lingua e del testo, nata dall’esperienza diretta nei workflow editoriali e linguistici.",

    contact_kicker:"CONTATTI",
    contact_title:"Parliamo del tuo prossimo testo.",
    email_label:"Email",
    email_work_label:"Email professionale",
    footer_role:"TRADUTTRICE · PROOFREADER · EDITOR · FACT-CHECKER"
  },

  en: {
    nav_services:"Services",
    nav_method:"Method",
    nav_experience:"Experience",
    nav_writing:"Writing",
    nav_project:"Project",
    nav_blog:"Blog",
    nav_contact:"Contact",

    hero_kicker:"LANGUAGE · VOICE · STRUCTURE · CONTEXT · PRECISION",
    hero_role:"Translator · Proofreader · Editor · Fact-checker",
    hero_langs:"English and French into Italian",
    hero_lead:"Every text calls for a different kind of attention. Translation, proofreading, editing and fact-checking from the first reading to the final version.",
    discover:"Explore services",
    contact_me:"Contact me",
    hero_note_1:"Language",
    hero_note_2:"Voice",
    hero_note_3:"Structure",
    hero_note_4:"Context",
    hero_note_5:"Precision",

    service_translation_title:"Translation",
    service_translation:"Making the text feel as though it had been written in the language in which it is read.",
    service_proof:"Removing what gets in the way while leaving intact what already works.",
    service_editing:"Working on narrative flow so the story reads smoothly and coherently, without leaving the reader with doubts the text itself should have resolved.",
    service_fact:"Checking what the text states, because credibility is built on details.",

    method_kicker:"MY METHOD",
    method_title:"Precision, context, the whole picture.",
    method_body:"I combine linguistic expertise, editorial attention and critical verification of information with a practical, flexible approach. I integrate AI tools when they provide genuine support, but final evaluation always remains human.",
    method_p1:"Author’s voice respected",
    method_p2:"Systematic fact-checking",
    method_p3:"AI as support, not substitute",

    stat_books:"books reviewed",
    stat_translated:"novels translated",
    experience_kicker:"EXPERIENCE",
    experience_title:"Editorial and language experience built over time.",
    experience_body:"Experience across contemporary fiction, thrillers, mystery, historical fiction, romance, paranormal and other genres. A significant part of my work is covered by confidentiality agreements (NDAs), so titles, authors and clients cannot be publicly disclosed.",
    platforms:"Primary working environment: macOS. I also work comfortably with Windows.",

    writing_kicker:"WRITING",
    writing_title:"Also on the other side of the manuscript.",
    writing_body:"I am a published author of psychological thrillers and I work on series in the mystery and paranormal urban gothic genres.",

    project_kicker:"DIGITAL PROJECT",
    project_title:"Professional experience turned into a project.",
    project_body:"I am developing a cross-platform application conceived as an integrated workspace for language and text professionals, built on direct experience of editorial and linguistic workflows.",

    contact_kicker:"CONTACT",
    contact_title:"Let’s talk about your next text.",
    email_label:"Email",
    email_work_label:"Professional email",
    footer_role:"TRANSLATOR · PROOFREADER · EDITOR · FACT-CHECKER"
  },

  fr: {
    nav_services:"Services",
    nav_method:"Méthode",
    nav_experience:"Expérience",
    nav_writing:"Écriture",
    nav_project:"Projet",
    nav_blog:"Blog",
    nav_contact:"Contact",

    hero_kicker:"LANGUE · VOIX · STRUCTURE · CONTEXTE · PRÉCISION",
    hero_role:"Traductrice · Correctrice · Révision éditoriale · Fact-checking",
    hero_langs:"De l’anglais et du français vers l’italien",
    hero_lead:"Chaque texte demande une attention différente. Traduction, correction, révision éditoriale et fact-checking, de la première lecture à la version définitive.",
    discover:"Découvrir les services",
    contact_me:"Me contacter",
    hero_note_1:"Langue",
    hero_note_2:"Voix",
    hero_note_3:"Structure",
    hero_note_4:"Contexte",
    hero_note_5:"Précision",

    service_translation_title:"Traduction",
    service_translation:"Faire en sorte que le texte semble avoir été écrit dans la langue dans laquelle il est lu.",
    service_proof:"Retirer ce qui gêne la lecture tout en préservant ce qui fonctionne déjà.",
    service_editing:"Travailler le flux narratif pour que l’histoire reste fluide et cohérente, sans laisser au lecteur des doutes que le texte aurait dû résoudre.",
    service_fact:"Vérifier ce que le texte affirme, parce que la crédibilité se construit dans les détails.",

    method_kicker:"MA MÉTHODE",
    method_title:"Précision, contexte, vision d’ensemble.",
    method_body:"J’associe compétences linguistiques, attention éditoriale et vérification critique des informations dans une approche pratique et flexible. J’intègre les outils d’intelligence artificielle lorsqu’ils apportent une réelle valeur, mais l’évaluation finale reste toujours humaine.",
    method_p1:"Respect de la voix de l’auteur",
    method_p2:"Fact-checking systématique",
    method_p3:"L’IA comme soutien, jamais comme substitut",

    stat_books:"livres révisés",
    stat_translated:"romans traduits",
    experience_kicker:"EXPÉRIENCE",
    experience_title:"Une expérience éditoriale et linguistique construite au fil du temps.",
    experience_body:"Expérience en fiction contemporaine, thriller, mystery, fiction historique, romance, paranormal et autres genres. Une part importante des projets est couverte par des accords de confidentialité (NDA) ; les titres, auteurs et clients concernés ne peuvent donc pas être rendus publics.",
    platforms:"Environnement de travail principal : macOS. Je travaille également sans difficulté sous Windows.",

    writing_kicker:"ÉCRITURE",
    writing_title:"Aussi de l’autre côté du manuscrit.",
    writing_body:"Je suis autrice publiée de thrillers psychologiques et je travaille sur des séries relevant du mystery et du paranormal urban gothic.",

    project_kicker:"PROJET NUMÉRIQUE",
    project_title:"L’expérience professionnelle transformée en projet.",
    project_body:"Je suis en train de développer une application multiplateforme conçue comme un environnement de travail intégré pour les professionnels de la langue et du texte, née d’une expérience directe des workflows éditoriaux et linguistiques.",

    contact_kicker:"CONTACT",
    contact_title:"Parlons de votre prochain texte.",
    email_label:"E-mail",
    email_work_label:"E-mail professionnel",
    footer_role:"TRADUCTRICE · CORRECTRICE · RÉVISION ÉDITORIALE · FACT-CHECKING"
  }
};

function setLang(lang){
  if(!translations[lang]) lang = "it";

  document.documentElement.lang = lang;

  const switcher = document.querySelector(".lang-switch");
  if(switcher){
    const labels = {
      it:"Seleziona lingua",
      en:"Select language",
      fr:"Choisir la langue"
    };
    switcher.setAttribute("aria-label", labels[lang] || labels.it);
  }

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if(translations[lang][key] !== undefined){
      el.innerHTML = translations[lang][key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

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

nav?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn?.setAttribute("aria-expanded", "false");
  });
});

setLang(localStorage.getItem("preferredLang") || "it");

const header = document.querySelector(".site-header");
const backToTop = document.querySelector(".back-to-top");
const navLinks = [...document.querySelectorAll(".main-nav a")];

const sections = navLinks
  .map(link => {
    const href = link.getAttribute("href");
    if(!href || !href.startsWith("#")) return null;
    return document.querySelector(href);
  })
  .filter(Boolean);

function updateScrollState(){
  const y = window.scrollY || document.documentElement.scrollTop;

  header?.classList.toggle("scrolled", y > 10);
  backToTop?.classList.toggle("visible", y > 500);

  let currentId = "";
  for(const section of sections){
    const top = section.getBoundingClientRect().top;
    if(top <= 140) currentId = section.id;
  }

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    const active = href === `#${currentId}`;
    link.classList.toggle("active", active);

    if(active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}

window.addEventListener("scroll", updateScrollState, {passive:true});
updateScrollState();

document.addEventListener("keydown", event => {
  if(event.key === "Escape" && nav?.classList.contains("open")){
    nav.classList.remove("open");
    menuBtn?.setAttribute("aria-expanded", "false");
    menuBtn?.focus();
  }
});

const yearEl = document.getElementById("footer-year");
if(yearEl) yearEl.textContent = new Date().getFullYear();
