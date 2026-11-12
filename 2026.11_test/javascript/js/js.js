document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
  function log(msg) {
    console.log(msg);
  }
  const tl1 = gsap.timeline({
    default: {
      duration: 0.8,
      ease: "expo.out",
    },
    scrollTrigger: {
      trigger: '.demo',
      start: 'top center',
      end: 'bottom center',
      scrub: true,
      markers: true,
    },
    onUpdate: () => log('진행률 : ' + tl1.progress().toFixed(2))
  });

  tl1.to('.b1', { x: 200, backgroundColor: '#ccc' })
    .add('label2')
    .to('.b2,.b3,.b4', {
      y: 100, opacity: 0.2,
      stagger: { each: 0.3, from: 'center', ease: "bounce.out", }
    }).addPause().add('label3')
    .to('.b1,.b2,.b3,.b4', {
      x: 0, y: 0, opacity: 1,
      backgroundColor: '#222'
    });

  const tl2 = gsap.timeline({ paused: true })
    .to('.panel', { x: 200, duration: 1, })
    .to('.panel', { rotate: 20, scale: 2, duration: 0.5, }, '<0.1')
    .to('.panel', { backgroundColor: 'blue', color: '#333', duration: 0.6, });

  document.addEventListener('keydown', e => {
    if(e.key === '1') tl1.play('label2');
    if(e.key === '2') tl1.play('label3');
    if(e.key.toLowerCase() === 'p') tl2.play();
  })



});//end