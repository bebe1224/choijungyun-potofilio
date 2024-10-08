$("li.story").click(function () {
  mainHide();
  lineShow();
});

$("#sect1 a.close").click(function () {
  mainShow();
  lineHide();
});
$("li.recipe").click(function () {
  mainHide();
  sect2Show();
});
$("#sect2 a.close2").click(function () {
  mainShow();
  sect2Hide();
});

// =====================================================

function lineShow() {
  $(".top")
    .delay(500)
    .animate({ width: "100%" }, 500, function () {
      $(".right").animate({ height: "100%" }, 500, function () {
        $(".bottom").animate({ width: "100%" }, 500, function () {
          $(".left").animate({ height: "100%" }, 500, function () {
            $("#sect1 figure").fadeIn();
          });
        });
      });
    });
}

function lineHide() {
  $(".top").animate({ width: "0%" });
  $(".right").animate({ height: "0%" });
  $(".bottom").animate({ width: "0%" });
  $(".left").animate({ height: "0%" }, 500, function () {
    $("#sect1 figure").fadeOut();
  });
}

function sect2Show() {
  $("#sect2").show();
  $("#sect2").animate({ height: "394px" }, 500);
}

function sect2Hide() {
  $("#sect2").fadeOut();
  $("#sect2").animate({ height: "0px" }, 500);
}

// ============================================

function mainHide() {
  $("main .video").animate({ top: "-1000px" }, 500);
  $("ul.menu").delay(300).animate({ top: "1000px" }, 500);
  $(".main-visual").addClass("on");
  $("#sect1").show();
}

function mainShow() {
  $("main .video").animate({ top: "-0" }, 500);
  $("ul.menu").delay(300).animate({ top: "0" }, 500);
  $(".main-visual").removeClass("on");
  $("#sect1").hide();
}
// =====================================================
