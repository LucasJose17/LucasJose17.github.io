// Troca de idioma PT/EN.
// O texto em português fica no próprio HTML; aqui só existe a versão em inglês.
const en = {
  skip: "Skip to content",
  navProjects: "Projects",
  navPath: "Path",
  navContact: "Contact",

  hello: "Hi, I'm Lucas José da Silva.",
  h1a: "From hardware",
  h1b: "to deploy.",
  lede:
    "I started out taking computers apart in technical school. Today I study Computer Science at Unipê and build complete web applications with React, Next.js, TypeScript and databases. I'm looking for my first internship or junior role in software development.",
  ctaProjects: "See projects",
  ctaCv: "Download resume (PDF)",
  place: "João Pessoa, Brazil, where the sun rises first in the Americas.",

  factCourseT: "Computer Science",
  factCourseD: "5th semester at Unipê",
  factTechT: "IT technician",
  factTechD: "Maintenance and support, 2022–2024",
  factLangT: "Languages",
  factLangD: "Portuguese (native), intermediate English and Spanish",

  projectsTitle: "What I've built",
  caseSub:
    "An ordering system for a pizzeria in Mamanguape, Brazil: customers order from their phones, the team follows orders at the counter and in the kitchen, and the owner runs everything from a dashboard.",
  flow1T: "Customer",
  flow1D:
    "Signs in with just a name and phone number, no password. Browses the menu, places an order, and the address is saved for next time.",
  flow2T: "Counter and kitchen",
  flow2D: "Staff sign in with Google and follow orders on the counter and kitchen panel.",
  flow3T: "Admin",
  flow3D: "A separate dashboard, only for the owner, to keep track of the pizzeria.",
  decisionsT: "Technical decisions",
  dec1: "Supabase database with row-level security (RLS): each user only sees their own data.",
  dec2: "Data validation with Zod and TypeScript in strict mode.",
  dec3: "Unit tests with Vitest and end-to-end tests with Playwright, including accessibility checks.",
  stackT: "Built with",
  caseNote: "The code is private, but I'm happy to walk through all of it in an interview.",

  bsD: "A digital menu for a restaurant in João Pessoa. Customers build their order at the table and send it straight to the kitchen via WhatsApp.",
  openSite: "Open the site",
  seeCode: "View code",
  pfT: "This portfolio",
  pfD: "A single bilingual, responsive page written without frameworks and published on GitHub Pages.",

  pathTitle: "How I got here",
  t1T: "IT Maintenance and Support Technician",
  t1D: "ECIT João da Matta Cavalcanti de Albuquerque. Hardware, networks and operating systems.",
  t2T: "IT internship",
  t2D: "Cuité de Mamanguape City Hall. Computer maintenance and support for staff.",
  t3T: "Computer Science",
  t3D: "Unipê, in João Pessoa. Focused on programming and web development.",
  t4T: "Customer support at AeC",
  t4D: "Helped users of the Mercado Pago app. I learned how people use (and get stuck in) an app.",
  tNow: "Now",
  t5T: "Web development",
  t5D: "Building San's Pizza and looking for my first internship or junior role.",

  toolsTitle: "Tools",
  g1: "Front-end",
  g2: "Back-end and data",
  g3: "Testing and workflow",

  contactTitle: "Let's talk?",
  contactLede:
    "I'm available for an internship or junior role in web development. WhatsApp is the fastest way to reach me.",

  status: "Available for an internship or junior role",
  archT: "How it works under the hood",
  arc1: "Customer",
  arc2: "Counter & kitchen",
  arc3: "Owner",
  arcTest: "With automated tests in Vitest and Playwright.",
  liveCap: "Live preview: scroll and tap the menu.",

  foot: "Handmade by Lucas José da Silva, in João Pessoa."
};

const ptBtn = document.getElementById("ptBtn");
const enBtn = document.getElementById("enBtn");
const nodes = document.querySelectorAll("[data-i18n]");
const pt = {};

nodes.forEach((el) => {
  pt[el.dataset.i18n] = el.innerHTML;
});

function setLanguage(lang) {
  const dict = lang === "en" ? en : pt;

  nodes.forEach((el) => {
    const text = dict[el.dataset.i18n];
    if (text) el.innerHTML = text;
  });

  document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
  ptBtn.setAttribute("aria-pressed", String(lang !== "en"));
  enBtn.setAttribute("aria-pressed", String(lang === "en"));

  try {
    localStorage.setItem("lang", lang);
  } catch (e) {
    /* navegador sem armazenamento: segue sem lembrar a escolha */
  }
}

ptBtn.addEventListener("click", () => setLanguage("pt"));
enBtn.addEventListener("click", () => setLanguage("en"));

try {
  if (localStorage.getItem("lang") === "en") setLanguage("en");
} catch (e) {
  /* ignora */
}
