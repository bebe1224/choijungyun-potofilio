document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('intro-video'),
          videoContainer = document.getElementById('video-container'),
          pageContent = document.getElementById('page-content'),
          skipButton = document.getElementById('skip-button');

    const sections = ['.art-1 .item', '.art-2 .item', '.art-3 .item'].map(selector => document.querySelectorAll(selector));



    // 비디오 끝난 후 실행될 함수
    function onVideoEnd() {
        videoContainer.style.display = 'none';
        pageContent.style.display = 'block';
        pageContent.classList.add('show');

        // 모든 섹션의 애니메이션을 순차적으로 시작
        let delay = 500; // 비디오가 끝난 후 대기 시간
        sections.forEach(function(items) {
            setTimeout(function() {
                items.forEach(function(item, index) {
                    item.style.transitionDelay = (index * 0.1) + 's';
                    item.classList.add('show');
                });
            }, delay);

            // 각 섹션의 애니메이션 총 길이만큼 대기 시간 추가
            delay += items.length * 100;
        });
    }

    // 비디오가 끝났을 때 이벤트 핸들러 호출
    video.addEventListener('ended', onVideoEnd);

    // "Skip" 버튼 클릭 시 비디오 건너뛰기
    skipButton.addEventListener('click', function() {
        video.pause(); // 비디오 재생 중지
        onVideoEnd(); // 비디오 종료 후 처리 호출
    });
});

// 메뉴 아이콘 클릭 시 이벤트 처리
$('.menu-icon').click(function() {
    // $(this).fadeOut(); 
    $("header").addClass('on');
    $("section").addClass('on'); 
    
    
 // if 조건문 내부에 조건식을 넣습니다.
if ($('.bar').hasClass('on')) {
    // 조건이 참일 때 실행할 코드
    $('.bar').removeClass('on');
} else {
    // 조건이 거짓일 때 실행할 코드
    $('.bar').addClass('on');
}


});

// 메뉴 항목 클릭 시 이벤트 처리
$('.menu-li li').click(function() {  
    // $('.menu-icon').fadeIn();
    let idx = $(this).index(); // 클릭한 메뉴 항목의 인덱스를 가져옴
    $('body').removeClass();  // body에서 모든 클래스를 제거
    $("body").addClass('bg' + idx);  // bg+인덱스 번호 클래스 추가
    $('article').removeClass('on');  // 모든 article 요소에서 'on' 클래스를 제거
    $('article').eq(idx).addClass('on');  // 인덱스에 해당하는 article 요소에 'on' 클래스 추가
    $('section').removeClass('on')
    $('header').removeClass('on')
    
});
