
const pageMeta = {
  it: {
    title: "Maria Cristina Martinelli | Editor, Proofreader, Fact-checker & Traduttrice",
    description: "Maria Cristina Martinelli: editor, proofreader, fact-checker e traduttrice EN/FR > IT. Esperienza pluridecennale nel lavoro linguistico ed editoriale."
  },
  en: {
    title: "Maria Cristina Martinelli | Editor, Proofreader, Fact-checker & Translator",
    description: "Maria Cristina Martinelli: editor, proofreader, fact-checker and EN/FR > IT translator with extensive experience in language and editorial work."
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
  }
};

function setLang(lang){
  document.documentElement.lang = lang;
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
