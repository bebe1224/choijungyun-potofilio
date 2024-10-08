var $grid = $(".container").isotope({
  itemSelector: ".grid-item",
  masonry: {
    columnWidth: ".grid-item",
    gutter: 18, // gutter 설정
  },
});

$(".menu li a").on("click", function (e) {
  e.preventDefault();
  $(".menu li a").removeClass("on");
  $(this).addClass("on");

  var filterValue = $(this).attr("data-filter");
  $grid.isotope({ filter: filterValue });
});

$(document).ready(function () {
  $(".grid-item").hoverdir({
    speed: 300, // 애니메이션 속도
    easing: "ease", // 이징 함수
    hoverElem: ".summary", // 애니메이션할 요소
  });
});

$(".grid-item").each(function () {
  $(this).hoverdir();
});
Fancybox.bind("[data-fancybox]", {
});

// --- 사용한 사이트 ---

//https://isotope.metafizzy.co/ 아이소토페
//https://tympanus.net/TipsTricks/DirectionAwareHoverEffect/ 호버시 이펙트
// https://fancyapps.com/fancybox/ 펜시
//<a data-fancybox="gallery" data-src="./imgs/9.jpg">펜시 쓸때 사용법