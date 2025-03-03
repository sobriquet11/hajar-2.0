document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const burgerMenu = document.getElementById("burger-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const circleContainer = document.querySelector(".circle-container");

  // Vérifie que les éléments existent avant d'ajouter des événements
  if (burgerMenu && navbar) {
    burgerMenu.addEventListener("click", () => {
      navbar.classList.toggle("active");
      burgerMenu.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
      if (!burgerMenu.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove("active");
        burgerMenu.classList.remove("active");
      }
    });
  }

  // Smooth Scroll
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
        setActiveLink(this);
        navbar.classList.remove("active");
        burgerMenu.classList.remove("active");
      }
    });
  });

  function setActiveLink(clickedLink) {
    navLinks.forEach((link) => link.classList.remove("active"));
    clickedLink.classList.add("active");
  }

  // Changement de lien actif au scroll
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    navLinks.forEach((link) => {
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        if (
          targetSection.offsetTop <= scrollPosition &&
          targetSection.offsetTop + targetSection.offsetHeight > scrollPosition
        ) {
          setActiveLink(link);
        }
      }
    });
  });

  // ✅ Animation GSAP
  if (typeof gsap !== "undefined" && circleContainer) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(circleContainer, {
      width: "150vw",  // Le cercle devient plus large
      height: "150vh", // Il devient aussi plus haut
      borderRadius: "50vw 50vw 0 0", // Garde la forme d’un demi-cercle
      scrollTrigger: {
        trigger: "#contact",
        start: "top bottom", 
        end: "bottom top", 
        scrub: true, // Animation fluide avec le scroll
      }
    });
  }
});

