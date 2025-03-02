document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const burgerMenu = document.getElementById("burger-menu");
  const navLinks = document.querySelectorAll(".nav-link");


  // Toggle Navbar & Burger Animation
  burgerMenu.addEventListener("click", () => {
    navbar.classList.toggle("active");
    burgerMenu.classList.toggle("active");
  });

  // Close Navbar on Outside Click
  document.addEventListener("click", (e) => {
    if (!burgerMenu.contains(e.target) && !navbar.contains(e.target)) {
      navbar.classList.remove("active");
      burgerMenu.classList.remove("active");
    }
  });

  // Smooth Scroll & Active Link Highlighting
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" });
      setActiveLink(this);
      navbar.classList.remove("active"); // Close menu on click
      burgerMenu.classList.remove("active");
    });
  });

  function setActiveLink(clickedLink) {
    navLinks.forEach((link) => link.classList.remove("active"));
    clickedLink.classList.add("active");
  }

  // Highlight Active Link on Scroll
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    navLinks.forEach((link) => {
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (
        targetSection.offsetTop <= scrollPosition &&
        targetSection.offsetTop + targetSection.offsetHeight > scrollPosition
      ) {
        setActiveLink(link);
      }
    });
  });

  // Circle Section Animation
  const circleContainer = document.querySelector(".circle-container");
  const contactSection = document.getElementById("contact");

  // Circle Animation on Scroll
  window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const contactOffsetTop = contactSection.offsetTop;
      const contactHeight = contactSection.offsetHeight;

      let scrollProgress = (scrollY - contactOffsetTop + windowHeight) / contactHeight;
      scrollProgress = Math.min(Math.max(scrollProgress, 0), 1); // Keep between 0 and 1

      if (scrollY >= contactOffsetTop - windowHeight) {
          circleContainer.style.opacity = "1"; // Fade in when reaching contact section

          let scaleValue = 0.5 + scrollProgress * 1.2; // Grows dynamically
          circleContainer.style.transform = `translateX(-50%) scale(${scaleValue})`;
      } else {
          circleContainer.style.opacity = "0"; // Hide when scrolling back up
          circleContainer.style.transform = `translateX(-50%) scale(0.3)`;
        }
  });
});