// Scroll navbar start
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");
let disableScrollHandling = false;

function handleScroll() {
   let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
   if (!disableScrollHandling) {
      if (scrollTop > lastScrollTop) {
         if (!navbar.classList.contains("mobile-menu-open")) {
            navbar.classList.add("hidden-navbar");
            navbar.classList.remove("shown-navbar");
         }
      } else {
         if (!navbar.classList.contains("mobile-menu-open")) {
            navbar.classList.add("shown-navbar");
            navbar.classList.remove("hidden-navbar");
         }
      }
   }
   lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
}

window.addEventListener("scroll", handleScroll);

function handleLinkClick(event) {
   disableScrollHandling = true;
   setTimeout(() => {
      disableScrollHandling = false;
   }, 300); // Disable scroll handling for 300ms (adjust as needed)
}

const navLinks = document.querySelectorAll("#navbar a");
navLinks.forEach((link) => {
   link.addEventListener("click", handleLinkClick);
});
// Scroll navbar end

// Mobile nav toggle start
document.addEventListener("DOMContentLoaded", function () {
   const menuBurger = document.querySelector("#menuBurger");
   const iconBar = document.querySelector(".fa-bars");
   const navMobile = document.querySelector("#navMobile");
   const links = document.querySelectorAll("#navMobile a");

   menuBurger.addEventListener("click", function () {
      iconBar.classList.toggle("fa-x");
      navMobile.classList.toggle("hidden");
      navbar.classList.toggle("mobile-menu-open");
      if (navbar.classList.contains("mobile-menu-open")) {
         navbar.style.position = "fixed";
      } else {
         navbar.style.position = ""; // Resets position to default
      }
   });

   links.forEach((link) => {
      link.addEventListener("click", function () {
         iconBar.classList.remove("fa-x");
         navMobile.classList.add("hidden");
         navbar.classList.remove("mobile-menu-open");
         navbar.style.position = ""; // Resets position to default
      });
   });
});
// Mobile nav toggle end

// Handle active link start
document.addEventListener("DOMContentLoaded", function () {
   const menuLinks = document.querySelectorAll(
      "nav ul li a, #navMobile ul li a"
   );

   function handleClick(event) {
      menuLinks.forEach((link) => link.classList.remove("active"));
      event.target.classList.add("active");
   }

   menuLinks.forEach((link) => link.addEventListener("click", handleClick));
});
// Handle active link end

// Hide back to top button when at the top start
document.addEventListener("DOMContentLoaded", function () {
   const backToTopButton = document.getElementById("backToTopButton");

   window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
         backToTopButton.classList.remove("hidden");
      } else {
         backToTopButton.classList.add("hidden");
      }
   });
});
// Hide back to top button when at the top end

// Scroll reveal animation start
ScrollReveal({
   reset: true,
   distance: "60px",
   duration: 2500,
   delay: 400,
});
ScrollReveal().reveal("#berandaKiri", { delay: 400, origin: "left" });
ScrollReveal().reveal("#kananCard1", { delay: 400, origin: "left" });
ScrollReveal().reveal("#kananCard2", { delay: 200, origin: "right" });
ScrollReveal().reveal("#kananCard3", { delay: 700, origin: "bottom" });
ScrollReveal().reveal("#kecil1", { delay: 800, origin: "top" });
ScrollReveal().reveal("#kecil2", { delay: 800, origin: "left" });
ScrollReveal().reveal("#packageskiri1", { delay: 600, origin: "left" });
ScrollReveal().reveal("#packageskiri2", { delay: 400, origin: "right" });
ScrollReveal().reveal("#kanantext1", { delay: 500, origin: "top" });
ScrollReveal().reveal("#kanantext2", { delay: 600, origin: "right" });
ScrollReveal().reveal("#kanantext3", { delay: 900, origin: "right" });
ScrollReveal().reveal("#kanantext4", { delay: 1200, origin: "right" });
ScrollReveal().reveal("#aboutkiri1", { delay: 400, origin: "top" });
ScrollReveal().reveal("#aboutkiri2", { delay: 400, origin: "bottom" });
ScrollReveal().reveal("#aboutkanan1", { delay: 400, origin: "right" });
ScrollReveal().reveal("#aboutkanan2", { delay: 700, origin: "right" });
ScrollReveal().reveal("#aboutkanan3", { delay: 1100, origin: "right" });
// Scroll reveal animation end
