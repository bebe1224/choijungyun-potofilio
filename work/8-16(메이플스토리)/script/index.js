let currentClass = "기본값";
$("ul.bts li").click(function () {
  //   alert(currentClass);
  $("ul.bts li").removeClass("on");
  $(this).addClass("on");

  let liElem = $(this).find('p').text();
  // alert(liElem)
  let activeClass = "show" + liElem;
  //   기본클래스값이 존재할때만 실행됨 즉 참일때만
  if (currentClass) {
    $(".cube").removeClass(currentClass);
  }
  $(".cube").addClass(activeClass);
  currentClass = activeClass;
});
