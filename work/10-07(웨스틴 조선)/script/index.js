const listElems = document.querySelectorAll("nav ul li");
const sections = document.querySelectorAll("section");
sections[0].classList.add("on");

const Hmenu = document.querySelector(".menu");
const Mnav = document.querySelector(".m-nav");
const Xmenu = document.querySelector(".x");
// =========================================
listElems.forEach((li) => {
  const link = li.querySelector('a[href^="#sect"]');

  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const secTop = document.querySelector(href);

    window.scrollTo({
      top: secTop.offsetTop,
      behavior: "smooth",
    });
  });
});

sections.forEach((sect, i) => {
  sect.addEventListener("wheel", function (e) {
    e.preventDefault(); //wheel 다운하면 +값이 발생되고 UP -값이 발생
    let delta = e.deltaY; // 휠의 방향을 감지함. (양수: 아래로 스크롤, 음수: 위로 스크롤)

    if (delta < 0 && i === 0) {
      // ===(값과 데이터 타입이 모두 같을 때만 **참(true)**을 반환)
      // 마우스 휠을 위로 돌렸을 때(delta < 0) 첫 번째 섹션(i === 0)인 경우
      return;
      // 더 위로 스크롤할 수 없으므로 아무 동작도 하지 않고 함수 종료(return).
    } else if (delta > 0 && i === sections.length - 1) {
      // 마우스 휠을 아래로 돌렸을 때(delta > 0) 마지막 섹션(i === sections.length - 1)인 경우
      return;
      // 더 아래로 스크롤할 수 없으므로 아무 동작도 하지 않고 함수 종료(return).
    }

    let secTop =
      delta < 0 ? sect.previousElementSibling : sect.nextElementSibling;
    // 휠을 위로 돌리면 이전 형제 섹션, 아래로 돌리면 다음 형제 섹션을 선택
    if (secTop) {
      let targetSecTop = secTop.offsetTop;
      // 이동할 섹션이 있을 경우, 그 섹션의 상단 위치(offsetTop)를 가져옴
      window.scrollTo({ top: targetSecTop, behavior: "smooth" });
      // 해당 섹션의 상단으로 부드럽게 스크롤
    }
  });
});
// ===============메뉴 밑줄 생기는거=======================

listElems.forEach((item) => {
  item.addEventListener("click", function () {
    // 모든 메뉴 항목에서 active 클래스 제거
    listElems.forEach((i) => i.classList.remove("active"));
    //여기서 아이는 각배열에 있는 예를들어 ul에 있는 li들을 의미한다

    // 클릭한 메뉴 항목에 active 클래스 추가
    this.classList.add("active");
  });
});

// ====== 아까배운거 일일히 쓸 필요 없음 =======
window.addEventListener("scroll", function () {
  let scrollTop = document.documentElement.scrollTop;

  sections.forEach((section, i) => {
    let sectionTop = section.offsetTop;
    console.log(sectionTop);
    if (scrollTop >= sectionTop - 100) {
      for (const li of listElems) {
        li.classList.remove("active");
      }
      for (const sec of sections) {
        sec.classList.remove("on");
      }

      listElems[i].classList.add("active");
      sections[i].classList.add("on");
    //   listElems[i].classList.add("active");
    }
  });
});

// ============== 모바일 메뉴 ==============
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
// ============ 아까배운거 일일히 써야함 ============
// window.addEventListener("scroll", function () {
//     let scrollTop = document.documentElement.scrollTop;
//     let winHeight = this.window.innerHeight;
//     for (const li of listElems) {
//       li.classList.remove("on");
//     }
//     for (const sec of sections) {
//       sec.classList.remove("on");
//     }

//     if (scrollTop >= 0 && scrollTop < winHeight) {
//       listElems[0].classList.add("on");
//       sections[0].classList.add("on");
//     }

//     if (scrollTop >= winHeight && scrollTop < winHeight * 2) {
//       listElems[1].classList.add("on");
//       sections[1].classList.add("on");
//     }

//     if (scrollTop >= winHeight * 2 && scrollTop < winHeight * 3) {
//       listElems[2].classList.add("on");
//       sections[2].classList.add("on");
//     }
//     if (scrollTop >= winHeight * 3 && scrollTop < winHeight * 4) {
//       listElems[3].classList.add("on");
//       sections[3].classList.add("on");
//     }
//     if (scrollTop >= winHeight * 4 && scrollTop < winHeight * 5) {
//       listElems[4].classList.add("on");
//       sections[4].classList.add("on");
//     }
//     if (scrollTop >= winHeight * 5 && scrollTop < winHeight * 6) {
//       listElems[5].classList.add("on");
//       sections[5].classList.add("on");
//     }

//     for (let i = 0; i < sections.length; i++) {
//       if (scrollTop >= winHeight * i && scrollTop < winHeight * (i + 1)) {
//         listElems[i].classList.add("on");
//         sections[i].classList.add("on");
//       }
//     }
//   });
