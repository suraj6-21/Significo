
function HomePageAnimation() {
  gsap.set(".slidesm", { scale: 5 })

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      // onUpdate: () => console.log('ScrollTrigger is updating'),
    },
  })

  tl.to(".videodiv", {
    '--clip': "0%",
    ease: Power2,
  }, 'a')
  tl.to(".slidesm", {
    scale: 1,
    ease: Power2,
  }, 'a')

  tl.to(".lft", {
    xPercent: -10,
    stagger: .03,
    ease: Power4,
  }, 'b')
  tl.to(".rgt", {
    xPercent: 10,
    stagger: .03,
    ease: Power4,
  }, 'b')
}
HomePageAnimation();


function realPageAnimation() {
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".real",
      start: "top top",
      end: "bottom bottom",
      scrub: 1
    },
    xPercent: -275,
    ease: Power4
  });
}
realPageAnimation();


function teamAnimation() {
  document.querySelectorAll(".listelm")
    .forEach(function (el) {
      el.addEventListener("mousemove", function (details) {
        gsap.to(this.querySelector(".picture"), {
          x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, details.clientX),
          opacity: 1,
          ease: Power4,
          duration: .5
        })
      })
      el.addEventListener("mouseleave", function (details) {
        gsap.to(this.querySelector(".picture"), {
          opacity: 0,
          ease: Power4,
          duration: .5
        })
      })
    })
}
teamAnimation();


function paraAimation() {
  var clutter = " ";
  document.querySelector(".textpara")
    .textContent.split("")
    .forEach(function (e) {
      // if(e === " ") clutter += `<span>&nbsp;</span>`
      clutter += `<span>${e}</span>`
    })
  document.querySelector(".textpara").innerHTML = clutter;

  gsap.set(".textpara span", { opacity: .3 })
  gsap.to(".textpara span", {
    scrollTrigger: {
      trigger: ".paragraph",
      start: "top 60%",
      end: "bottom 90%",
      scrub: 1,
    },
    opacity: 1,
    stagger: .03,
    ease: Power4
  })
}
paraAimation();


function locomotive(){
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
  })();
}
locomotive();


function capsulesAnimation(){
  gsap.to(".capsukeB",{
    scrollTrigger:{
      trigger: ".capsules",
      start: "top 70%",
      end: "bottom bottom",
      scrub: 1
    },
    y: 0,
    ease: Power4
  })
}
capsulesAnimation();


function bodyColorChange(){
  document.querySelectorAll(".section")
.forEach(function(el){
  ScrollTrigger.create({
    trigger: el,
    start: "top 20%",
    end: "bottom 20%",
    scrub: true,
    
    onEnter: function(){
      document.body.setAttribute("theme",el.dataset.color)
    },
    onEnterBack: function(){
      document.body.setAttribute("theme",el.dataset.color)
    }
  })
})
}
bodyColorChange();


function fotterAnimation() {
  gsap.to(".change", {
    scrollTrigger: {
      trigger: ".footer",
      start: "top 30%",
      end: "bottom 50%",
      scrub: 1
    },
    yPercent: 80,
    ease: Power4
  });
}
fotterAnimation();

function swiperAnimation(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
// swiperAnimation()


