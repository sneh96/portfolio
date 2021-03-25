const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navigation__link");
  const navLinks = document.querySelectorAll(".navigation__item");

  burger.addEventListener("click", () => {
    // TOGGLE NAVIGATION
    nav.classList.toggle("nav-active");

    // ANIMATION LINKS
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    // BURGER ANIMATION
    burger.classList.toggle("toggle");
  });
};

navSlide();
