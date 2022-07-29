const header = document.querySelector("header");
const toggleBtn = document.querySelector(".header__actions-btn-toggle");
const nav = document.querySelector(".header__nav");
const navOverlay = document.querySelector(".overlay");
const searchBtn = document.querySelector(".header__actions-btn-search");
const searchOverlay = document.querySelector(".search-overlay");
const searchCloseBtn = document.querySelector(".search-overlay__close");
const heartBtns = document.querySelectorAll(".courses__card-floating-btn");
const backTopBtn = document.querySelector(".back-top-btn");

// HELPERS
const toggleClass = (el) => el.classList.toggle("active");

// HANDLERS
const onWindowScroll = () => {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    header.classList.add("header-animate");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
    header.classList.remove("header-animate");
  }
};
const onToggleBtnClick = () => {
  toggleClass(nav);
  toggleClass(navOverlay);
};
const onNavClick = (e) => {
  if (e.target.tagName === "A" || e.target.className === "header__btn-close") {
    if (nav.classList.contains("active")) {
      toggleClass(nav);
      toggleClass(navOverlay);
    }
  }
};
const onNavOverlayClick = () => {
  if (navOverlay.classList.contains("active")) {
    toggleClass(nav);
    toggleClass(navOverlay);
  }
};

// ADD EVENTS
// window.addEventListener("scroll", onWindowScroll);
// toggleBtn.addEventListener("click", onToggleBtnClick);
// nav.addEventListener("click", onNavClick);
// navOverlay.addEventListener("click", onNavOverlayClick);
// searchBtn.addEventListener("click", () =>
//   searchOverlay.classList.add("active")
// );
// searchCloseBtn.addEventListener("click", () => toggleClass(searchOverlay));
// heartBtns.forEach((btn) =>
//   btn.addEventListener("click", () => toggleClass(btn))
// );
