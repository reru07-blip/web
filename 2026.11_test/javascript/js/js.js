window.addEventListener('load', () => {
  const grid = new Isotope('section', {
    itemSelector: 'article',
    columWidth: 'article',
    transitionDuration: '0.5s',
  });

  const btns = document.querySelectorAll('main ul li');
  for(let btn of btns) {
    btn.addEventListener('click',e=>{
      e.preventDefault();
    });
  }
});