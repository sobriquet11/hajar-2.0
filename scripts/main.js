
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const burgerMenu = document.getElementById("burger-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Smooth scroll to sections
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" });
      setActiveLink(this);
    });
  });

  // Set the active link
  function setActiveLink(clickedLink) {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
    clickedLink.classList.add("active");
  }

  // Burger menu functionality
  burgerMenu.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  // Close navbar when clicking outside
  document.addEventListener("click", (e) => {
    if (!burgerMenu.contains(e.target) && !navbar.contains(e.target)) {
      navbar.classList.remove("active");
    }
  });

  // Highlight active link on scroll
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

 
});

document.addEventListener("DOMContentLoaded", () => {
  const circleContainer = document.querySelector(".circle-container");
  const contactSection = document.getElementById("contact");

  window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const contactOffsetTop = contactSection.offsetTop;
      const contactHeight = contactSection.offsetHeight;

      // Calculate scroll progress (0 = just entering, 1 = fully visible)
      let scrollProgress = (scrollY - contactOffsetTop + windowHeight) / contactHeight;
      scrollProgress = Math.min(Math.max(scrollProgress, 0), 1); // Keep between 0 and 1

      if (scrollY >= contactOffsetTop - windowHeight) {
          circleContainer.style.opacity = "1"; // Fade in when reaching contact section

          if (scrollProgress < 0.75) {
              let scaleValue = 0.5 + scrollProgress * 0.8;
              circleContainer.style.transform = `translateX(-50%) scale(${scaleValue})`;
          } else {
              circleContainer.style.transform = `translateX(-50%) scale(2)`;
          }
      } else {
          circleContainer.style.opacity = "0"; // Hide when scrolling back up
          circleContainer.style.transform = `translateX(-50%) scale(0.2)`;
      }
  });
});

