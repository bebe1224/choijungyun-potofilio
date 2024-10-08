const Hmenu = document.querySelector(".h-menu");
const Mnav = document.querySelector(".m-nav");
const Xmenu = document.querySelector(".x");

document.addEventListener("DOMContentLoaded", function () {
  Hmenu.addEventListener("click", function () {
    Hmenu.classList.add("active");
    Mnav.classList.add("active");
    Xmenu.classList.add("on"); // .x 표시
  });

  Xmenu.addEventListener("click", function () {
    Hmenu.classList.remove("active");
    Mnav.classList.remove("active");
    Xmenu.classList.remove("on"); // .x 숨기기
  });
});
