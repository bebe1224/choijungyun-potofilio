document.querySelector("a#home").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", function () {
  const hom = document.querySelector("a#home");

  if (window.scrollY === 0) {
    hom.style.opacity = "0";
  } else {
    hom.style.opacity = "1";
  }
});

const Hmenu = document.querySelector(".menu");
const Mnav = document.querySelector(".m-nav");
const Xmenu = document.querySelector(".x");

document.addEventListener("DOMContentLoaded", function () {
  Hmenu.addEventListener("click", function () {
    Hmenu.classList.add("active");
    Mnav.classList.add("active");

  });

  Xmenu.addEventListener("click", function () {
    Hmenu.classList.remove("active");
    Mnav.classList.remove("active");
  });
});
