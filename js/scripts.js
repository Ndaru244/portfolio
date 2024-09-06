/*!
 * Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
 */
//
// Scripts
//
const lightbox = GLightbox({
  selector: 'a[data-gallery="gallery1"]',
  selector: 'a[data-gallery="gallery2"]',
});

document
  .getElementById("languageToggle")
  .addEventListener("change", function () {
    const isEnglish = this.checked;
    const elements = document.querySelectorAll("[data-en]");
    const languageIcon = document.getElementById("languageIcon");

    elements.forEach((element) => {
      if (isEnglish) {
        element.textContent = element.getAttribute("data-en");
        languageIcon.className = "fi fi-us"; // Change to US flag for English
      } else {
        element.textContent = element.getAttribute("data-id");
        languageIcon.className = "fi fi-id"; // Change to Indonesia flag for Bahasa
      }
    });

    // Simpan preferensi bahasa di localStorage
    localStorage.setItem("language", isEnglish ? "en" : "id");
  });

// Set language based on previous selection
document.addEventListener("DOMContentLoaded", function () {
  const savedLang = localStorage.getItem("language") || "en";
  const languageToggle = document.getElementById("languageToggle");
  const isEnglish = savedLang === "en";

  languageToggle.checked = isEnglish;
  languageToggle.dispatchEvent(new Event("change")); // Apply saved language
});

window.addEventListener("DOMContentLoaded", (event) => {
  let savedLang = localStorage.getItem("language");
  if (!savedLang) {
    savedLang = "en";
    localStorage.setItem("language", "en");
  }
  const languageToggle = document.getElementById("languageToggle");
  const isEnglish = savedLang === "en";
  languageToggle.checked = isEnglish;
  languageToggle.dispatchEvent(new Event("change"));

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
