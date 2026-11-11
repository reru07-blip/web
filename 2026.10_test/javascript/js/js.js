document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.to('.box_to', {
    x: 200,
    duration: 2.5,
    ease: "bounce.out",
  });
  gsap.from('.box_from', {
    x: 200,
    duration: 2.5,
    ease: "rough({ strength: 1, points: 20, template: none.out, taper: none, randomize: true, clamp: false })",
  });

  document.getElementById('btn_run').addEventListener('click', () => {
    gsap.to('.dot', {
      x: 400,
      duration: 3,
      delay: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "elastic.out(0.5,0.2)",
    })
  })

});//end