// ========================== NAVIGATION ==================================

// Main menu hover effects
$("li.main-menu").mouseenter(function () {
  if (
    $(".popup").is(":visible") ||
    $(".popup2").is(":visible") ||
    $(".popup3").is(":visible")
  ) {
    return; // Prevent action if any popup is visible
  }
  $(this).find(".sub-menu").stop().slideDown(400);
  $("header").addClass("on");
});

$("li.main-menu").mouseleave(function () {
  if (
    $(".popup").is(":visible") ||
    $(".popup2").is(":visible") ||
    $(".popup3").is(":visible")
  ) {
    return; // Prevent action if any popup is visible
  }
  $(this).find(".sub-menu").stop().slideUp(400);
  $("header").removeClass("on");
});

// ========================== SECTION 2 ====================================
// JavaScript 부분: .sect-2-c-list의 <li> 요소와 .sect-2-child 요소들을 관리
const listItems = document.querySelectorAll(".sect-2-c-list li a");
const childItems = document.querySelectorAll(".sect-2-child");

let currentIndex = null;

listItems.forEach((item, index) => {
  item.addEventListener("click", (event) => {
    event.preventDefault(); // 기본 클릭 동작을 막음

    if (currentIndex === index) {
      // 이미 선택된 항목을 다시 클릭한 경우
      childItems.forEach((child) => {
        child.classList.remove("selected");
      });
      currentIndex = null; // 현재 인덱스를 리셋
    } else {
      // 새로운 항목을 클릭한 경우
      // 1. 모든 .sect-2-child 요소에서 'selected' 클래스 제거
      childItems.forEach((child) => {
        child.classList.remove("selected");
      });

      // 2. 클릭된 항목에 해당하는 요소에 'selected' 클래스 추가
      childItems[index].classList.add("selected");
      currentIndex = index; // 현재 인덱스를 업데이트
    }

    // selected 클래스가 있는 경우에만 jQuery 코드 실행
    if (childItems[index].classList.contains("selected")) {
      // jQuery 부분: 클래스 토글과 애니메이션 관리
      $(".sect-2-c-list li").removeClass("on"); // 모든 li 요소에서 'on' 클래스 제거
      $(item).parent().addClass("on"); // 클릭된 li의 부모 요소에 'on' 클래스 추가
    }
  });
});


$(".sect-2-child a").click(function () {
  if ($(this).closest(".sect-2-child").hasClass("selected")) {
    mainHide(); // 선택된 .sect-2-child 요소가 있을 때만 실행
  }
});

$(".sect-2-close").click(function () {
  if ($(".sect-2-child.selected").length > 0) {
    mainShow(); // 선택된 .sect-2-child 요소가 있을 때만 실행
  }
});

// Show and hide animations
function mainHide() {
  $(".sect-2-child.selected,.sect-2-child.s2").animate({ left: "-3000px" }, 500); // selected가 있는 .sect-2-child만 애니메이션
  $(".sect-2-c-list").delay(300).animate({ left: "3000px" }, 1000);
  $(".sect-2-iframe").fadeIn(1800);
  $(".sect-2-close").fadeIn(1800);
}

function mainShow() {
  $(".sect-2-child.selected,.sect-2-child.s2").animate({ left: "0px" }, 1100); // selected가 있는 .sect-2-child만 애니메이션
  $(".sect-2-c-list").delay(300).animate({ left: "5%" }, 1000);
  $(".sect-2-iframe").fadeOut(1800);
  $(".sect-2-close").fadeOut(1800);
}

// ========================== MODAL =======================================

// Popup modals
$("#sect-box3").click(function () {
  $(".popup").fadeIn();
});

$(".modal-close").click(function () {
  $(".popup").fadeOut();
});

$(".image-8").click(function () {
  $(".popup3").fadeIn();
});

$(".modal-close3").click(function () {
  $(".popup3").fadeOut();
});

$("#sect-box8").click(function () {
  $(".popup2").fadeIn();
});

$(".modal-close2").click(function () {
  $(".popup2").fadeOut();
});

// Modal-3 functionality with page reload
$(document).ready(function () {
  // Initialize first item and summary visibility
  $(".boss-item li").first().addClass("on");
  $(".boss-item").each(function () {
    $(this).find("li").first().addClass("on");
  });

  $(".boss-summary").each(function () {
    $(this).find("li").hide(); // Hide all li elements
    $(this).find("li:first-child").show(); // Show only the first li element
  });

  // Handle product image and summary updates
  $(".boss-item li a").click(function (e) {
    e.preventDefault();
    let productImg = $(this).attr("href");
    $(this).closest(".boss").find("figure img").attr("src", productImg);

    let idx = $(this).parent().index();

    // Update active button and product description
    $(this).parent().siblings().removeClass("on");
    $(this).parent().addClass("on");
    $(this).closest(".boss-more").find(".boss-summary li").hide();
    $(this).closest(".boss-more").find(".boss-summary li").eq(idx).show();
  });

  // Handle more button click
  $(".more").click(function () {
    let $this = $(this);
    let $bossMore = $this.closest(".boss").find(".boss-more");

    if ($this.hasClass("on")) {
      $this.removeClass("on");
      $bossMore.slideUp();
    } else {
      $(".more").removeClass("on");
      $(".boss-more").slideUp();
      $this.addClass("on");
      $bossMore.slideDown();
    }
  });

  // Close modal and reload page
  $(".modal-close3").click(function (e) {
    e.preventDefault();
    location.reload(); // Reload the page
  });
});
