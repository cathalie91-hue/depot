// Selectors
const navbarMenu = document.querySelector(".navbar .links");
const menuBtn = document.querySelector(".navbar .menu-btn");
const hideMenuBtn = document.querySelector(".navbar .links .close-btn");

const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");

const loginSignupLink = document.querySelectorAll(".form-box .bottom-link a");

// Show mobile menu
menuBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () => {
  navbarMenu.classList.remove("show-menu");
});

// Show form popup
showPopupBtn.addEventListener("click", () => {
  document.body.classList.toggle("show-popup");
});

// Hide form popup
hidePopupBtn.addEventListener("click", () => {
  document.body.classList.remove("show-popup");
});

// Switch Login <--> Signup
loginSignupLink.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    if (link.id === "signup-link") {
      formPopup.classList.add("show-signup");
    } else {
      formPopup.classList.remove("show-signup");
    }
  });
});

