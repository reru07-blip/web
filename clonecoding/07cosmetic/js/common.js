document.addEventListener('DOMContentLoaded', () => {
  //햄버거 메뉴 클릭시 헤터에 온 클래스 토글
  const $ham = document.querySelector('.ham');
  const $header = document.querySelector('header');
  $ham.addEventListener('click', () => {
    $header.classList.toggle('on');
    document.body.classList.toggle('rock');
  });

  //메뉴 li들의 순차적 딜레이 주기
  const gnbItems = document.querySelectorAll('header .fix .gnb>ul>li');
  gnbItems.forEach((li, index) => {
    li.style.transitionDelay = `${0.2 * (index + 1)}s`
  });

});//end