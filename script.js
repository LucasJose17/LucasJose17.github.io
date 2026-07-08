const translations = {
  pt: {
    navHome: "Início",
    navAbout: "Sobre",
    navSkills: "Habilidades",
    navProjects: "Projetos",
    navContact: "Contato",

    badge: "Disponível para aprender e evoluir",

    heroHello: "Olá, eu sou",
    heroRole1: "Estudante de",
    heroRole2: "Ciência da Computação",
    heroRole3: "Desenvolvedor em formação",
    heroDescription:
      "Construindo minha trajetória na tecnologia com foco em programação, desenvolvimento web, banco de dados e criação de soluções digitais.",

    btnProjects: "Ver projetos",
    btnContact: "Entre em contato",
    downloadCv: "Baixar currículo",

    infoCourse: "Ciência da Computação",
    infoFocus: "Foco",
    infoFocusText: "Desenvolvimento e Lógica",
    infoGoal: "Objetivo",
    infoGoalText: "Evoluir, criar e impactar",

    metric1: "Período<br />Ciência da Computação",
    metric2: "Horas de estudo<br />dedicadas",
    metric3: "Tecnologias<br />exploradas",
    metric4: "Foco em crescer<br />na área de TI",

    aboutLabel: "Sobre mim",
    aboutTitle: "Mais sobre mim",
    aboutText:
      "Sou estudante de Ciência da Computação e estou desenvolvendo minhas habilidades em programação, lógica, estrutura de dados, banco de dados e desenvolvimento web. Busco evoluir constantemente, praticando com projetos próprios e aprendendo tecnologias usadas no mercado.",

    aboutCard1Title: "Objetivo",
    aboutCard1Text:
      "Conquistar minha primeira oportunidade na área de tecnologia, aplicando meus conhecimentos e aprendendo com profissionais experientes.",

    aboutCard2Title: "Interesse",
    aboutCard2Text:
      "Desenvolvimento web, sistemas, dados e inteligência artificial. Gosto de aprender na prática e resolver problemas.",

    aboutCard3Title: "Evolução",
    aboutCard3Text:
      "Estou construindo meu portfólio com projetos pessoais e acadêmicos para demonstrar minha evolução como desenvolvedor.",

    skillsLabel: "Habilidades",
    skillsTitle: "Tecnologias que estou aprendendo",
    levelBasic: "Básico",
    levelIntermediate: "Intermediário",
    seeAllSkills: "Ver todas as habilidades",

    projectsLabel: "Projetos em desenvolvimento",
    projectsTitle: "O que estou construindo",

    project1Title: "Portfólio Pessoal",
    project1Text:
      "Site responsivo para apresentar minha trajetória, habilidades, projetos e contatos.",

    project2Title: "Sistema de Cadastro",
    project2Text:
      "Projeto para praticar formulários, validações e operações de cadastro com banco de dados.",

    project3Title: "Calculadora Web",
    project3Text:
      "Projeto simples para praticar JavaScript, lógica e manipulação de elementos na tela.",

    project4Title: "Estudos de Algoritmos",
    project4Text:
      "Repositório para registrar exercícios, lógica de programação e resolução de problemas.",

    contactTitle: "Vamos conversar?",
    contactText:
      "Estou aberto a oportunidades de estágio, projetos de estudo, networking e conversas sobre tecnologia.",
    sendMessage: "Enviar mensagem",

    footerText: "Feito com dedicação e café ☕"
  },

  en: {
    navHome: "Home",
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navContact: "Contact",

    badge: "Available to learn and grow",

    heroHello: "Hi, I am",
    heroRole1: "Student of",
    heroRole2: "Computer Science",
    heroRole3: "Developer in progress",
    heroDescription:
      "Building my path in technology with a focus on programming, web development, databases and digital solutions.",

    btnProjects: "View projects",
    btnContact: "Contact me",
    downloadCv: "Download resume",

    infoCourse: "Computer Science",
    infoFocus: "Focus",
    infoFocusText: "Development and Logic",
    infoGoal: "Goal",
    infoGoalText: "Grow, create and impact",

    metric1: "Semester<br />Computer Science",
    metric2: "Study hours<br />dedicated",
    metric3: "Technologies<br />explored",
    metric4: "Focus on growing<br />in IT",

    aboutLabel: "About me",
    aboutTitle: "More about me",
    aboutText:
      "I am a Computer Science student developing my skills in programming, logic, data structures, databases and web development. I aim to keep improving by practicing with personal projects and learning technologies used in the market.",

    aboutCard1Title: "Goal",
    aboutCard1Text:
      "To get my first opportunity in technology, applying my knowledge and learning from experienced professionals.",

    aboutCard2Title: "Interest",
    aboutCard2Text:
      "Web development, systems, data and artificial intelligence. I enjoy learning by doing and solving problems.",

    aboutCard3Title: "Growth",
    aboutCard3Text:
      "I am building my portfolio with personal and academic projects to show my progress as a developer.",

    skillsLabel: "Skills",
    skillsTitle: "Technologies I am learning",
    levelBasic: "Basic",
    levelIntermediate: "Intermediate",
    seeAllSkills: "View all skills",

    projectsLabel: "Projects in development",
    projectsTitle: "What I am building",

    project1Title: "Personal Portfolio",
    project1Text:
      "Responsive website to present my background, skills, projects and contact information.",

    project2Title: "Registration System",
    project2Text:
      "Project to practice forms, validations and registration operations with databases.",

    project3Title: "Web Calculator",
    project3Text:
      "Simple project to practice JavaScript, logic and screen element manipulation.",

    project4Title: "Algorithm Studies",
    project4Text:
      "Repository to register exercises, programming logic and problem solving.",

    contactTitle: "Let's talk?",
    contactText:
      "I am open to internship opportunities, study projects, networking and conversations about technology.",
    sendMessage: "Send message",

    footerText: "Made with dedication and coffee ☕"
  }
};

const ptBtn = document.getElementById("ptBtn");
const enBtn = document.getElementById("enBtn");

function changeLanguage(lang) {
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");

    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });

  if (lang === "pt") {
    ptBtn.classList.add("active");
    enBtn.classList.remove("active");
  } else {
    enBtn.classList.add("active");
    ptBtn.classList.remove("active");
  }
}

ptBtn.addEventListener("click", () => changeLanguage("pt"));
enBtn.addEventListener("click", () => changeLanguage("en"));

const menuLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  document.querySelectorAll("section[id]").forEach((section) => {
    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  menuLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});