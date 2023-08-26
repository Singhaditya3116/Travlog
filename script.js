const hamburgerBtn = document.getElementById("hamburger");
const navbarContainer = document.querySelector(".navbar");

function toggleNavbar() {
  // console.log(navbarContainer.style.display);
  if (navbarContainer.style.display === "none") {
    navbarContainer.style.display = "flex";
  } else {
    navbarContainer.style.display = "none";
  }
}

function toggleNavbarOnResize() {
  if (window.matchMedia("(max-width: 800px)").matches) {
    // Viewport is less or equal to 700 pixels wide
    navbarContainer.style.display = "none";
  } else {
    // Viewport is greater than 700 pixels wide
    navbarContainer.style.display = "flex";
  }
}

hamburgerBtn.addEventListener("click", toggleNavbar);
window.addEventListener("resize", toggleNavbarOnResize);
