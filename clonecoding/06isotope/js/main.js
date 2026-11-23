window.addEventListener('load', () => {
  const grid = new Isotope('section', { //배치할 요소를
    itemSelector: 'article',
    columWidth: 'article',
    transitionDuration: '0.5s'
  });

  //모든 버튼 변수에 저장
  const btns = document.querySelectorAll('main ul li');
  for (let btn of btns) {
    btn.addEventListener('click', e => {
      e.preventDefault();
      //변수 sort에 클릭한 대상의 자식인 a요소의 href
      const sort = e.currentTarget.querySelectorAll('a').getAttribute('href');
      // console.log(sort);
      grid.arrange({filter:sort});
      //다시 모든 버튼의 개수만큼 반복
      for(let btn of btns){
        btn.classList.remove('on');
      }
      //클릭한 대상만 선택해서 클래스명 on을 추가해서 활성화
      e.currentTarget.classList.add('on');
    })
  }
})