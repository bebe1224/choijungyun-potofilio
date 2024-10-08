$("li.main-menu").mouseenter(function () {
  $(this).find(".sub-menu").slideDown();
});

$("li.main-menu").mouseleave(function () {
  $(this).find(".sub-menu").stop().slideUp();
});
//===========
// window.addEventListener("scroll", function () {
//   const sect1 = document.querySelector(".sect1");
//   const visualTitle = document.querySelector(".visual_title");

//   const sect1Rect = sect1.getBoundingClientRect();
//   if (sect1Rect.bottom <= 0) {
//     visualTitle.style.display = "none";
//   } else {
//     visualTitle.style.display = "flex";
//   }
// });
