// MENÚ VARIABLES
const menuButton = document.querySelector("#menu-button");
const menuItems = document.querySelector("#menu");
const menuButtonSpans = document.querySelectorAll("#menu-button span");
const links = document.querySelectorAll("#menu a");

// ABRE EL MENÚ
menuButton.addEventListener("click", () => {
  menuItems.classList.toggle("hidden");

  menuButtonSpans.forEach((span) => {
    span.classList.toggle("animado");
  });
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    menuItems.classList.add("hidden");
    menuButtonSpans.forEach((span) => {
      span.classList.remove("animado");
    });
  });
});

// CIERRA MENÚ ON RESIZE
window.onresize = function () {
  let w = window.outerWidth;
  if (w > 768) {
    menuItems.classList.add("hidden");
    menuButtonSpans.forEach((span) => {
      span.classList.remove("animado");
    });
  }
};

// DARK MODE
const darkButton = document.querySelector("#darkButton");
const sunIcon = document.querySelector('#sun')
const moonIcon = document.querySelector('#moon')

darkButton.addEventListener("click", function () {
  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
      sunIcon.classList.remove('hidden');
      moonIcon.classList.add('hidden')
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
      sunIcon.classList.add('hidden');
      moonIcon.classList.remove('hidden');
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
      sunIcon.classList.add('hidden');
      moonIcon.classList.remove('hidden');
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
      moonIcon.classList.add('hidden');
      sunIcon.classList.remove('hidden');
    }
  }
});

//  VARIABLES SECCIÓN EXPERIENCIA LABORAL 
const jobSection = document.querySelector('#jobSection');
const articles = document.querySelectorAll('#jobSection article');

jobSection.addEventListener('click', function (event) {
  const id = event.target.dataset.id;

  if(id) {
    articles.forEach((article) => {
      article.classList.add('hidden');
    });
    const element = document.getElementById(id);
    element.classList.remove('hidden');
  }
});

const jobLinks = document.querySelectorAll('#jobSection button');
const firstLink = document.querySelector('#link1');

jobLinks.forEach((link) => {
  link.addEventListener('click', () => {
      firstLink.classList.remove('border-sky-500', 'bg-white', 'dark:bg-slate-700');
  });
});