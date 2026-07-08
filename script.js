const translations = {
  pt: {
    navHome: "Início",
    navAbout: "Sobre",
    navSkills: "Habilidades",
    navProjects: "Projetos",
    navContact: "Contato",

    badge: "Estudando, praticando e evoluindo todos os dias",

    heroHello: "Olá, eu sou",
    heroRole1: "Estudante de",
    heroRole2: "Ciência da Computação",
    heroRole3: "Desenvolvedor em formação",
    heroDescription:
      "Estou desenvolvendo minha base em programação, desenvolvimento web e banco de dados. Meu foco é aprender na prática, criar projetos reais e evoluir como futuro profissional de tecnologia.",

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
      "Sou estudante de Ciência da Computação e estou construindo minha base em programação, lógica, desenvolvimento web e banco de dados. Gosto de aprender na prática, transformar estudos em projetos e evoluir constantemente para conquistar minha primeira oportunidade na área de tecnologia.",

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
    projectsTitle: "Minha evolução em código",

    project1Title: "Meu Primeiro Portfólio",
    project1Text:
      "Projeto criado para apresentar minha trajetória, habilidades, contatos e evolução como estudante de Ciência da Computação.",

    project2Title: "Práticas de Cadastro",
    project2Text:
      "Projeto planejado para praticar formulários, validações, lógica de programação e operações básicas de cadastro.",

    project3Title: "Desafios com JavaScript",
    project3Text:
      "Projetos simples para praticar lógica, interação com a página e manipulação de elementos na tela.",

    project4Title: "Exercícios da Faculdade",
    project4Text:
      "Repositório para registrar exercícios, lógica de programação, estruturas de repetição, funções e resolução de problemas.",

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

    badge: "Studying, practicing and improving every day",

    heroHello: "Hi, I am",
    heroRole1: "Student of",
    heroRole2: "Computer Science",
    heroRole3: "Developer in progress",
    heroDescription:
      "I am developing my foundation in programming, web development and databases. My focus is to learn by practicing, create real projects and grow as a future technology professional.",

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
      "I am a Computer Science student building my foundation in programming, logic, web development and databases. I like learning by practicing, turning studies into projects and constantly improving to get my first opportunity in technology.",

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
    projectsTitle: "My growth through code",

    project1Title: "My First Portfolio",
    project1Text:
      "Project created to present my background, skills, contacts and growth as a Computer Science student.",

    project2Title: "Registration Practice",
    project2Text:
      "Planned project to practice forms, validations, programming logic and basic registration operations.",

    project3Title: "JavaScript Challenges",
    project3Text:
      "Simple projects to practice logic, page interaction and screen element manipulation.",

    project4Title: "College Exercises",
    project4Text:
      "Repository to register exercises, programming logic, loops, functions and problem solving.",

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
