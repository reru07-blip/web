document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  //Lenis는 마우스 휠 스크롤을 부드럽게 만들어 줍니다
  //GSAP ScrollTeigger와 같이 쓰면 스크롤 애니메이션도 더 자연스럽게 붙는다
  const lenis = new Lenis({
    //자동실행 대신 우리가 직접 프레임을 돌리게 한다
    autoRaf: false,
    //스크롤이 살짝 따라오는 시간을 정한다
    duration: 0.8,
    //들어온 값을 그대로 써서 일정
    easing: (t) => t,
    //마우스 휠 스크롤을 부드럽게 만듦
    smoothWheel: true,
    //터치 스크롤도 레니스 흐름과 맞춤
    syncTouch: true,
  });
  // 매 프레임마다 레니스와 스크롤 트리거를 같이 업데이트해야 스크롤 애니가 어긋나지 않음
  function raf(time) {
    //지금 프레임의 시간을 레니스에게 알림
    lenis.raf(time);
    //스크롤트리거가 현재 스크롤 위치를 다시 계산
    ScrollTrigger.update();
    //다음 화면 프레임에서도 같은 잉ㄹ 반복
    requestAnimationFrame(raf);
  }
  //브라우저 애니 프레임 루프 시작
  requestAnimationFrame(raf);

  const siteHeader = document.getElementById('site_header');
  const menuToggle = document.getElementById('menu_Toggle');
  const mobilepanel = document.querySelector('.mobilepanel');
  const navLinks = document.querySelectorAll('mobile_nav, primary_nav a');

  //직전 스크롤 위치 저장 방향 비교
  let lastY = 0;
  lenis.on('scroll', ({ scroll }) => {
    //해더가 없으면 진행 X
    if (!siteHeader) return;

    //
    const y = scroll;

    //이래로 충분히 내렸고 첫 화면을 지난 상태면 헤더를 위로 숨김
    if (y > lastY + 4 && y > 120) {
      siteHeader.style.transform = 'translateY(-100%)'
    } else if (y < lastY - 4) {
      siteHeader.style.transform = 'translateY(0)'
    }
    lastY = y;

    updateActiveFromViewport();
  });

  //모바일 메뉴 버튼이 누르면 메뉴 패널이 열리고 닫힘
  if (menuToggle && mobilepanel) {
    menuToggle.addEventListener('click', () => {
      //is_open 클래스를 켜거나 끄고 , 결과를 true, false로 받는다
      const isOpen = mobilepanel.classList.toggle('is_open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    })
  }
  //메뉴 링크를 누른 뒤 모바일 메뉴를 닫아 화면을 넓게 보임
  function closMobileMenu(){
    if(!menuToggle || !mobilepanel) return;
    mobilepanel.classList.remove('is_open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
  const sectionMap = {

  }

  function updateActiveFromViewport() {

  }


  gsap.timeline({default:{duration:0.8, ease: 'power2.out'}})
  .to('hero_title',{y:0,opacity:1})
  .to('hero_title',{y:0,opacity:1}, )
  .to('hero_title',{y:0,opacity:1});


  document.querySelectorAll('.magnet_zone').forEach((zone)=>{
    const btn = zone.querySelector('.cta_btn');
    //버튼 없으면 자석효과 줄 대상도 없으니 멈춤
    if(!btn) return;
    zone.addEventListener('mousemove',(e)=>{
      //zone의 화면 위치와 크기를 가져옴
      const rect = zone.getBoundingClientRect();
      //마우스가 존 중앙에서 가로/세로로 얼마나 떨어졌는지 계산
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      //계산한 거리의 10%만큼만 버튼을 움직여 과하지 않게 만듦
      btn.style.transform = `translate(${x * 0.1},${y * 0.1});`
    });

    zone.addEventListener('mouseleave',()=>{
      btn.style.transform = ``
    })
  })
});//end