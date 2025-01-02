/*!
 * Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
 */

const lightbox1 = GLightbox({
  selector: 'a[data-gallery="gallery1"]',
});

const lightbox2 = GLightbox({
  selector: 'a[data-gallery="gallery2"]',
});

const lightbox3 = GLightbox({
  selector: 'a[data-gallery="gallery3"]',
});

// load language JSON
function loadLanguageData() {
  return fetch("languages.json")
    .then((response) => response.json())
    .catch((error) => console.error("Error loading languages:", error));
}

function updateLanguage(language, languageData) {
  document.querySelectorAll("[data-key]").forEach((element) => {
    const key = element.getAttribute("data-key");
    const keys = key.split(".");
    let translation = languageData[language];

    keys.forEach((k) => {
      translation = translation[k];
    });

    if (translation) {
      element.innerHTML = translation;
    }
  });
}

// Language switcher
document
  .getElementById("languageToggle")
  .addEventListener("change", function () {
    const language = this.checked ? "en" : "id";

    loadLanguageData().then((languageData) => {
      updateLanguage(language, languageData);

      const languageIcon = document.getElementById("languageIcon");
      languageIcon.classList.toggle("fi-us", language === "en");
      languageIcon.classList.toggle("fi-id", language === "id");
    });
  });

// Load default language
document.addEventListener("DOMContentLoaded", function () {
  loadLanguageData().then((languageData) => {
    updateLanguage("en", languageData);
  });
});

// Set language based on previous selection
document.addEventListener("DOMContentLoaded", function () {
  const savedLang = localStorage.getItem("language") || "en";
  const languageToggle = document.getElementById("languageToggle");
  const isEnglish = savedLang === "en";

  languageToggle.checked = isEnglish;
  languageToggle.dispatchEvent(new Event("change"));
});

// Filter Portfolio
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = [
    document.getElementById("filterAll"),
    document.getElementById("filterUiUx"),
    document.getElementById("filterWebApp"),
  ];
  const portfolioItems = document.querySelectorAll(".porto-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      filterButtons.forEach((btn) => {
        btn.classList.remove("btn-primary");
        btn.classList.add("btn-outline-primary");
      });

      this.classList.remove("btn-outline-primary");
      this.classList.add("btn-primary");

      const filter = this.getAttribute("data-filter");

      portfolioItems.forEach((item) => {
        const category = item.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          item.classList.remove("d-none");
        } else {
          item.classList.add("d-none");
        }
      });
    });
  });
});

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});
